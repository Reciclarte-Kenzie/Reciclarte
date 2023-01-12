import { useContext, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { IdeaCard } from "../../components/IdeasList/IdeaCard";
import { ModalCreateOrEditIdea } from "../../components/Modals/ModalCreateOrEditIdea";
import { ModalDelete } from "../../components/Modals/ModalDelete";
import { ModalEditUser } from "../../components/Modals/ModalEditUser";
import ProfileCard from "../../components/ProfileCard";
import { iIdeaData } from "../../providers/IdeasProvider";
import { UserContext } from "../../providers/UserProvider";
import { Profile as Container } from "./styles";

const Profile = () => {
  const [ideaId, setIdeaId] = useState(0);
  const [updateIdeas, setUpdateIdeas] = useState(true);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [showDeleteUserModal, setShowDeleteUserModal] = useState(false);
  const [showEditIdeaModal, setShowEditIdeaModal] = useState(false);
  const [showDeleteIdeaModal, setShowDeleteIdeaModal] = useState(false);
  const [showCreateIdeaModal, setShowCreateIdeaModal] = useState(false);
  const { user, getSpecificUserIdea } = useContext(UserContext);
  const [ideas, setIdeas] = useState<iIdeaData[]>();

  useEffect(() => {
    const getIdeas = async () => {
      if (user) {
        const response = await getSpecificUserIdea(user.id);
        console.log(response);
        setIdeas(response?.data.ideas);
      }
    };

    getIdeas();
  }, [user]);

  const toggleShowEditUserModal = () => {
    setShowEditUserModal(!showEditUserModal);
  };
  const toggleShowDeleteUserModal = () => {
    setShowDeleteUserModal(!showDeleteUserModal);
  };

  const toggleShowEditIdeaModal = () => {
    setShowEditIdeaModal(!showEditIdeaModal);
  };
  const toggleShowDeleteIdeaModal = () => {
    setShowDeleteIdeaModal(!showDeleteIdeaModal);
  };
  const toggleShowCreateIdeaModal = () => {
    setShowCreateIdeaModal(!showCreateIdeaModal);
  };

  useEffect(() => {
    const getIdeas = async () => {
      if (user) {
        const response = await getSpecificUserIdea(user.id);
        setIdeas(response?.data.ideas);
        setUpdateIdeas(false);
      }
    };

    if (updateIdeas) {
      getIdeas();
    }
  }, [user, updateIdeas, getSpecificUserIdea]);

  return (
    <>
      {user && user.id && showEditUserModal ? (
        <ModalEditUser hideModal={toggleShowEditUserModal} user={user} />
      ) : (
        <></>
      )}
      {user && user.id && showDeleteUserModal ? (
        <ModalDelete
          hideModal={toggleShowDeleteUserModal}
          user={true}
          id={user.id}
        />
      ) : (
        <></>
      )}
      {user && user.id && showEditIdeaModal ? (
        <ModalCreateOrEditIdea
          hideModal={toggleShowEditIdeaModal}
          setUpdateIdeas={setUpdateIdeas}
          editedIdeaId={ideaId}
        />
      ) : (
        <></>
      )}
      {user && user.id && showDeleteIdeaModal ? (
        <ModalDelete
          hideModal={toggleShowDeleteIdeaModal}
          setUpdateIdeas={setUpdateIdeas}
          user={false}
          id={ideaId}
        />
      ) : (
        <></>
      )}
      <Container>
        <Header />
        <main>
          <ProfileCard
            user={user}
            toggleShowEditUserModal={toggleShowEditUserModal}
            toggleShowDeleteUserModal={toggleShowDeleteUserModal}
          />
          <section>
            <h1>Suas ideias</h1>
            <>
              {ideas && ideas.length > 0 ? (
                <ul>
                  {ideas.map((idea) => (
                    <IdeaCard
                      id={idea.id}
                      img={idea.imgs[0]}
                      title={idea.title}
                      description={idea.description}
                      setIdeaId={setIdeaId}
                      toggleShowEditIdeaModal={toggleShowEditIdeaModal}
                      toggleShowDeleteIdeaModal={toggleShowDeleteIdeaModal}
                    />
                  ))}
                </ul>
              ) : (
                <>
                  <h2>Nenhuma ideia encontrada</h2>
                </>
              )}
            </>
          </section>
        </main>
        <Footer />
      </Container>
    </>
  );
};

export default Profile;
