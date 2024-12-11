import Yup from 'yup'
const registerSchema = Yup.object({
    fullName: Yup.string().required("name is required"),
    email: Yup.string().email("Invalid email format").required("email is required"),
    mobileNo: Yup.string().min(10).max(10).required("mobile number is required"),
    password: Yup.string().min(8).required("password is required"),
    address: Yup.string().required("address is required"),
    zipCode: Yup.string().required("zip code is required"),

});

export default registerSchema
