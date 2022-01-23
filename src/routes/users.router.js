const express = require('express');
const UserService = require('../services/users.service');
const Service = new UserService();
const router = express.Router();

router.get('/', (req, res) => {
    const { limit, offset } = req.query;
    if (limit && offset) {
        res.json(
            {
                limit,
                offset
            }
        );
    } else {
        const users = Service.find();
        res.json(users)
    }
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const users = Service.findOne(id);
    res.json(users)

});



module.exports = router;
