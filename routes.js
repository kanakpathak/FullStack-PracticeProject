const controlUser = require('./db/controller/users')
const express = require('express');
const router = express.Router();

router.post('sign-up',(req, res, next)=>{
    console.log("in sign up")
    const user = {
        userId: req.body.user.userId,
        password: req.body.user.password
    }

    controlUser.findUser(user, res)

})


module.exports = router;