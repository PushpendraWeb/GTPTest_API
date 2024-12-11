
import Yup from 'yup'
import config from '../config/config.js'
import ErrorResponse from '../util/errorRespose.util.js';
import ApiRespose from '../util/apiRespose.util.js';

const errorHandler = (error, req, res, next) => {
    const isDevMode = config.APP_MODE == "dev"
    console.log("Error =>", error)
    if (isDevMode && error instanceof ErrorResponse) {
        res.status(200).json(new ApiRespose(error.message, false, error));
        return
    }

    if (error instanceof Yup.ValidationError) {
        res.status(200).json(new ApiRespose(error.message, false, isDevMode ? error : null))
        return
    }

    res.status(200).json(new ApiRespose("internal server error", false, null))
}

export default errorHandler