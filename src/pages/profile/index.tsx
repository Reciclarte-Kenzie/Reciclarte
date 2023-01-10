import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import { IdeaCard } from "../../components/IdeasList/IdeaCard";
import ProfileCard from "../../components/ProfileCard";
import { iIdeaData } from "../../providers/IdeasProvider";
import { UserContext } from "../../providers/UserProvider";
import { Profile as Container } from "./styles";

const Profile = () => {
  const { user, getSpecificUserIdea } = useContext(UserContext);
  const [ideas, setIdeas] = useState<iIdeaData[]>();

  useEffect(() => {
    const getIdeas = async () => {
      console.log(user);
      if (user) {
        const response = await getSpecificUserIdea(user.id);
        console.log(response);
        setIdeas(response?.data.ideas);
      }
    };

    getIdeas();
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <ProfileCard />
        <section>
          <h1>Suas ideias</h1>
          <>
            {ideas ? (
              <ul>
                {ideas.map((idea) => (
                  <IdeaCard
                    id={idea.id}
                    img={idea.imgs[0]}
                    title={idea.title}
                    description={idea.description}
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
    </Container>
  );
};

export default Profile;
