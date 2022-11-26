const express = require("express")

const app = express()

app.get("/", (req, res) => {})

app.listen(3001, () => console.log("server is running on port 3001"))
