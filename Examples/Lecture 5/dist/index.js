import express from 'express';
import data from './data/MOCK_DATA.js';
const app = express();
const port = 3000;
app.get('/students/all', (req, res) => {
    res.json(data);
});
app.get('/students/passed', (request, response) => {
    const passedStudents = data.filter(std => std.mark >= 60);
    response.json({ students: passedStudents, total: passedStudents.length });
});
app.get('/bye', (req, res) => {
    res.send("Bye Ahmad!");
    res.json();
});
app.listen(port, () => {
    console.log(`The app is listening on port ${port}`);
});
/// npm i @types/express -D
