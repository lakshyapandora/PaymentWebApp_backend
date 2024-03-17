const express = require('express')
const userRouter = require('./user');
const accountRouter = require('./account');

const router = express.Router();

router.use('/user',userRouter);
router.use('/account',accountRouter);
// debug
router.get('/',(req,res)=>res.send("Hello ji"));

module.exports = router;