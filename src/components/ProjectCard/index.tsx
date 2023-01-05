import {
  ProjectCard as Container,
  Content,
  ContentInfo,
  Actions,
  EditButton,
  DeleteButton,
} from "./styles";

interface IProjectCardProps {
  img: string;
  title: string;
  description: string;
}

const ProjectCard = ({ img, title, description }: IProjectCardProps) => {
  return (
    <Container>
      <Content>
        <img src={img} alt="" />
        <ContentInfo>
          <h2>{title}</h2>
          <p>{description}</p>
          <Actions>
            <EditButton type="button">Editar ideia</EditButton>
            <DeleteButton type="button">Excluir ideia</DeleteButton>
          </Actions>
        </ContentInfo>
      </Content>
    </Container>
  );
};

export default ProjectCard;
