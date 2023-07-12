import express from 'express';
import data from './data/MOCK_DATA.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/students', (req, res) => {
  res.send(data);
});

app.post('/students', (req, res) => {
  const newStudent = req.body;
  data.unshift(newStudent);

  res.send("Thanks, New student added!");
});

// students/1
// students/3
// students/anyID
// students/100
// students/   <== this will not catch
app.put('/students/:id', (req, res) => {
  const stdId = parseInt(req.params.id);

  for (let i = 0; i < data.length; i++) {
    if (data[i].id === stdId) {
      data[i] = { ...data[i], ...req.body };
      res.send("Success update student!");
      return;
    }
  }
  res.send("Failed update student!");
});

// /path?QParam=value&QParam2=value2&QParam3=value3
// /students?id=10
// /students?id=
// /students?
// /students?id=10&mark=60
app.delete('/students', (req, res) => {
  if (!req.query?.id) {
    res.send('Error: Please send student ID in query params!');
    return;
  } else {
    const stdId = parseInt(req.query.id.toString());

    let found = data.findIndex((std) => std.id === stdId);
    if (found >= 0) {
      data.splice(found, 1);
      res.send("Success Delete Student!");
      return;
    } else {
      res.send("Error: Student Not found!");
    }
  }
});

// app.get('/students?mark=Mark&collage=CollageName')

app.listen(port, () => {
  console.log(`The app is listening on port ${port}`);
});