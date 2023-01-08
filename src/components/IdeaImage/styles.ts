import styled from "styled-components";

export const IdeaImageStyled = styled.li`
  position: relative;

  img {
    border-radius: var(--radius-1);
    height: 77px;
    object-fit: cover;
    width: 69px;
  }

  button {
    position: absolute;
    right: 4px;
    top: 4px;
  }
`;
