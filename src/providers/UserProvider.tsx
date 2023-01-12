import { AxiosError, AxiosResponse } from "axios";
import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iIdeaData } from "./IdeasProvider";

interface iUserProviderProps {
  children: React.ReactNode;
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
  id: number;
}

interface iUserData extends iRegisterData {
  socialMedia: {
    instagram: string;
    linkedin: string;
  };
}

export interface iUserIdeasData extends iUserData {
  ideas: iIdeaData[];
}

export interface iApiError {
  response: {
    data: string;
  };
}

interface iUserContextProvider {
  user: iUserData | null;
  loading: boolean;
  loginSubmit: (data: iLoginData) => void;
  registerSubmit: (data: iRegisterData) => void;
  logout: () => void;
  editUser: (userId: number, userEditedData: iUserData) => void;
  deleteUser: (userId: number) => void;
  getAllUsers: () => Promise<AxiosResponse<string[]> | undefined>;
  getSpecificUser: (
    userId: number
  ) => Promise<AxiosResponse<iUserData> | undefined>;
  getSpecificUserIdea: (
    userId: number
  ) => Promise<AxiosResponse<iUserIdeasData> | undefined>;
}

export const UserContext = createContext<iUserContextProvider>(
  {} as iUserContextProvider
);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUserData | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const headers = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
    },
  };

  useEffect(() => {
    const getUser = async (userId: number) => {
      try {
        setLoading(true);
        const { data: newUser } = await api.get(`/users/${userId}`, headers);
        if (newUser.id) {
          setUser(newUser);
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    const userId = Number(localStorage.getItem("@USERID"));
    getUser(userId);
  }, []);

  const loginSubmit = async (data: iLoginData) => {
    try {
      setLoading(true);
      const response = await api.post("/login", data);
      toast.success("Login efetuado!");
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@USERID", response.data.user.id);
      setUser(response.data.user);
      navigate("/");
    } catch (error) {
      const apiError = error as AxiosError<iApiError>;
      let message = apiError.response?.data || "";
      let toastErrorMessage = "";

      if (message === "Incorrect password") {
        toastErrorMessage = "Senha incorreta";
      } else if (message === "Cannot find user") {
        toastErrorMessage = "Usuário não encontrado";
      } else {
        toastErrorMessage = "Não foi possível efetuar o login.";
      }
      toast.error(toastErrorMessage);
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
      const apiError = error as AxiosError<iApiError>;
      let message = apiError.response?.data;
      console.log(error);
      toast.error(`Desculpe, algo deu errado! ${message}`);
    } finally {
      setLoading(false);
    }
  };

  const editUser = async (userId: number, userEditedData: iUserData) => {
    try {
      await api.patch(`/users/${userId}`, userEditedData, headers);
      toast.warn("Dados do usuário atualizados.");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (userId: number) => {
    try {
      await api.delete(`/users/${userId}`, headers);
      toast.warn("Usuário deletado com sucesso.");
      logout();
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

  const getSpecificUser = async (userId: number) => {
    try {
      setLoading(true);
      const response = await api.get(`/users/${userId}`, headers);
      return response;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getSpecificUserIdea = async (userId: number) => {
    try {
      setLoading(true);
      const response = await api.get(`/users/${userId}?_embed=ideas`, headers);
      return response;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    nativate("/");
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
