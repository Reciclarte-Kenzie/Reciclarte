import styled, { css } from "styled-components";

interface iStyledButton {
  buttonType?: string;
  width?: string;
  padding?: string;
}

export const StyledButton = styled.button<iStyledButton>`
  border-radius: var(--radius-1);
  font-weight: 400;
  font-size: var(--font-size-18);
  padding: ${(props) => (props.padding ? props.padding : "1vh 0")};
  width: ${(props) =>
    props.width ? props.width : "clamp(250px, 100%, 300px)"};
  transition: 300ms;

  :disabled {
    background-color: var(--color-grey-60);
    border: none;
    color: var(--color-grey-90);
  }

  ${({ buttonType }) => {
    switch (buttonType) {
      case "invert":
        return css`
          background-color: var(--color-white);
          border: 2px solid var(--color-white);
          color: var(--font-color-brown-70);

          :hover,
          :focus {
            border: 2px solid var(--color-grey-50);
            background-color: var(--color-grey-50);
          }
        `;
      case "whiteBorder":
        return css`
          background-color: var(--color-brown-70);
          border: 2px solid var(--color-white);
          color: var(--font-color-white);

          :hover,
          :focus {
            background-color: var(--color-brown-80);
          }
        `;

      case "grey":
        return css`
          background-color: var(--color-grey-60);
          border: 2px solid var(--color-grey-60);
          color: var(--font-color-grey-100);

          :hover,
          :focus {
            border: 2px solid var(--color-brown-80);
            background-color: var(--color-brown-80);
            color: var(--font-color-grey-70);
          }
        `;

      case "green":
        return css`
          background-color: var(--color-green-80);
          border: 2px solid var(--color-green-80);
          color: var(--font-color-white);

          :hover,
          :focus {
            border: 2px solid var(--color-green-90);
            background-color: var(--color-green-90);
          }
        `;

      default:
        return css`
          background-color: var(--color-brown-70);
          border: 2px solid var(--color-brown-70);
          color: var(--font-color-white);

          :hover,
          :focus {
            border: 2px solid var(--color-brown-80);
            background-color: var(--color-brown-80);
          }
        `;
    }
  }}
`;
