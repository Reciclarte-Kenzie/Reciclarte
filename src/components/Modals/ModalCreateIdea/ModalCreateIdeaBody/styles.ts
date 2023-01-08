import styled from "styled-components";

export const ModalCreateIdeaBodyStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
    width: 100%;
  }

  section, .added-images, .select-group {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  textarea {
    height: 90px;
  }

  textarea[name="steps"] {
    height: 135px;
  }

  button {
    margin: 0 auto;
  }

  .added-images {
    ul, div {
      display: flex;
      gap: 0.375rem;
    }

    div {
      position: relative;

      button {
        max-width: 50px;
        height: 55.78px;
        position: relative;
        top: calc(27px + 2vh);
        width: 100%;
      }
    }
  }
`;
