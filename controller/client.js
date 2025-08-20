const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const DBmessage = require("../models/Message");

const message = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingclient = await DBmessage.findOne({ email });
    const newclient = await DBmessage.create({
      name,
      email,
      message,
    });
    res.status(200).json({ message: "massage update", messages: newclient });
  }
   catch (error) {
    console.log(error);
    
  }
};

module.exports = { message };
