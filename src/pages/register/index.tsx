import { StyledRegisterPage } from "./styles"
import { BlackNameLogo } from "../../components/Logo"
import { registerSchema } from "./registerSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler ,useForm } from "react-hook-form";
import { StyledForm } from "../../components/Forms/styles";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";

interface iRegisterBody {
    name: string;
    email: string;
    password: string;
    profile_pic: string;
    bio: string;
  };

export function RegisterPage(){
    const {register, handleSubmit, formState:{errors}} = useForm<iRegisterBody>({mode: "onBlur", resolver: yupResolver(registerSchema)})

    const onSubmit: SubmitHandler<iRegisterBody> = (data) => console.log(data);
    return(
        <StyledRegisterPage>
            <BlackNameLogo />
            <h1>Cadastro</h1>
            <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
                <Input
                    type="name"
                    placeholder="Insira seu nome"
                    id="name"
                    label="Name"
                />
                {errors.name?.message && <p>{errors.name.message}</p>}
                <Input
                    type="email"
                    placeholder="Insira sua email"
                    id="email"
                    label="E-mail"
                />
                {errors.email?.message && <p>{errors.email.message}</p>}
                <Input
                    type="password"
                    placeholder="Insira sua senha"
                    id="password"
                    label="Senha"
                />
                {errors.password?.message && <p>{errors.password.message}</p>}
                <Input
                    type="profile_pic"
                    placeholder="Insira seu avatar"
                    id="profile_pic"
                    label="Avatar"
                />
                {errors.profile_pic?.message && <p>{errors.profile_pic.message}</p>}
                <Input
                    type="bio"
                    placeholder="Escreva sobre você"
                    id="bio"
                    label="Bio"
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