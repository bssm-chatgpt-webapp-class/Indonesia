const express = require('express');
const router = express.Router();

let db = [{id: 1, todo: "할일1"}]
let id = 1;

router.get('/', (req, res) => {
    res.json(db)
})

router.post('/', (req, res) => {
    const todo = req.body;
    db.push({id: ++id, ...todo})
    res.json("성공")
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    db = db.filter((todo) => todo.id !== Number(id));
    return res.json("성공");
})

router.put("/:id", (req, res) => {
    const {todo} = req.body;

    const index = db.findIndex((todo) => todo.id === Number(req.params.id));
    db[index].todo = todo;

    return res.json("성공");
})

module.exports = router;
