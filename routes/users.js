
const express = require('express');
const router = express.Router();
let controller = require('../controllers/users');
app.use(express.json)
router.get('/', controller.listUsers);
router.get('/:id', controller.createUser);
router.post('/', controller.postUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;