const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { todo } = req.body;
    // sending back the todo that we received
    res.json(todo);
});

module.exports = router;







/*
const { list, create, read, update, destroy } = require('../controllers/todos');

router.get('/', list);
router.post('/', create);
router.get('/:todoId', read);
router.put('/:todoId', update);
router.delete('/:todoId', destroy);
*/
