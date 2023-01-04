import { StyledRegisterPage } from "./styles"
import { BlackNameLogo } from "../../components/Logo"
import { registerSchema } from "./registerSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler ,useForm } from "react-hook-form";
import { StyledForm } from "../../components/Forms/styles";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { iRegisterData } from "../../context/userContext";

interface iRegister extends iRegisterData {
    confirmation: string;
  }

export function RegisterPage(){
    const { register, handleSubmit, formState : {errors} } = useForm<iRegister>({
        mode: "onBlur", resolver: yupResolver(registerSchema)})
    const {registerSubmit, loading} = useContext(UserContext)
    
    const onSubmit: SubmitHandler<iRegister> = (data) => { 
        const {confirmation,...body} = (data)
        console.log(body)
        /* registerSubmit(body) */ } ;
    return(
        <StyledRegisterPage>
            <BlackNameLogo />
            <div>
                <h1>Cadastro</h1>
                <Link to="/Login">
                    <button> Voltar </button>
                </Link>
            </div>
            <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
                <Input
                    type="name"
                    placeholder="Insira seu nome"
                    id="name"
                    label="Name"
                    register = {register("name")}
                />
                {errors.name?.message && <p>{errors.name.message}</p>}
                <Input
                    type="email"
                    placeholder="Insira sua email"
                    id="email"
                    label="E-mail"
                    register = {register("email")}
                />
                {errors.email?.message && <p>{errors.email.message}</p>}
                <Input
                    type="password"
                    placeholder="Insira sua senha"
                    id="password"
                    label="Senha"
                    register = {register("password")}
                />
                {errors.password?.message && <p>{errors.password.message}</p>}
                <Input
                    type="password"
                    placeholder="Insira sua senha"
                    id="confirmation"
                    label="Confirme sua senha"
                    register = {register("confirmation")}
                />
                {errors.password?.message && <p>{errors.password.message}</p>}
                <Input
                    type="profile_pic"
                    placeholder="Insira seu avatar"
                    id="profile_pic"
                    label="Avatar"
                    register = {register("profile_pic")}
                />
                {errors.profile_pic?.message && <p>{errors.profile_pic.message}</p>}
                <Input
                    type="bio"
                    placeholder="Escreva sobre você"
                    id="bio"
                    label="Bio"
                    register = {register("bio")}
                />
                {errors.bio?.message && <p>{errors.bio.message}</p>}
                <Button
                    text ="Cadastrar"
                    label ="Botão de login"
                    disabled = {loading}
                />
            </StyledForm>
        </StyledRegisterPage>
    )
} 