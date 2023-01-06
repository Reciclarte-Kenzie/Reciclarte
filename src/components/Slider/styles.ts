import styled, { ThemedStyledFunction } from "styled-components";

interface iSliderStyled {
  valueCssVariable: string;
}

export const SliderStyled = styled.input<iSliderStyled>`
  --value: ${({ valueCssVariable, value }) => valueCssVariable || value};
  --min: ${({ min }) => min};
  --max: ${({ max }) => max};
  --range: calc(var(--max) - var(--min));
  --ratio: calc((var(--value) - var(--min)) / var(--range));
  --sx: calc(0.5 * 2em + var(--ratio) * (100% - 2em));

  height: 8px;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    background: #ffffff;
    border-radius: 1em;
    border: 7px solid var(--color-orange-80);
    box-shadow: none;
    height: 2em;
    margin-top: calc(10px * 0.5 - max(2em * 0.5, 7px));
    -webkit-appearance: none;
    width: 2em;
  }

  &::-webkit-slider-runnable-track {
    background: var(--color-grey-60);
    border: none;
    border-radius: 0.5em;
    box-shadow: none;
    height: 10px;
  }

  &:hover::-webkit-slider-thumb:hover {
    border-color: var(--color-orange-70);
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(var(--color-orange-80), var(--color-orange-80))
        0 / var(--sx) 100% no-repeat,
      var(--color-grey-60);
  }

  &:hover::-webkit-slider-runnable-track {
    background: linear-gradient(var(--color-orange-70), var(--color-orange-70))
        0 / var(--sx) 100% no-repeat,
      var(--color-grey-60);
  }

  &::-moz-range-thumb {
    background: #ffffff;
    border-radius: 1em;
    border: 7px solid var(--color-orange-80);
    box-shadow: none;
    height: max(calc(2em - 7px - 7px), 0px);
    width: max(calc(2em - 7px - 7px), 0px);
  }

  &::-moz-range-track {
    background: var(--color-grey-60);
    border: none;
    border-radius: 0.5em;
    box-shadow: none;
    height: 10px;
  }

  &:hover::-moz-range-thumb {
    border-color: var(--color-orange-70);
  }

  &::-moz-range-track {
    background: linear-gradient(var(--color-orange-80), var(--color-orange-80))
        0 / var(--sx) 100% no-repeat,
      var(--color-grey-60);
  }

  &:hover::-moz-range-track {
    background: linear-gradient(var(--color-orange-70), var(--color-orange-70))
        0 / var(--sx) 100% no-repeat,
      var(--color-grey-60);
  }

  &::-ms-fill-upper {
    background: transparent;
    border-color: transparent;
  }

  &::-ms-fill-lower {
    background: transparent;
    border-color: transparent;
  }

  &::-ms-thumb {
    background: #ffffff;
    border-radius: 1em;
    border: 7px solid var(--color-orange-80);
    box-sizing: border-box;
    box-shadow: none;
    height: 2em;
    margin-top: 0;
    width: 2em;
  }

  &::-ms-track {
    background: var(--color-grey-60);
    border-radius: 0.5em;
    border: none;
    box-shadow: none;
    box-sizing: border-box;
    height: 10px;
  }

  &:hover::-ms-thumb {
    border-color: var(--color-orange-70);
  }

  &::-ms-fill-lower {
    background: var(--color-orange-80);
    border-radius: 0.5em 0 0 0.5em;
    border: none;
    border-right-width: 0;
    margin: -undefined 0 -undefined -undefined;
    height: 10px;
  }

  &:hover::-ms-fill-lower {
    background: var(--color-orange-70);
  }
`;
