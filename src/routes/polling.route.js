import express from "express";
import { addProduct, updateProduct, getAllProduct, getProductByid, getRandomProduct } from "../controllers/products.controller.js";
import multer from "multer";
import auth from "../middlewares/auth.middleware.js";
import { addPoll } from "../controllers/polling.controller.js";


export const pollingRouter = express.Router();

pollingRouter.post('/pollings/poll', addPoll)
// to veiew all pollings by product id
