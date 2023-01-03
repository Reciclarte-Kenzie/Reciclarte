import styled from "styled-components";

export const StyledInput = styled.input`
  outline: none;
  border: 1px solid #a69f9f;
  border-radius: 8px;
  padding: 0.9rem 1rem;

  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #757474;
  }
  :focus {
    border: 1px solid #011b0c;
    outline: 1px solid #011b0c;
  }
`;

export const StyledLabel = styled.label`
  font-weight: 400;
  font-size: 24px;
  color: #011b0c;
`;
