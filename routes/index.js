const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/index'); 
});

router.get('/about', (req, res) => {
    res.render('pages/about'); 
});


router.get('/gallery', (req, res) => {
    res.render('pages/gallery'); 
});


router.get('/booking', (req, res) => {
    res.render('pages/booking'); 
});

router.get('/contact', (req, res) => {
    res.render('pages/contact'); 
});

module.exports = router;
