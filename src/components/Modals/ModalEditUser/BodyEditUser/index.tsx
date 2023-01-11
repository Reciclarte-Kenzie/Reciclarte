import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { iUserData, UserContext } from "../../../../providers/UserProvider";
import { StyledButton } from "../../../Button/styles";
import { Input } from "../../../Input";
import { editUserSchema } from "./editUserSchema";

export const BodyModalEditUser = () => {
  const { editUser, loading, getSpecificUser } = useContext(UserContext);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const userId = Number(localStorage.getItem("@USERID"));
    const getUser = async () => {
      const responseUser = await getSpecificUser(userId);
      setUserData(responseUser?.responseUser.data);
    };
    getUser();
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iUserData>({
    mode: "onBlur",
    resolver: yupResolver(editUserSchema),
  });

  const onSubmit: SubmitHandler<iUserData> = (data) => {
    const userId = Number(localStorage.getItem("@USERID"));
    editUser(userId, data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
        label="password"
        id="password"
        register={register("password")}
        error={errors.password?.message}
        disabled={loading}
      />
      <Input
        placeholder="Insira seu instagram"
        label="instagram"
        id="instagram"
        register={register("socialMedia.instagram")}
        error={errors.socialMedia?.instagram?.message}
        disabled={loading}
      />
      <Input
        placeholder="Insira sua bio"
        label="bio"
        id="bio"
        register={register("bio")}
        error={errors.bio?.message}
        disabled={loading}
      />
      <Input
        placeholder="Insira seu avatar"
        label="profile_pic"
        id="profile_pic"
        register={register("profile_pic")}
        error={errors.profile_pic?.message}
        disabled={loading}
      />
      <Input
        placeholder="Insira seu linkedin"
        label="linkedin"
        id="linkedin"
        register={register("socialMedia.linkedin")}
        error={errors.socialMedia?.linkedin?.message}
        disabled={loading}
      />
      <StyledButton>Atualizar</StyledButton>
    </form>
  );
};
