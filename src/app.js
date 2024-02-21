// src/app.js


import express from "express";
import cors from "cors";
import createRouter from './routes/router.js';
import { errorHandler, notFoundHandler } from './middlewares/errorHandling.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/form", createRouter);

// Middleware for handling 404 errors
app.use(notFoundHandler);

// Middleware for handling errors
app.use(errorHandler);

export { app };