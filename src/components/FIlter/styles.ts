import styled from "styled-components";

export const StyledFilter = styled.aside`
  /* width:clamp() */
  border-radius: var(--radius-1);
  position: relative;
  border: 1px solid var(--color-grey-60);

  h3 {
    width: 100%;
    color: var(--color-white);
    background-color: var(--color-orange-80);
    padding: 5px 8px;

    border: px solid var(--color-orange-80);
    border-radius: var(--radius-1) var(--radius-1) 0 0;

    font-size: var(--font-size-18);
    font-weight: 600;
  }

  form {
    padding: 0 1vw 1.2vh;
  }
`;
