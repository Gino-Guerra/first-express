
import express from "express";
import { getAllStudents, addStudent } from "./src/student.js";






const app = express()

app.use(express.json())
app.get("/students", getAllStudents)
app.post('/students', addStudent)

app.get("/hello", (request, response) => {
    response.send("Hello, there!")
})

app.listen(3000, () => {
    console.log('listening on http://localhost:3000...')
})


