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
  estimatedCost: number;
  difficultyLevel: number;
  userId: number | undefined;
  id: number;
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
  getIdeasMaterials: (
    closeModal?: () => void
  ) => Promise<AxiosResponse<string[]> | undefined>;
  getIdeasCategories: (
    closeModal?: () => void
  ) => Promise<AxiosResponse<string[]> | undefined>;
  foundIdeas: iIdeaData[];
  ideasMaterials: string[];
  ideasCategories: string[];
}

export const IdeasContext = createContext<iIdeasContextProvider>(
  {} as iIdeasContextProvider
);

export const IdeasProvider = () => {
  const [loading, setLoading] = useState(false);
  const [foundIdeas, setFoundIdeas] = useState([] as iIdeaData[]);

  const ideasMaterials = [
    "Madeira",
    "Tecido",
    "Papel",
    "Garrafa PET",
    "Vidro",
    "Metal",
    "Arame",
    "Cola",
    "Tinta",
    "Pintura",
    "Ferramentas manuais",
    "Fios e cordas",
    "Espuma",
    "Pregos",
    "Parafusos",
    "Tinta spray",
    "Tesoura",
    "Feltro",
    "Papelão",
    "Fita adesiva",
    "Palito",
    "Lata",
    "Fita dupla face",
    "Cabide",
    "Parafuso",
    "Furadeira",
    "Jeans",
    "Régua",
    "Linha",
    "Caneta",
  ];

  const ideasCategories = [
    "Jardinagem",
    "Artesanato",
    "Costura",
    "Carpintaria",
    "Eletrônica",
    "Cozinha",
    "Decoração",
    "Fotografia",
    "Vintage",
    "Iluminação",
    "Minimalista",
    "Móveis",
    "Quadrinhos e animação",
    "Beleza e cuidados pessoais",
    "Brinquedos",
    "Jóias",
    "Mecânica",
    "Tecnologia",
    "Cute",
    "Escrita e impressão",
  ];

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

  const getIdeasMaterials = async (closeModal?: () => void) => {
    try {
      setLoading(true);

      const ideasMaterials = await api.get("/ideas/materials");

      return ideasMaterials;
    } catch (error) {
      if (closeModal) {
        toast.error(
          "Não foi possível buscar pelos materiais. Tente abrir o modal novamente."
        );
        closeModal();
      } else {
        toast.error("Não foi possível buscar pelos materiais");
      }
    } finally {
      setLoading(false);
    }
  };

  const getIdeasCategories = async (closeModal?: () => void) => {
    try {
      setLoading(true);

      const ideasCategories = await api.get("/ideas/categories");

      return ideasCategories;
    } catch (error) {
      if (closeModal) {
        toast.error(
          "Não foi possível buscar pelas categorias. Tente abrir o modal novamente."
        );
        closeModal();
      } else {
        toast.error("Não foi possível buscar pelas categorias");
      }
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
        ideasMaterials,
        ideasCategories,
      }}
    >
      <Outlet />
    </IdeasContext.Provider>
  );
};
