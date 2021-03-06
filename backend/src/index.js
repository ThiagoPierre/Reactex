const bodyParser = require('body-parser')
const cors = require('cors');
const express = require("express");
const morgan = require('morgan');
const mongoose = require("mongoose");

const authMiddleware = require('./middlewares/auth.middleware');

require('dotenv').config()

/* const {HTTP_PORT, MONGO_URL} = process.env; */

const UserRouter = require("./routes/user.router");

mongoose.connect('mongodb+srv://thiagopierre:L7ym9GzZnfZbYhua@ganguedoreact.dv413.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

/* app.use(authMiddleware) */
app.use(cors());
app.use(bodyParser.json())
app.use(morgan('dev'))

app.get("/", (request, response) => {
  response.json({ message: "Hello World" });
});

app.use("/api", UserRouter);

app.listen(3333, () => {
  console.log(`Rodando na porta ${3333}`);
});