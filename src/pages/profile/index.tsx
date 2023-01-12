import { useContext, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
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
      if (user) {
        const response = await getSpecificUserIdea(user.id);
        console.log(response);
        setIdeas(response?.data.ideas);
      }
    };

    getIdeas();
  }, [user]);

  return (
    <Container>
      <Header />
      <main>
        <ProfileCard />
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
  );
};

export default Profile;
