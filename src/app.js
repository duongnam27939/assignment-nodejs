import mongoose from "mongoose";
import express from "express";
import productsRouter from "./router/products"

const app = express();
app.use(express.json())
app.use("/api",productsRouter)

mongoose.connect("mongodb://127.0.0.1:27017/assignment1")


export const viteNodeApp = app;