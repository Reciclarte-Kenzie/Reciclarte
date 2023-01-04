import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iUser {
  token: string | null;
}

export interface iLoginData {
  //se der erro na typagem do login, ou register, talvez estamos typando duas vezes.
  email: string;
  password: string;
}

export interface iRegisterData {
  //se der erro na typagem do login, ou register, talvez estamos typando duas vezes.
  email: string;
  password: string;
  name: string;
  bio: string;
  profile_pic: string;
}

interface iUserId {
  body: string;
  userId: number;
}

interface iUserContextProvider {
  user: iUser | null;
  loading: boolean;
  loginSubmit: (data: iLoginData) => void;
  registerSubmit: (data: iRegisterData) => void;
  logout: () => void;
  editUser: ({ body, userId }: iUserId) => void;
  deleteUser: ({ userId }: iUserId) => void;
  getAllUsers: () => void;
  getSpecificUser: (userId: iUserId) => void;
  getSpecificUserIdea: (userId: iUserId) => void;
}

export const UserContext = createContext<iUserContextProvider>(
  {} as iUserContextProvider
);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");

  const loginSubmit = async (data: iLoginData) => {
    try {
      setLoading(true);
      const response = await api.post("/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
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

  const editUser = async ({ body, userId }: iUserId) => {
    try {
      await api.patch(`/users/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async ({ userId }: iUserId) => {
    try {
      await api.delete(`/users/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getAllUsers = async () => {
    try {
      await api.get("/users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getSpecificUser = async (userId: iUserId) => {
    try {
      await api.get(`/users/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getSpecificUserIdea = async (userId: iUserId) => {
    try {
      await api.get(`/users/${userId}?_embed=ideas`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
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
