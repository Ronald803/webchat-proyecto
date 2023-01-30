const express = require('express');
const router = express.Router();
const path = require('path');

const views = path.join(__dirname,"/../views");

const isLoggendIn = require('../middlewares/isLoggedIn');

router.get('/',isLoggendIn,(req,res)=>{
    res.sendFile(views + '/index.html')
});
router.get('/register',(req,res)=>{
    res.sendFile(views + "/register.html");
})

module.exports = router;
