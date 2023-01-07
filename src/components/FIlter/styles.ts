import styled from "styled-components";

interface iFilter {
  catList: string[];
  matList: string[];
}

export const StyledFilter = styled.aside<iFilter>`
  position: sticky;
  background-color: var(--color-grey-50);
  width: clamp(280px, 90%, 300px);
  border-radius: var(--radius-1);

  @media (min-width: 700px) {
    width: clamp(300px, 40%, 402px);
  }

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
    border: 1px solid var(--color-grey-60);
    border-radius: 0 0 var(--radius-1) var(--radius-1);
    border-top: none;

    @media (min-width: 700px) {
      width: 100%;
    }
  }

  .select {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .select section {
    width: 48%;
    display: flex;
    flex-direction: column;
    gap: 2vh;
  }

  .select ul {
    display: flex;
    flex-wrap: wrap;
    height: ${({ catList, matList }) =>
      catList?.length > 2 || matList.length > 2 ? "58px" : "27px"};
    overflow: auto;
  }

  .select ul li {
    gap: 0.25rem;
    height: 26.5px;
  }

  .select ul button {
    height: 20px;
    width: 10px;
  }
  .select ul button img {
    height: 20px;
    width: 10px;
  }
`;
