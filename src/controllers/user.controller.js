import User from "../modals/user.modal.js";
import ErrorResponse from "../util/errorRespose.util.js";
import statusCode from "../util/statusCode.util.js";
import loginSchema from "../validation/login.schema.js"
import jwtUtil from "../util/jwt.util.js";
import ApiRespose from "../util/apiRespose.util.js";
import registerSchema from "../validation/register.schema.js";
import jsonFormator from "../util/jsonFormater.js";
import { ProductsModal } from "../modals/product.modal.js";
import { idSchema } from "../validation/id.schema.js";
import { sequelize } from "../config/dbConfing.js";

const login = async (req, res, next) => {
    try {

        const { email, password } = await loginSchema.validate(req.body);


        // check wether user already existst or not

        const isUserExists = jsonFormator(await User.findOne({
            where: {
                email: email
            }
        }))

        if (!isUserExists) {
            return next(new ErrorResponse("user does not exist", 200))
        }
        const isValidPassword = isUserExists.password === password;

        if (!isValidPassword) {
            return next(new ErrorResponse("invalid password !", statusCode.unauthorized,))
        }

        //remove password from  user object
        delete isUserExists.password;

        const token = await jwtUtil.signToken(isUserExists);
        console.log("token", token)
        res.status(statusCode.ok).json(new ApiRespose("login successfully ", true, { token: 'Bearer ' + token }))

    } catch (error) {
        next(error)
    }
}

const register = async (req, res, next) => {
    try {
        {
            const { fullName, password, mobileNo, email, zipCode, address } = await registerSchema.validate(req.body)
            /*
            CREATE TABLE `user` (
      `id` int NOT NULL AUTO_INCREMENT,
      `full_name` varchar(45) NOT NULL,
      `email` varchar(45) NOT NULL,
      `mobile_no` varchar(11) NOT NULL,
      `password` varchar(45) DEFAULT NULL,
      `address` longtext NOT NULL,
      `zip_code` varchar(10) NOT NULL,
      `status` int NOT NULL DEFAULT '1',
      `created_by` int DEFAULT NULL,
      `created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (`id`),
      UNIQUE KEY `id_UNIQUE` (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci */


            // check wether user already exists 
            const isUserExists = await User.findOne({
                where: {
                    email
                }
            })

            if (isUserExists) {
                return next(new ErrorResponse("email is already exists please use anothe or login your account !", 409))
            }
            // register user

            const newUser = await User.create({
                full_name: fullName,
                email,
                mobile_no: mobileNo,
                password,
                address,
                zip_code: zipCode
            })

            if (!newUser) {
                return next(new ErrorResponse("failed to register user", 500))
            }

            res.status(statusCode.created).json(new ApiRespose("Registered successfully !"))

        }
    } catch (error) {
        next(error)
    }
}

const profile = async (req, res, next) => {
    try {

        // get current user 
        const user = jsonFormator(await User.findByPk(req.user.id));
        if (!user) {
            return next(new ErrorResponse("invalid request", 404))
        }

        // all products created by current user

        const products = jsonFormator(await ProductsModal.findAll({
            where: {
                created_by: req.user.id
            }
        }));

        res.status(statusCode.ok).json(new ApiRespose("User profile", true, { user, products }))


    } catch (error) {
        next(error)
    }
}

const editProfile = async (req, res, next) => {
    try {

        const updateData = registerSchema.omit(['password']);
        const { email, mobileNo, address, zipCode } = updateData.validate(req.data);
        const userProfile = jsonFormator(await User.findByPk(req.user.id));
        if (!userProfile) {
            return next(new ErrorResponse("invalid request", 404))
        }

        const [updateResult] = await userProfile.update({
            email,
            mobile_no: mobileNo,
            address,
            zip_code: zipCode
        }, {
            where: {
                id: req.user.id
            }
        })

        if (!updateResult) {
            return next(new ErrorResponse("failed to update profile", 500))
        }

        res.status(statusCode.ok).json(new ApiRespose("Profile updated successfully", true))
    } catch (error) {
        next(error)
    }
}

const users = async (req, res, next) => {
    try {
        // get 5 randorm users

        const sellers = await User.findAll({
            order: [
                [sequelize.fn('RAND')]
            ],
            limit: 5
        });
        res.status(200).json(new ApiRespose('success', true, sellers))

    } catch (error) {
        next(error)
    }
}

const updateProfile = async (req, res, next) => {
    try {
        console.log(req.user)
        const { id: currentUser } = req.user;

        const updateSchema = registerSchema.concat(idSchema);
        const { fullName, email, password, address, zipCode } = await updateSchema.validate({ ...req.body, id: currentUser });

        // check whether user exits =
        const isUserExists = await User.findByPk(currentUser);
        if (!isUserExists) {
            return next(new ErrorResponse("User not found", 200));
        }

        const [updateResult] = await User.update({
            full_name: fullName,
            email,
            password,
            address,
            zip_code: zipCode
        }, {
            where: {
                id: currentUser
            }
        })



        res.status(200).json(new ApiRespose("Profile updated successfully", true))
    }
    catch (error) {
        next(error)
    }

}

const sellerById = async (req, res, next) => {
    try {
        const data = req.params;
        let sellerData = jsonFormator(await User.findOne({
            where: {
                id: data.id
            }
        }))
        if (!sellerData) {
            return next(new ErrorResponse("Not Found", 404))
        }
        let productByseller = jsonFormator(await ProductsModal.findAll({
            where: { created_by: data.id }
        }));
        if (!productByseller) {
            return next(new ErrorResponse("Not Found", 404))
        }
        return res.status(200).json(new ApiRespose("", true,
            {
                sellerData,
                productByseller
            }
        ))

    } catch (error) {

    }
}

export { login, register, profile, editProfile, users, updateProfile, sellerById }