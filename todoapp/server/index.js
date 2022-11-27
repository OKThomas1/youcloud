const express = require("express")
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())

var connection = require('./database').databaseConnection

app.get("/", (req, res) => {

    connection.query('SELECT * FROM todoapp', (err, result) => {
        if (err) throw err
        //console.log(result)
        res.send(result)
    })
})

app.get("/incompleted", (req, res) => {

    connection.query('SELECT * FROM todoapp WHERE completed = 0', (err, result) => {
        if (err) throw err
        //console.log(result)
        res.send(result)
    })
})

app.get("/completed", (req, res) => {

    connection.query('SELECT * FROM todoapp WHERE completed = 1', (err, result) => {
        if (err) throw err
        //console.log(result)
        res.send(result)
    })
})

app.post("/", (req, res) => {
    //console.log(req.body)
    const todo = req.body.todo
    const postdate = req.body.postdate

    connection.query('INSERT INTO todoapp (todo, postdate) VALUES (?,?)', [todo, postdate], (err, result) => {
        if (err) throw err
        //console.log(result)
        res.send(result)
    })
})

app.put("/:id", (req,res) => {
    //console.log(req.body)
    const upid = req.params.id
    const completed = req.body.completed

    connection.query('UPDATE todoapp SET completed=? WHERE id=?', [completed,upid], (err, result) => {
        if (err) throw err
        //console.log(result)
        res.send(result)

    })
})

app.delete("/:id", (req, res) => {
    const delid = req.params.id

    connection.query('DELETE FROM todoapp WHERE id=?',delid, (err, result) => {
        if (err) throw err
        //console.log(result)
        res.send(result)
    })
})

app.listen(3001, () => console.log("server is running on port 3001"))

