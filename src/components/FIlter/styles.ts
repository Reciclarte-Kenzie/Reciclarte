import styled from "styled-components";

export const StyledFilter = styled.aside`
  border-radius: var(--radius-1);
  position: sticky;
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

  .select {
    display: flex;
    justify-content: space-between;
  }

  input[type="range"] {
    width: 100%;
    background-color: transparent;
    border: none;
    -webkit-appearance: none;
  }

  input[type="range"]:focus {
    outline: none;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    background: var(--color-orange-80);
    border: 0;
    border-radius: 8px;
    width: 100%;
    height: 10px;
    cursor: pointer;
  }

  input[type="range"]::-webkit-slider-thumb {
    margin-top: -8px;
    width: 26px;
    height: 26px;
    background: var(--color-white);
    border: 7px solid var(--color-orange-80);
    border-radius: 15px;
    cursor: pointer;
    -webkit-appearance: none;
  }

  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: var(--color-orange-80);
  }

  input[type="range"]::-moz-range-track {
    background: var(--color-orange-80);
    border: 0;
    border-radius: 8px;
    width: 100%;
    height: 10px;
    cursor: pointer;
  }

  input[type="range"]::-moz-range-thumb {
    width: 26px;
    height: 26px;
    background: var(--color-white);
    border: 7px solid var(--color-orange-80);
    border-radius: 15px;
    cursor: pointer;
  }

  input[type="range"]::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 8px 0;
    color: transparent;
    width: 100%;
    height: 10px;
    cursor: pointer;
  }
  input[type="range"]::-ms-thumb {
    width: 26px;
    height: 26px;
    background: var(--color-white);
    border: 7px solid var(--color-orange-80);
    border-radius: 15px;
    cursor: pointer;
    margin-top: 0px;
  }

  input[type="range"]::-ms-fill-lower {
    background: var(--color-orange-70);
    border: 0;
    border-radius: 16px;
  }

  input[type="range"]::-ms-fill-upper {
    background: var(--color-white);
    border: 0;
    border-radius: 16px;
  }

  input[type="range"]:focus::-ms-fill-lower {
    background: var(--color-orange-80);
  }

  input[type="range"]:focus::-ms-fill-upper {
    background: var(--color-white);
  }
`;
