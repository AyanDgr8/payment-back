// index.js

// require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from './app.js';
import 'colors';
// import Razorpay from "razorpay";
import mongoose from "mongoose";

dotenv.config({
  path: './.env'
});

const server = app.listen(process.env.PORT || 8000, () => {
  console.log(`⚙️  Server is running at port : ${process.env.PORT}`.cyan.bold);
});

process.title = 'SnylloEstetica Payment ';

const gracefulShutdown = async () => {
  console.log('📢 Received shutdown signal, closing server and database connections...'.yellow.bold);

  await mongoose.disconnect();
  server.close(() => {
    console.log('💤 Server and database connections closed successfully.'.blue.bold);
    process.exit(0);
  });
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

connectDB()
  .then(() => {
    console.log(`🔌 MongoDB connected`.green.bold);
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!! ".red.bold, err);
    process.exit(1);
  });


  // export const instance = new Razorpay({
  //   key_id: process.env.RAZORPAY_API_KEY,
  //   key_secret: process.env.RAZORPAY_APT_SECRET,
  // });



// var instance = new Razorpay({
//     key_id: 'YOUR_KEY_ID',
//     key_secret: 'YOUR_KEY_SECRET',
// });

// const Razorpay = require('razorpay');

// app.post('create/orderId', (req,res) =>{
//   console.log("Create orderId request",req.body);
//   var options = {
//     amount: req.body.amount,  // amount in the smallest currency unit
//     currency: "INR",
//     receipt: "rcptid1"
//   };
//   instance.orders.create(options, function(err, order) {
//     console.log(order);
//     resizeBy.send({orderId : order.id})
//   });

// })