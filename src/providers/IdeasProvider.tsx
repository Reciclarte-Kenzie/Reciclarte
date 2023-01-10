import { AxiosResponse } from "axios";
import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export interface iIdeaData {
  title: string;
  imgs: string[] | string;
  description: string;
  steps: string;
  materials: string[];
  categories: string[];
  estimated_cost: number;
  difficulty_level: number;
  userId: number;
}

interface iIdeasContextProvider {
  loading: boolean;
  createIdea: (newIdeaData: iIdeaData, closeModal: () => void) => Promise<void>;
  editIdea: (
    editedIdeaId: number,
    editedIdeaData: iIdeaData,
    closeModal: () => void
  ) => Promise<void>;
  deleteIdea: (deletedIdeaId: number, closeModal: () => void) => Promise<void>;
  searchIdeas: (queryParams: string[]) => void;
  getSpecificIdea: (ideaId: number) => Promise<iIdeaData | undefined>;
  getIdeasMaterials: () => Promise<AxiosResponse<string[]> | undefined>;
  getIdeasCategories: () => Promise<AxiosResponse<string[]> | undefined>;
  foundIdeas: iIdeaData[];
}

export const IdeasContext = createContext<iIdeasContextProvider>(
  {} as iIdeasContextProvider
);

export const IdeasProvider = () => {
  const [loading, setLoading] = useState(false);
  const [foundIdeas, setFoundIdeas] = useState([] as iIdeaData[]);

  const headers = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
    },
  };

  const createIdea = async (newIdeaData: iIdeaData, closeModal: () => void) => {
    try {
      setLoading(true);

      await api.post("/ideas", newIdeaData, headers);

      toast.success("Ideia criada com sucesso.");

      closeModal();
    } catch (error) {
      toast.error("Não foi possível cadastrar a ideia");
    } finally {
      setLoading(false);
    }
  };

  const editIdea = async (
    editedIdeaId: number,
    editedIdeaData: iIdeaData,
    closeModal: () => void
  ) => {
    try {
      setLoading(true);

      await api.patch(`/ideas/${editedIdeaId}`, editedIdeaData, headers);

      toast.success("Ideia editada com sucesso.");

      closeModal();
    } catch (error) {
      toast.error("Não foi possível editar a ideia");
    } finally {
      setLoading(false);
    }
  };

  const deleteIdea = async (deletedIdeaId: number, closeModal: () => void) => {
    try {
      setLoading(true);

      await api.delete(`/ideas/${deletedIdeaId}`, headers);

      toast.success("Ideia excluída com sucesso.");

      closeModal();
    } catch (error) {
      toast.error("Não foi possível excluir a ideia.");
    } finally {
      setLoading(false);
    }
  };

  const searchIdeas = async (queryParams?: string[]) => {
    try {
      setLoading(true);

      let ideasRequestRoute = "/ideas";

      queryParams?.forEach((queryParam, index) => {
        if (index === 0) {
          ideasRequestRoute += "?";
        } else {
          ideasRequestRoute += "&";
        }

        ideasRequestRoute += queryParam;
      });

      const foundIdeasResponse = (await api.get(ideasRequestRoute)).data;

      setFoundIdeas(foundIdeasResponse);
    } catch (error) {
      toast.error("Não foi possível buscar pelas ideias.");
    } finally {
      setLoading(false);
    }
  };

  const getSpecificIdea = async (ideaId: number) => {
    try {
      setLoading(true);

      const foundIdea = (await api.get(`/ideas/${ideaId}`)).data;

      return foundIdea;
    } catch (error) {
      toast.error("Ideia não encontrada");
    } finally {
      setLoading(false);
    }
  };

  const getIdeasMaterials = async () => {
    try {
      setLoading(true);

      const ideasMaterials = await api.get("/ideas/materials");

      return ideasMaterials;
    } catch (error) {
      toast.error("Não foi possível buscar por materiais");
    } finally {
      setLoading(false);
    }
  };

  const getIdeasCategories = async () => {
    try {
      setLoading(true);

      const ideasCategories = await api.get("/ideas/categories");

      return ideasCategories;
    } catch (error) {
      toast.error("Não foi possível buscar pelas categorias");
    } finally {
      setLoading(false);
    }
  };

  return (
    <IdeasContext.Provider
      value={{
        loading,
        createIdea,
        editIdea,
        deleteIdea,
        searchIdeas,
        getSpecificIdea,
        getIdeasMaterials,
        getIdeasCategories,
        foundIdeas,
      }}
    >
      <Outlet />
    </IdeasContext.Provider>
  );
};
