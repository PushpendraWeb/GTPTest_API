import { NUMBER } from "sequelize";
import { ProductsModal } from "../modals/product.modal.js";
import { productSchema } from "../validation/product.schema.js";
import ErrorResponse from "../util/errorRespose.util.js";
import statusCode from "../util/statusCode.util.js";
import { idSchema } from "../validation/id.schema.js";
import ApiRespose from "../util/apiRespose.util.js";
import { sequelize } from "../config/dbConfing.js";
import jsonFormator from "../util/jsonFormater.js";
import { Polling } from "../modals/pilling.modal.js";

const getCode = async () => {
    return new Promise((resolve, reject) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 8; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return resolve(result);
    });
}

const addProduct = async (req, res, next) => {
    try {
        const data = req.body
        const { productName, title, description, discount, quantity, MRP, productImage } = await productSchema.validate(data);
        // check if product is already exists 
        let isExists = await ProductsModal.findOne({
            where: {
                product_name: productName,
            }
        })
        if (isExists) {
            return next(new ErrorResponse("Product is already Exists!!", statusCode.alreadyExists));
        }
        // get product number 
        const productNo = await getCode()
        //  get selling price 
        const sellingPrice = Number(MRP) - Number(discount)
        let createProduct = await ProductsModal.create({
            product_no: productNo,
            product_name: productName,
            title: title,
            product_details: description,
            quantity: quantity,
            MRP: MRP,
            sale_price: sellingPrice,
            discount: discount,
            main_image: productImage,
            created_by: req?.user?.id ?? 0

        })
        if (!createProduct) {
            return next("Product is not created,Please try again!!")
        }
        return res.status(201).json(new ApiRespose("Product is created Successfully!!"));
    } catch (error) {
        return next(error)
    }
}
// get All Product 
// const getProduct = async (req, res, next) => {
//     try {

//     } catch (error) {
//         return next(new ErrorResponse(statusCode.badRequest))
//     }
// }
// update product by id
const updateProduct = async (req, res, next) => {
    try {
        const data = req.body;
        const combinedSchema = idSchema.concat(productSchema);
        const { id, productName, title, description, discount, quantity, MRP, productImage } = await combinedSchema.validate(data);
        // get product data 
        let productData = await ProductsModal.findOne({
            where: { id: id }
        })
        if (!productData) {
            return next(new ErrorResponse("Product not found", statusCode.notFound))
        }
        //  get selling price 
        const sellingPrice = Number(MRP) - Number(discount)
        let updateProductData = await ProductsModal.update({
            product_name: productName,
            title: title,
            product_details: description,
            quantity: quantity,
            MRP: MRP,
            sale_price: sellingPrice,
            discount: discount,
            main_image: productImage,
            updated_by: req?.user?.id ?? 0
        }, { where: { id: id } })
        if (!updateProductData) {
            return next(new ErrorResponse("Product update Failed"))
        }
        return res.status(200).json(new ApiRespose(`product updated successfully`))
    } catch (error) {
        return next(error)
    }
}
const getAllProduct = async (req, res, next) => {
    try {
        const data = req.params
        let getAll = await ProductsModal.findAll({
            where: {
                created_by: data?.created_by ?? 0
            }
        })
        if (!getAll) {
            return next(new ApiRespose(statusCode.notFound))
        }
        return res.status(200).json(getAll)
    } catch (error) {
        return next(error)
    }
}
const getProductByid = async (req, res, next) => {
    try {
        const data = req.params;
        let getAll = jsonFormator(await ProductsModal.findOne({
            where: {
                id: data.id
            }
        }))

        if (!getAll) {
            return next(new ApiRespose(statusCode.notFound))
        }
        const { productId } = req.params;

        const allPollings = await Polling.findAll({
            where: {
                id: data.id
            }
        })

        return res.status(200).json(new ApiRespose("success", true, { productData: getAll, pollings: allPollings }))
    } catch (error) {
        return next(error)
    }
}
const getRandomProduct = async (req, res, next) => {
    try {
        let getAll = await ProductsModal.findAll({
            order: [
                [sequelize.fn('RAND')]
            ],
            limit: 5
        });

        if (!getAll) {
            return next(new ApiRespose(statusCode.notFound))
        }
        return res.status(200).json(getAll)
    } catch (error) {
        return next(error)
    }
}


const updateQuentity = async (req, res, next) => {
    try {
        const { id, quantity } = req.body;
        let getAll = await ProductsModal.findOne({
            where: {
                id: id
            }
        });

        let fquantity = Number(getAll.quantity) - Number(quantity);

        if (fquantity <= 0) {
            return res.status(200).json(new ApiRespose("product out of stock", false))
        }

        let UpdateQ = await ProductsModal.update({

            quantity: fquantity

        }, { where: { id: id } });
        if (!UpdateQ) {
            return next(new ApiRespose(statusCode.notFound))
        }

        return res.status(200).json(new ApiRespose("uproduct updated successfully", true, fquantity))
    } catch (error) {
        return next(error)
    }
}
export { addProduct, updateProduct, getAllProduct, getProductByid, getRandomProduct, updateQuentity }