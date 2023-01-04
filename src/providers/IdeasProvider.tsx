import { AxiosResponse } from "axios";
import { createContext } from "react";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export interface iIdeaData {
  title: string;
  imgs: string[];
  steps: string;
  materials: string[];
  categories: string[];
  estimated_cost: number;
  difficulty_level: number;
  userId: number;
}

interface iIdeasContextProvider {
  createIdea: (newIdeaData: iIdeaData, closeModal: () => void) => Promise<void>,
  editIdea: (editedIdeaData: iIdeaData, closeModal: () => void) => Promise<void>,
  deleteIdea: (deletedIdeaId: number, closeModal: () => void) => Promise<void>,
  searchIdeas: (queryParams: string[]) => Promise<AxiosResponse<iIdeaData[]> | undefined>,
  getIdeasMaterials: () => Promise<AxiosResponse<string[]> | undefined>,
  getIdeasCategories: () => Promise<AxiosResponse<string[]> | undefined>
}

export const IdeasContext = createContext<iIdeasContextProvider>({} as iIdeasContextProvider);

export const IdeasProvider = () => {
  const headers = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
    },
  };

  const createIdea = async (newIdeaData: iIdeaData, closeModal: () => void) => {
    try {
      await api.post("/ideas", newIdeaData, headers);

      toast.success("Ideia criada com sucesso.");

      closeModal();
    } catch (error) {
      toast.error("Não foi possível cadastrar a ideia");
    }
  };

  const editIdea = async (
    editedIdeaData: iIdeaData,
    closeModal: () => void
  ) => {
    try {
      await api.patch("/ideas", editedIdeaData, headers);

      toast.success("Ideia editada com sucesso.");

      closeModal();
    } catch (error) {
      toast.error("Não foi possível editar a ideia");
    }
  };

  const deleteIdea = async (deletedIdeaId: number, closeModal: () => void) => {
    try {
      await api.delete(`/ideas/${deletedIdeaId}`, headers);

      toast.success("Ideia excluída com sucesso.");

      closeModal();
    } catch (error) {
      toast.error("Não foi possível excluir a ideia.");
    }
  };

  const searchIdeas = async (queryParams: string[]): Promise<AxiosResponse<iIdeaData[]> | undefined> => {
    try {
      let ideasRequestRoute = "/ideas";

      queryParams.forEach((queryParam, index) => {
        if (index == 0) {
          ideasRequestRoute += "?";
        } else {
          ideasRequestRoute += "&";
        }

        ideasRequestRoute += queryParam;
      })

      const foundIdeas = await api.get(ideasRequestRoute);

      return foundIdeas;
    } catch (error) {
      toast.error("Não foi possível buscar pelas ideias.");
    }
  }

  const getIdeasMaterials = async (): Promise<AxiosResponse<string[]> | undefined> => {
    try {
      const ideasMaterials = await api.get("/ideas/materials");

      return ideasMaterials;
    } catch (error) {
      toast.error("Não foi possível buscar por materiais");
    }
  }

  const getIdeasCategories = async (): Promise<AxiosResponse<string[]> | undefined> => {
    try {
      const ideasCategories = await api.get("/ideas/categories");

      return ideasCategories;
    } catch (error) {
      toast.error("Não foi possível buscar pelas categorias");
    }
  }

  return (
    <IdeasContext.Provider value={{createIdea, editIdea, deleteIdea, searchIdeas, getIdeasMaterials, getIdeasCategories}}>
      <Outlet />
    </IdeasContext.Provider>
  );
};
