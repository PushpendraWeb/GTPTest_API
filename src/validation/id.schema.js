import Yup from 'yup'
const idSchema = Yup.object({
    id: Yup.number().required("Id is required")
})

export { idSchema }