import styled from "styled-components";

export const ModalCreateIdeaBodyStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  width: 100%;

  article:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 0.625rem 1.875rem;

    @media (min-width: 600px) {
      flex-direction: row;
    }
  }

  section {
    flex-grow: 1;
  }

  section, .added-images, .select-group {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  textarea {
    height: 115px;
  }

  button {
    margin: 0 auto;
  }

  .added-image img {
    border-radius: var(--radius-1);
    height: 77px;
    object-fit: cover;
    width: 69px;
  }

  .added-images ul {
    display: flex;
    gap: 0.375rem;
  }
`;
