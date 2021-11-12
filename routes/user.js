const express = require('express');
const router = express.Router();

const userController = require('../controller/user')
router.post('/add',userController.addData);

router.put('/:id',userController.update);

router.get('/get',userController.getData);
router.get('/:id',userController.getUserByUserId);

router.delete('/:id',userController.deleteData);

module.exports = router;


