const { response } = require("express");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

//create User

const CreateUser = async (req, res ,next) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      res.status(401).json({
        statusCode: 401,
        err: "please provide me required field",
      });
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const data = {
      username: username,
      email: email,
      password: hashPassword,
    };

    const user = new User(data);
    const response = await user.save();

    res.status(200).json({
      statusCode: 200,
      user: response,
    });
  } catch (error) {
   next(error)
  }
};

module.exports =  CreateUser; 
