// 1. Import Express
import express from "express";
import productRouter from "./src/features/product/product.routes.js";
import bodyParser from "body-parser";

// 2. create server

const server = express();

server.use(bodyParser.json());

//For all request related to product, redirect to product routes
// localhost:3000/api/products

server.use("/api/products", productRouter);

// 3. Default Request handler

server.get("/", (req, res) => {
  res.send("Welcome to Ecommerce APIs");
});

// 4. Specify Port.

server.listen(3000, () => {
  console.log("Server is running at 3000");
});
