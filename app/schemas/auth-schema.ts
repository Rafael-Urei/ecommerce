import * as yup from "yup";

export const authSchema = yup.object({
    email: yup.string().email('Must be a valid e-mail!').required('E-mail cannot be blank!').trim(),
    password_hash: yup.string().min(6, 'Your password must have at least 6 characteres!').required('Password cannot be blank!')
})

export type Auth = yup.InferType<typeof authSchema>