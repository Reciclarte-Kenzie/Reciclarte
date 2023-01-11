import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form/dist/useForm";
import { iRegisterData, UserContext } from "../../../providers/UserProvider";
import { Input } from "../../Input";
import { editUserSchema } from "./editUserSchema";

export const ModalEditUser = () => {
const {editUser, loading} = useContext(UserContext);
   
const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm<iRegisterData>({
        mode: "onBlur",
        resolver: yupResolver(editUserSchema),
      });

      const onSubmit: SubmitHandler<iRegisterData> = (data) => {
        const { confirmation, ...body } = data;
        editUser(body);
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
            error={errors.instagram?.message}
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
            error={errors.linkedin?.message}
            disabled={loading}
          />
    </form>
  );
};
