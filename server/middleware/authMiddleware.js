const jwt = require('jsonwebtoken')
const connection = require("../models/connector");

const validateToken = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const [row] = await connection.query("select * from user where email = ?",[decoded.email])

        req.user = row
        next()
    }catch(err){
        return res.status(410).json(err)
    }
}

module.exports = validateToken;