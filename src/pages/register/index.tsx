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

interface iRegisterBody {
    name: string;
    email: string;
    password: string;
    profile_pic: string;
    bio: string;
};


export function RegisterPage(){
    const { register, handleSubmit, formState : {errors} } = useForm<iRegisterBody>({
        mode: "onBlur", resolver: yupResolver(registerSchema)})
    const {registerSubmit} = useContext(UserContext)
    
    return(
        <StyledRegisterPage>
            <BlackNameLogo />
            <div>
                <h1>Cadastro</h1>
                <Link to="/Login">
                    <button> Voltar </button>
                </Link>
            </div>
            <StyledForm onSubmit={handleSubmit(registerSubmit)} noValidate>
                <Input
                    type="name"
                    placeholder="Insira seu nome"
                    id="name"
                    label="Name"
                    {...register("name")}
                />
                {errors.name?.message && <p>{errors.name.message}</p>}
                <Input
                    type="email"
                    placeholder="Insira sua email"
                    id="email"
                    label="E-mail"
                    {...register("email")}
                />
                {errors.email?.message && <p>{errors.email.message}</p>}
                <Input
                    type="password"
                    placeholder="Insira sua senha"
                    id="password"
                    label="Senha"
                    {...register("password")}
                />
                {errors.password?.message && <p>{errors.password.message}</p>}
                <Input
                    type="profile_pic"
                    placeholder="Insira seu avatar"
                    id="profile_pic"
                    label="Avatar"
                    {...register("profile_pic")}
                />
                {errors.profile_pic?.message && <p>{errors.profile_pic.message}</p>}
                <Input
                    type="bio"
                    placeholder="Escreva sobre você"
                    id="bio"
                    label="Bio"
                    {...register("bio")}
                />
                {errors.bio?.message && <p>{errors.bio.message}</p>}
                <Button
                    text="Cadastrar"
                    label="Botão de login"
                />
            </StyledForm>
        </StyledRegisterPage>
    )
} 