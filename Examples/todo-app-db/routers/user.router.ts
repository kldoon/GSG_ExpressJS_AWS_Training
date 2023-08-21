import express from 'express';
import { User } from '../db/entity/User.js';
import { Profile } from '../db/entity/Profile.js';
import db from '../db/index.js';

const router = express.Router();

router.get('/', (req, res) => {
  console.log(res.locals.user);
  res.send('All Users');
});

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const user = await User.findOne({ where: { id }, relations: ['todos', 'profile'] });
    res.send(user);
  } catch (error) {
    res.status(404).send("User not found!")
  }
});

router.post('/', async (req, res) => {
  try {
    const user = new User();
    const profile = new Profile();
    profile.bio = 'Hello, Welcome to my Profile!';
    profile.imageURL = 'https://img.freepik.com/free-icon/user_318-563642.jpg';
    user.userName = req.body.userName;
    user.profile = profile;
    db.dataSource.transaction(async (transactionManager) => {
      await transactionManager.save(profile);
      await transactionManager.save(user);
    }).then(() => {
      res.send('User Created');
    }).catch(error => {
      res.status(500).send("Something went wrong: " + error);
    });

  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong, " + error);
  }
});

router.put('/:id', (req, res) => {
  res.send('User Updated');
});

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const user = await User.findOneBy({ id });
    if (user) {
      await user.remove();
      res.send('User Deleted');
    } else {
      res.status(404).send('User not found!');
    }
  } catch (error) {
    res.status(500)
      .send(`Something went wrong, you can't delete a user if he have todo items!`);
  }
});

export default router;