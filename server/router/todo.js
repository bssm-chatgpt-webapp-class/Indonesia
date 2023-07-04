const express = require('express');
const router = express.Router();
const connection = require("../models/connector")

router.get('/', async (req, res) => {
    try{
        const [row] = await connection.query("SELECT * FROM todo")



        return res.json(row)
    }catch(err){
        //if error, console log and throw error
        console.log(err)
        throw new Error(err)
    }
})

router.post('/', async (req, res) => {
    const {todo,completed} = req.body;
    await connection.query("INSERT INTO todo (todo,completed) VALUES (?,?)",[todo,completed])
    res.json("성공")
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await connection.query("DELETE FROM todo WHERE id = ?",[id])
    return res.json("성공");
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const {todo,completed} = req.body;
    await connection.query("UPDATE todo SET todo = ?, completed=? WHERE id = ?",[todo,completed,id])

    return res.json("성공");
})

module.exports = router;
