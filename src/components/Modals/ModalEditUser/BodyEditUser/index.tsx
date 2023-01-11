import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { iUserData, UserContext } from "../../../../providers/UserProvider";
import { StyledButton } from "../../../Button/styles";
import { Input } from "../../../Input";
import { editUserSchema } from "./editUserSchema";
import { ModalBodyStyled } from "./styles";

interface iUserBody {
  user: iUserData;
}

export const BodyModalEditUser = ({ user }: iUserBody) => {
  const { editUser, loading } = useContext(UserContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iUserData>({
    mode: "onBlur",
    resolver: yupResolver(editUserSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      password: user.password,
      bio: user.bio,
      profile_pic: user.profile_pic,
      socialMedia: {
        instagram: user.socialMedia.instagram,
        linkedin: user.socialMedia.linkedin,
      },
    },
  });

  const onSubmit: SubmitHandler<iUserData> = (data) => {
    const userId = Number(localStorage.getItem("@USERID"));
    editUser(userId, data);
  };

  return (
    <ModalBodyStyled onSubmit={handleSubmit(onSubmit)} noValidate>
      <section>
        <div>
          <Input
            placeholder="Insira seu nome"
            label="Nome"
            id="name"
            register={register("name")}
            error={errors.name?.message}
            disabled={loading}
          />
          <Input
            placeholder="Insira sua senha"
            label="Senha"
            id="password"
            type="password"
            register={register("password")}
            error={errors.password?.message}
            disabled={loading}
          />
          <Input
            placeholder="Insira seu instagram"
            label="Instagram"
            id="instagram"
            register={register("socialMedia.instagram")}
            error={errors.socialMedia?.instagram?.message}
            disabled={loading}
          />
        </div>
        <div>
          <Input
            placeholder="Insira sua bio"
            label="bio"
            id="Bio"
            register={register("bio")}
            error={errors.bio?.message}
            disabled={loading}
          />
          <Input
            placeholder="Insira seu avatar"
            label="Avatar"
            id="profile_pic"
            register={register("profile_pic")}
            error={errors.profile_pic?.message}
            disabled={loading}
          />
          <Input
            placeholder="Insira seu linkedin"
            label="linkedin"
            id="Linkedin"
            register={register("socialMedia.linkedin")}
            error={errors.socialMedia?.linkedin?.message}
            disabled={loading}
          />
        </div>
      </section>
      <StyledButton>Atualizar</StyledButton>
    </ModalBodyStyled>
  );
};
