const express = require('express');
const router = express.Router();
const connection = require("../models/connector")
const jwt = require("jsonwebtoken");
const validateToken = require("../middleware/authMiddleware")

router.get('/',async (req, res,next) => {
    try {
        const [row] = await connection.query("SELECT * FROM todo")

        return res.json(row)
    } catch (err) {
        //if error, console log and throw error
        console.log(err)
        throw new Error(err)
    }
})

router.post('/', validateToken,async (req, res) => {
    try {
        const {todo, completed} = req.body;
        await connection.query("INSERT INTO todo (todo,completed,user_id) VALUES (?,?,?)", [todo, completed, req.user.id])

        return res.json("성공")
    } catch (e) {
        console.log(e)
        return res.status(400).json("실패")

    }

})

router.delete("/:id", validateToken, async (req, res) => {
    const id = req.params.id;
    const [row] = await connection.query("DELETE FROM todo WHERE id = ? and user_id = ?", [id, req.user.id])

    if(row.length === 0){
        return res.status(400).json("실패")
    }

    return res.json("성공");


})

router.put("/:id", validateToken , async (req, res) => {
    const id = req.params.id;
    const {todo, completed} = req.body;
    const [row] =await connection.query("UPDATE todo SET todo = ?, completed=? WHERE id = ? where user_id = ?", [todo, completed, id, req.user.id])

    if(row.length === 0){
        return res.status(400).json("실패")
    }
    return res.json("성공");
})

module.exports = router;
