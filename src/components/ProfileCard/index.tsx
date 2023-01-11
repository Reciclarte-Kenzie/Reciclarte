import { iUserData } from "../../providers/UserProvider";
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

interface Props {
  user: iUserData | null;
}

const ProfileCard = ({ user }: Props) => {
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
