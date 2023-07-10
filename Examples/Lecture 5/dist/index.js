import express from 'express';
import data from './data/MOCK_DATA.js';
const app = express();
const port = 3000;
// app.use(express.text()); // Just to read the body of requests
app.use(express.json()); // Just to read the body of requests
app.get('/students/all', (req, res) => {
    res.json(data);
});
app.get('/students/passed', (request, response) => {
    const passedStudents = data.filter(std => std.mark >= 60);
    response.json({ students: passedStudents, total: passedStudents.length });
});
app.get('/students', (req, res) => {
    // console.log(req);
    res.send(data);
});
app.post('/students', (req, res) => {
    // console.log(req.headers);
    // console.log(req.method);
    // console.log("Request Body:");
    // console.log(req.body);
    const newStudent = req.body;
    data.unshift(newStudent);
    res.send("Thanks, New student added!");
});
app.listen(port, () => {
    console.log(`The app is listening on port ${port}`);
});
/// npm i @types/express -D
