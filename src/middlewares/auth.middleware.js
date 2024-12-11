import apiResponse from '../util/apiRespose.util.js'
import jwtUtil from '../util/jwt.util.js';
const auth = async (req, res, next) => {
    try {
        console.log("headers =>", req.headers)
        let token = req.headers.authorization;
        console.log("token :", token)
        if (!token || token == 0) {
           return res.status(200).json(new apiResponse("unauthorized access", false, null))
        }
        token = token.split(' ')[1];

        if (token === null || token == undefined || token?.length < 25) {
            return res.status(200).json(new apiResponse("Unauthorized access", false, null))
        }

        const tokenDetails = await jwtUtil.verifyToken(token)
        if (tokenDetails) {
            req.user = tokenDetails;
            next()
        }
        else {
            return res.status(200).json(new apiResponse("Invalid token", false, null))
        }


    } catch (error) {
        console.error(error);
        res.status(500).json(new apiResponse("Internal Server Error", false, null))
    }
}

export default auth;