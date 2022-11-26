const express = require("express")
const app = express()
app.use(express.json())

var connection = require('./database').databaseConnection

app.get("/", (req, res) => {
    let sql = 'SELECT * FROM todoapp'

    connection.query(sql, (err, result) => {
        if (err) throw err
        //console.log(result)
        res.send(result)
    })
})

app.post("/", (req, res) => {
    console.log(req.body)
    const todo = req.body.todo
    const postdate = req.body.postdate

    connection.query('INSERT INTO todoapp (todo, postdate) VALUES (?,?)', [todo, postdate], (err, result) => {
        if (err) throw err
        console.log(result)
        res.send(result)
    })
})

app.delete("/:id", (req, res) => {})

app.listen(3001, () => console.log("server is running on port 3001"))

