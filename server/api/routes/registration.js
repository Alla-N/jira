const express = require('express');
const {userValidationRules, validate} = require('../middleware/validator.js');
const Router = express.Router;
const router = new Router;
const User = require('../models/User');


router.post(
  '/register',
  userValidationRules(),
  validate,
  async (req, res) => {
    try {
      const newUser = await new User({
        username: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });

      await newUser.save();

      res.status(200).json({message: 'new user created'});
    } catch (e) {
      console.log('ERROR - ', e);
      res.status(500).json({message: `Error: ${e}`});
    }
  });


module.exports = router;


