// src/app.js


import express from "express";
import cors from "cors";
import router from './routes/router.js';
// import paymentRoute from "./routes/paymentRoutes.js";
import { errorHandler, notFoundHandler } from './middlewares/errorHandling.js';

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

// app.use("/api", paymentRoute);

// app.get("/api/getkey", (req, res) =>
//   res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
// );

// Middleware for handling 404 errors
app.use(notFoundHandler);

// Middleware for handling errors
app.use(errorHandler);

export { app };