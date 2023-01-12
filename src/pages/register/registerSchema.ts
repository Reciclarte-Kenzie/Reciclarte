import * as yup from "yup";

export const registerSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
        .string()
        .required("Senha obrigatória")
        .min(8, "A senha precisa ter no minimo 8 caracteres")
        .matches(/(?=.*?[a-z])/i, "Precisa ter pelo menos 1 letra")
        .matches(/(?=.*?[0-9])/, "Precisa ter pelo menos 1 numero"),
    confirmation: yup.string().test("password", "As senhas precisam ser iguais", function(value){return this.parent.password === value}) ,
    profilePic: yup.string(),
    bio: yup.string().required("Bio obrigatório"),
})