import express from "express";
import { addProduct, updateProduct, updateQuentity, getAllProduct, getProductByid, getRandomProduct } from "../controllers/products.controller.js";
import multer from "multer";
import auth from "../middlewares/auth.middleware.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now().toString() + file.originalname)
    }
});
const upload = multer({ storage: storage });
const productRouter = express.Router();
// routes will be defined here 

productRouter.post("/add-product", auth, addProduct)

productRouter.post("/update-product", auth, updateProduct)

productRouter.get("/get-all-product", getAllProduct)

productRouter.get("/get-by-id-product/:id", getProductByid)

productRouter.get("/get-random-product", getRandomProduct)
productRouter.post("/update-product-quentity", updateQuentity)


productRouter.post("/upload-image", upload.single('file'), (req, res) => {
    res.send({image:req.file.filename});
});

export default productRouter