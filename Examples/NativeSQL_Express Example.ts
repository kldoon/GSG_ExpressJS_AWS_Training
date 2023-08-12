import express  from 'express';
import mysql from 'mysql';

const app = express();
app.use(express.json());

// MySQL configuration
const dbConfig = {
    host: 'localhost',
    user: 'your_mysql_username',
    password: 'your_mysql_password',
    database: 'your_database_name',
};

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);

// Create a new user
app.post('/users', (req, res) => {
    const { username, email } = req.body;
    const query = 'INSERT INTO users (username, email) VALUES (?, ?)';
    pool.query(query, [username, email], (error, results) => {
        if (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ message: 'Error creating user' });
        } else {
            const userId = results.insertId;
            res.status(201).json({ id: userId, username, email });
        }
    });
});

// Get all users
app.get('/users', (req, res) => {
    const query = 'SELECT * FROM users';
    pool.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ message: 'Error fetching users' });
        } else {
            res.json(results);
        }
    });
});

// Get a specific user by ID
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const query = 'SELECT * FROM users WHERE id = ?';
    pool.query(query, [userId], (error, results) => {
        if (error) {
            console.error('Error fetching user:', error);
            res.status(500).json({ message: 'Error fetching user' });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.json(results[0]);
        }
    });
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const { username, email } = req.body;
    const query = 'UPDATE users SET username = ?, email = ? WHERE id = ?';

    pool.query(query, [username, email, userId], (error) => {
        if (error) {
            console.error('Error updating user:', error);
            res.status(500).json({ message: 'Error updating user' });
        } else {
            res.json({ id: userId, username, email });
        }
    });
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    const query = 'DELETE FROM users WHERE id = ?';
    pool.query(query, [userId], (error) => {
        if (error) {
            console.error('Error deleting user:', error);
            res.status(500).json({ message: 'Error deleting user' });
        } else {
            res.json({ message: 'User deleted' });
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});