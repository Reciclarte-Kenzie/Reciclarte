import styled from "styled-components";

interface iFilter {
  catList: string[];
  matList: string[];
}

export const StyledFilter = styled.aside<iFilter>`
  position: sticky;
  width: 90%;
  margin: 0 auto;
  border-radius: var(--radius-1);

  @media (min-width: 1000px) {
    width: clamp(300px, 40%, 402px);
    margin: 0;
  }

  h3 {
    width: 100%;
    height: 40px;
    color: var(--color-white);
    background-color: var(--color-orange-80);
    padding: 5px 8px;

    border: px solid var(--color-orange-80);
    border-radius: var(--radius-1) var(--radius-1) 0 0;

    font-size: var(--font-size-18);
    font-weight: 600;
  }

  form {
    padding: 1.2vh 1vw;
    border: 1px solid var(--color-grey-60);
    border-radius: 0 0 var(--radius-1) var(--radius-1);
    border-top: none;

    input {
      height: 50px;

      &[type="range"] {
        height: 8px;
      }
    }

    button {
      width: clamp(130px, 35%, 150px);
    }

    @media (min-width: 700px) {
      width: 100%;
    }
  }

  .select {
    display: flex;
    justify-content: space-between;
    width: 100%;

    ul {
      display: flex;
      flex-wrap: wrap;
      height: ${({ catList, matList }) =>
        catList?.length > 2 || matList.length > 2 ? "58px" : "27px"};
      overflow: auto;
      scrollbar-width: thin;
      scrollbar-color: var(--color-orange-80) var(--color-white);

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        background: var(--color-white);
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--color-orange-80);
        border-radius: 8px;
        border: 2px solid var(--color-orange-80);
      }

      li {
        gap: 0.25rem;
        height: 26.5px;
      }

      p {
        font-size: var(--font-size-12);
        color: var(--color-white);
        margin: 0;
      }

      button,
      button img {
        height: 20px;
        width: 10px;
      }
    }

    section {
      width: 48%;
      display: flex;
      flex-direction: column;
      gap: 2vh;
    }
  }
`;
