import { io } from "../../server.js";
import { sequelize } from "../config/dbConfing.js";
import { Polling } from "../modals/pilling.modal.js";
import ApiRespose from "../util/apiRespose.util.js";
import ErrorResponse from "../util/errorRespose.util.js";
import jsonFormator from "../util/jsonFormater.js";
import statusCode from "../util/statusCode.util.js";
import pollingSchema from "../validation/polling.schema.js"

// to add new polling
const addPoll = async (req, res, next) => {
    try {

        const { userName, message, productId } = await pollingSchema.validate(req.body);

        const insertResult = jsonFormator(await Polling.create({
            username: userName,
            description: message,
            product_id: productId,
            created_on: sequelize.literal("CURRENT_TIMESTAMP")
        }))

        if (!insertResult) {
            return next(new ErrorResponse())
        }

        res.status(statusCode.ok).json(new ApiRespose())
        // all polling of the current product

        const allPolings = jsonFormator(await Polling.findAll({ where: { product_id: productId } }))
        io.emit(`polling:${productId}`, { polls: allPolings })

    } catch (error) {
        next(error)
    }
}




export { addPoll }