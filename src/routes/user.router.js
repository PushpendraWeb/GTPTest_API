import express from "express";
import { login, profile, register, users, updateProfile, sellerById } from "../controllers/user.controller.js";
import auth from "../middlewares/auth.middleware.js";

const userRouter = express.Router();

userRouter.post('/user/login', login)
userRouter.post('/user/register', register)
userRouter.get('/user/profile', auth, profile)
userRouter.post('/user/profile/update', auth, updateProfile)
userRouter.get('/users', users)
userRouter.get('/users/:id', sellerById)

export default userRouter