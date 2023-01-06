import styled from "styled-components";

export const StyledFilter = styled.aside`
  position: sticky;
  background-color: var(--color-grey-50);
  width: clamp(280px, 90%, 300px);
  border-radius: var(--radius-1);

  @media (min-width: 700px) {
    width: clamp(300px, 40%, 402px);
  }

  h3 {
    display: none;

    width: 100%;
    color: var(--color-white);
    background-color: var(--color-orange-80);
    padding: 5px 8px;

    border: px solid var(--color-orange-80);
    border-radius: var(--radius-1) var(--radius-1) 0 0;

    font-size: var(--font-size-18);
    font-weight: 600;

    @media (min-width: 700px) {
      display: block;
      border-radius: var(--radius-1) var(--radius-1) 0 0;
    }
  }

  form {
    padding: 0 1vw 1.2vh;
    border: 1px solid var(--color-grey-60);
    border-radius: var(--radius-1);

    @media (min-width: 700px) {
      border-top: none;
      width: 100%;
      border-radius: 0 0 var(--radius-1) var(--radius-1);
    }
  }

  .select {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
