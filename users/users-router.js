const router = require('express').Router();

const Users = require('./users-model');


// get users

router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(error => {
            res.status(500).json({message: "unable to find users"})
        })
})


module.exports = router