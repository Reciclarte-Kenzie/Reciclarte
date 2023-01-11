import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { iUserData, UserContext } from "../../../providers/UserProvider";
import { Input } from "../../Input";
import { editUserSchema } from "./editUserSchema";

export const ModalEditUser = () => {
const {user, editUser, loading} = useContext(UserContext);
   
const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm<iUserData>({
        mode: "onBlur",
        resolver: yupResolver(editUserSchema),
      });

      const onSubmit: SubmitHandler<iUserData> = (data) => {
        editUser(user?.user.id, data);
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
            register={register("instagram")}
            error={errors.socialMedia.instagram?.message}
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
            register={register("linkedin")}
            error={errors.socialMedia.linkedin?.message}
            disabled={loading}
          />
    </form>
  );
};
