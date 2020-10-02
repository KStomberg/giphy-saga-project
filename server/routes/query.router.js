const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

router.get('/:tacos', (req, res) => {
    //res.send('Hello World'); // Replace this
    axios({
      method: 'GET',
      url: `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.params.tacos}`,
      limit: 20,
    //   params: {
    //     api_key: process.env.GIPHY_API_KEY,
    //     q: `req.params.tacos`
    //     //this.props.gifList
    //   }
    }).then(response => {
        console.log('got back data', response.data);
        res.send(response.data);
      }).catch(err => {
        console.error(err);
    
        res.sendStatus(500);
      });
    });
    

module.exports = router;