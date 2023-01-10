import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import {
  ProfileCard as Container,
  Content,
  ProfileImage,
  ContentText,
  ContentInfo,
  ContentActions,
  Button,
  Name,
  Bio,
} from "./styles";

const ProfileCard = () => {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <Content>
        <ContentInfo>
          <ProfileImage src={user?.profile_pic} alt="" />
          <ContentText>
            <Name>{user?.name}</Name>
            <Bio>{user?.bio}</Bio>
          </ContentText>
        </ContentInfo>
        <ContentActions>
          <Button>Editar perfil</Button>
          <Button>Excluir perfil</Button>
        </ContentActions>
      </Content>
    </Container>
  );
};

export default ProfileCard;
