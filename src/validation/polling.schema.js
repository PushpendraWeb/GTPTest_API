import Yup from 'yup';
const pollingSchema = Yup.object({
    userName: Yup.string().required("please your name").required("please enter your name"),
    productId: Yup.string().required("invalid request"),
    message: Yup.string().required("message is required").required("messge is required")
})


export default pollingSchema;