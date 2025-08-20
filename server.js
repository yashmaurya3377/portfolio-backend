// const express = require("express");
// const Route = require('./routes/clientRoute');
// const connectDB = require("./config/db");
// const port = 5000;
// const app = express();
// app.use(express.json());
// connectDB()
// app.use('/', Route);
// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });
// 3xAyEQrjg1NylHFQ
// mongodb+srv://yashmaurya3377:3xAyEQrjg1NylHFQ@cluster0.bcsfybt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require("express");
const port = 5000;
const app = express();
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const Route = require('./routes/clientRoute')
const cors=require('cors')
dotenv.config();
connectDB();
app.use(cors())
app.use(express.json());
app.use('/',Route)
app.listen(port, () => {
  console.log("server is running at", port);
});
