import styled from "styled-components"

export const StyledRegisterPage = styled.main`
    background-color: var(--color-grey-50);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;

    p {
    position: relative;
    top: -12px;
    display: flex;
    align-self: baseline;
    height: 0px;
    font-weight: 400;
    font-size: var(--font-size-12);
    color: var(--color-orange-80);

        @media (min-width: 700px) {
            font-size: var(--font-size-14);
        }
    }
    
    & > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 22.8125rem;
        max-width: 100%;
    }

    & > div button:nth-child(1){
        border-radius: var(--radius-1);
        background-color: var(--color-orange-80);
        width: 4.12;
        height: 1.87;
        color: var(--color-white);
        box-sizing: border-box;
        padding:0.25rem 0.5rem 0.25rem;
        transition: 300ms;
    }

    & > div button:nth-child(2){
        border-radius: var(--radius-1);
        background-color: var(--color-orange-80);
        width: 4.12;
        height: 1.87;
        color: var(--color-white);
        box-sizing: border-box;
        padding:0.25rem 0.5rem 0.25rem;
        transition: 300ms;
    }

    & > div button:hover{
        background-color:var(--color-green-90)
    }

    @media (min-width: 700px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem 

    }
`