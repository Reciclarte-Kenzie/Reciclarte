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
  return (
    <Container>
      <Content>
        <ContentInfo>
          <ProfileImage src="https://via.placeholder.com/150" alt="" />
          <ContentText>
            <Name>Maria dos Mares</Name>
            <Bio>Nascida pra a arte, adoro fazer crochê.</Bio>
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
