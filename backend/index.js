require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // Naya import


const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");


const authRoute = require("./Routes/AuthRoute"); 

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();


app.use(
  cors({
    origin: ["http://localhost:3000"], 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // 
  })
);

app.use(cookieParser()); 
app.use(express.json()); 
app.use(bodyParser.json());



app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();
  res.send("Order saved");
});


app.use("/", authRoute); 

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}!`);
  mongoose.connect(url);
  console.log("DB connected");
});


