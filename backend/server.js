const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const socketio = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.json())
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URL)
	res.setHeader("Access-Control-Allow-Methods", 'GET, POST, DELETE')
    res.setHeader("Access-Control-Allow-Headers", 'Content-Type', "Authorization")
    res.setHeader("Access-Control-Allow-Credentials", true)
    res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	next();
})

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello to Fitness Activity Tracker API");
});
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  () => console.log("Database connected")
);

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
