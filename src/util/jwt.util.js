import jwt from 'jsonwebtoken'
import config from "../config/config.js"
const signToken = async (payload) => {
    const signResult = await jwt.sign(payload, config.JWT_SECRET, {
        expiresIn: '30days'
    })

    if (!signResult) {
        throw new Error("error while singning token")
    }
    return signResult
}

const verifyToken = async (token) => {
    const data = jwt.verify(token, config.JWT_SECRET)
    console.log(data);
    return data;
}

export default {
    signToken,
    verifyToken
}