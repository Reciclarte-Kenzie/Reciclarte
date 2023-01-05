import styled from "styled-components";

interface iStyledSelect {
  width?: string;
}

export const StyledSelect = styled.select<iStyledSelect>`
  border: 1px solid var(--color-grey-90);
  border-radius: var(--radius-1);
  padding: 0.9rem 1rem;

  height: 50px;
  width: ${(props) => (props.width ? props.width : "100%")};

  font-weight: 400;
  font-size: var(--font-size-16);
  color: var(--color-grey-100);
  :focus {
    border: 1px solid var(--color-green-100);
  }
`;
