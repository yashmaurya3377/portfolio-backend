const dayjs = require("dayjs");
const DBmessage = require("../models/Message");

const message = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const utcNow = dayjs();
    const formattedTime = utcNow.format("YYYY-MM-DD HH:mm:ss A");

    const existingclient = await DBmessage.findOne({ email });
    if (existingclient) {
      console.log("thanks for reconnecting with me ");
    }
    console.log(formattedTime);
    
    const newclient = await DBmessage.create({
      name,
      email,
      message,
      time: formattedTime,
    });

    res.status(200).json({
      message: "Thanks for reaching out! I've received your message and will reply soon.",
      messages: newclient,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { message };
