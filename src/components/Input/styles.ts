import styled from "styled-components";

interface iStyledInput {
  width?: string;
}

export const StyledInput = styled.input<iStyledInput>`
  outline: none;
  border: 1px solid var(--color-grey-90);
  border-radius: var(--radius-1);
  padding: 0.9rem 1rem;
  height: 50px;
  width: ${(props) => (props.width ? props.width : "100%")};

  ::placeholder {
    font-weight: 400;
    font-size: var(--font-size-16);
    color: var(--color-grey-100);
  }
  :focus {
    border: 1px solid var(--color-green-100);
    outline: none;
  }

  &[type="range"] {
    width: 100%;
    background-color: transparent;
    border: none;
    -webkit-appearance: none;
  }

  &[type="range"]:focus {
    outline: none;
  }

  &[type="range"]::-webkit-slider-runnable-track {
    background: var(--color-orange-80);
    border: 0;
    border-radius: 8px;
    width: 100%;
    height: 10px;
    cursor: pointer;
  }

  &[type="range"]::-webkit-slider-thumb {
    margin-top: -8px;
    width: 26px;
    height: 26px;
    background: var(--color-white);
    border: 7px solid var(--color-orange-80);
    border-radius: 15px;
    cursor: pointer;
    -webkit-appearance: none;
  }

  &[type="range"]:focus::-webkit-slider-runnable-track {
    background: var(--color-orange-80);
  }

  &[type="range"]::-moz-range-track {
    background: var(--color-orange-80);
    border: 0;
    border-radius: 8px;
    width: 100%;
    height: 10px;
    cursor: pointer;
  }

  &[type="range"]::-moz-range-thumb {
    width: 26px;
    height: 26px;
    background: var(--color-white);
    border: 7px solid var(--color-orange-80);
    border-radius: 15px;
    cursor: pointer;
  }

  &[type="range"]::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 8px 0;
    color: transparent;
    width: 100%;
    height: 10px;
    cursor: pointer;
  }
  &[type="range"]::-ms-thumb {
    width: 26px;
    height: 26px;
    background: var(--color-white);
    border: 7px solid var(--color-orange-80);
    border-radius: 15px;
    cursor: pointer;
    margin-top: 0px;
  }

  &[type="range"]::-ms-fill-lower {
    background: var(--color-orange-70);
    border: 0;
    border-radius: 16px;
  }

  &[type="range"]::-ms-fill-upper {
    background: var(--color-white);
    border: 0;
    border-radius: 16px;
  }

  &[type="range"]:focus::-ms-fill-lower {
    background: var(--color-orange-80);
  }

  &[type="range"]:focus::-ms-fill-upper {
    background: var(--color-white);
  }

  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &[type="number"]::-ms-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const StyledLabel = styled.label`
  font-weight: 400;
  font-size: var(--font-size-18);
  color: var(--color-green-100);
`;
