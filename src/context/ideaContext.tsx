import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface IdeaProviderProps {
  children: React.ReactNode;
}

interface iIdeaData {
  title: string;
  imgs: string[];
  steps: string;
  materials: string[];
  categories: string[];
  estimated_cost: number;
  difficulty_level: number;
  userId: number;
}

export const IdeaContext = createContext({});

export const IdeaProvider = ({ children }: IdeaProviderProps) => {
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

  const deleteIdea = (deletedIdeaId: number, closeModal: () => void) => {
    try {
      api.delete(`/ideas/${deletedIdeaId}`, headers);

      toast.success("Ideia excluída com sucesso.");

      closeModal();
    } catch (error) {
      toast.error("Não foi possível excluir a ideia.");
    }
  };
};
