import styled from "styled-components"

export const StyledRegisterPage = styled.main`
    background-color: var(--color-grey-50);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
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

`