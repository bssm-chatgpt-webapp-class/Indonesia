const express = require('express');
const router = express.Router();
const connection = require("../models/connector")
const jwt = require("jsonwebtoken")

router.post('/signin', async (req, res) => {
    try{
        const {email,pw} = req.body;
        const [row] = await connection.query("select * from user where email = ? and password = ?",[email,pw])
        if(row.length === 0){
            return res.status(400).json("아이디나 비밀번호가 틀렸습니다.")
        }

        const token = jwt.sign({email},"secret")

        return res.json({token})
    }catch(err){
        //if error, console log and throw error
        console.log(err)
        throw new Error(err)
    }
})

router.post('/signup', async (req, res) => {
    const {email,pw} = req.body;
    await connection.query("INSERT INTO user (email,password) VALUES (?,?)",[email,pw])
    res.json("성공")
})


module.exports = router;
