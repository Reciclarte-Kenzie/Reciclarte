import { AxiosResponse } from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iIdeaData } from "./IdeasProvider";

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iUser {
  token: string | null;
}

export interface iLoginData {
  email: string;
  password: string;
}

export interface iRegisterData {
  email: string;
  password: string;
  name: string;
  bio: string;
  profile_pic: string;
}

interface iUserId {
  userId: number;
}

interface iUserData extends iRegisterData {
  social_media: {
    instagram: string;
    linkedin: string;
  };
}

interface iUserIdeasData extends iUserData {
  ideas: iIdeaData[];
}

interface iUserContextProvider {
  user: iUser | null;
  loading: boolean;
  loginSubmit: (data: iLoginData) => void;
  registerSubmit: (data: iRegisterData) => void;
  logout: () => void;
  editUser: (userId: number, userEditedData: iUserData) => void;
  deleteUser: (userId: number) => void;
  getAllUsers: () => Promise<AxiosResponse<string[]> | undefined>;
  getSpecificUser: (
    userId: iUserId
  ) => Promise<AxiosResponse<iUserData> | undefined>;
  getSpecificUserIdea: (
    userId: iUserId
  ) => Promise<AxiosResponse<iUserIdeasData> | undefined>;
}

export const UserContext = createContext<iUserContextProvider>(
  {} as iUserContextProvider
);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const headers = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
    },
  };

  const loginSubmit = async (data: iLoginData) => {
    try {
      setLoading(true);
      const response = await api.post("/login", data);
      toast.success("Login efetuado!");
      setUser({ token: response.data.accessToken });

      localStorage.setItem("@TOKEN", response.data.accessToken);

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado!");
    } finally {
      setLoading(false);
    }
  };

  const registerSubmit = async (data: iRegisterData) => {
    try {
      setLoading(true);
      await api.post("/users", data);
      toast.success("Cadastro feito com sucesso!");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Desculpe, algo deu errado!");
    } finally {
      setLoading(false);
    }
  };

  const editUser = async (userId: number, userEditedData: iUserData) => {
    try {
      await api.patch(`/users/${userId}`, userEditedData, headers);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (userId: number) => {
    try {
      await api.delete(`/users/${userId}`, headers);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllUsers = async () => {
    try {
      setLoading(true);
      const response = await api.get("/users", headers);
      return response;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getSpecificUser = async (userId: iUserId) => {
    try {
      setLoading(true);
      const response = await api.get(`/users/${userId}`, headers);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const getSpecificUserIdea = async (userId: iUserId) => {
    try {
      setLoading(true);
      const response = await api.get(`/users/${userId}?_embed=ideas`, headers);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("@TOKEN");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        loginSubmit,
        registerSubmit,
        logout,
        editUser,
        deleteUser,
        getAllUsers,
        getSpecificUser,
        getSpecificUserIdea,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
