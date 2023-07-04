require("dotenv").config()
const express = require('express')
const app = express()
const router = require("./router")
const path = require("path");



app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,'..','/client/build')))

app.use("/api",router)

app.get('/', (req, res) => {
    res.send(express.static(path.join(__dirname,'..','/client/build/index.html')))
})

app.use( (err,req, res,next) => {
    console.log(err)
    return res.status(400).json("실패")
})


app.listen(8088, () => {
    console.log(`Example app listening on port 8088`)
})