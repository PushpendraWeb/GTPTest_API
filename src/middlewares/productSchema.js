import Yup from 'yup'

const productSchema = Yup.object({
    productName: Yup.string().required("Product name is required"),
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    quantity: Yup.number().typeError("Invalid quantity").min(1, "Quantity should be greater than 1").required("Invalid quantity"),
    MRP: Yup.number().typeError("Please select valid MRP").required("MRP is required"),
    discount: Yup.number().typeError("Please select valid Selling Price").required("Selling Price is required"),
    productImage: Yup.string().required("Product Image is required")
})
export { productSchema }



