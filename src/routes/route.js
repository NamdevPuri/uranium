const express = require('express');
const logger = require('../logger/logger.js')
const assign = require('../util/helper')

const router = express.Router();

router.get('/test-me', function (req, res) { 
   //console.log(logger.welcome())

//    logger.welcomeMassags();


    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
  const months = ['january','february','march','april','may','june','july','augest','september','october','november','december']

    res.send('<h1> Namdev Puri<h1>'+'my fourth API')
    console.log(lodesh.chunk(months,4))

    const odd = [1,3,5,7,9,11,13,15,17,19];
    let lodash=requrier('lodash');
    console.log(lodash.tail(odd));
});


router.get('/test-me5', function (req, res) {
    res.send('My final ever api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason