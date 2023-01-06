import styled from "styled-components";

export const SliderStyled = styled.fieldset`
  display: flex;
  justify-content: space-between;
  width: 100%;

  label {
    color: var(--color-green-100);
  }

  span {
    color: var(--color-grey-100);
  }

  label, span {
    font-size: var(--font-size-18);
  }
`