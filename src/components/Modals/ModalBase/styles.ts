import styled from "styled-components";

export const ModalBaseStyled = styled.div`
  align-items: center;
  animation: show-background 0.8s ease;
  background-color: rgba(0, 0, 0, 0.76);
  display: flex;
  height: 100%;
  justify-content: center;
  position: fixed;
  z-index: 1;
  width: 100%;
  -webkit-animation: show-background 0.8s ease;

  @-webkit-keyframes show-background {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }

    100% {
      background-color: rgba(0, 0, 0, 0.76);
    }
  }

  @keyframes show-background {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }

    100% {
      background-color: rgba(0, 0, 0, 0.76);
    }
  }

  & > article {
    animation: slide-bottom 0.7s ease;
    background-color: var(--color-white);
    border-radius: var(--radius-1);
    max-width: 798px;
    margin: 20px;
    min-height: 318px;
    -webkit-animation: slide-bottom 0.7s ease;
    width: 100%;

    @-webkit-keyframes slide-bottom {
      0% {
        transform: translateY(-100px);
        -webkit-transform: translateY(-100px);
      }

      100% {
        transform: translateY(0);
        -webkit-transform: translateY(0);
      }
    }

    @keyframes slide-bottom {
      0% {
        transform: translateY(-100px);
        -webkit-transform: translateY(-100px);
      }

      100% {
        transform: translateY(0);
        -webkit-transform: translateY(0);
      }
    }
  }

  header {
    align-items: center;
    background-color: var(--color-orange-80);
    border-radius: var(--radius-1) var(--radius-1) 0 0;
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 1.25rem;
    width: 100%;

    h2 {
      color: var(--color-white);
      font-size: var(--font-size-25);
      font-weight: 600;
    }
  }

  main {
    max-height: 560px;
    overflow-y: auto;
    padding: 2.2rem 1.25rem;
  }

  @media (min-width: 530px) {
    header,
    main {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
  }
`;
