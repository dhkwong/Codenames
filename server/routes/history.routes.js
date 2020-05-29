const express = require('express');
const router = express.Router();
const historys = require('./../controllers/historys');

router.get('/', historys.all)
    .get('/:id', historys.getOneById)
    .post('/', historys.create)
    .put('/:id', historys.update)
    .delete('/:id', historys.delete)

module.exports = router;
