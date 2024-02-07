import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 1rem;
  margin: 0 auto;
  /* margin-top: -4rem; */

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 4rem;

  max-width: 62.5rem;
  /* border: 1px solid red; */
`

export const InputContainer = styled.div`
  width: 100%;
  max-width: 30rem;

  display: flex;
  align-items: center;

  border: 2px solid ${({ theme }) => theme.COLORS.GREEN_200};

  button {
    border: none;
    border-left: 1px solid ${({ theme }) => theme.COLORS.GREEN_100};
    background: none;
    padding: 0.5rem;

    display: flex;
    justify-content: center;
  }
`

export const CardsContainer = styled.div`
  border: 1px solid green;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;

  padding-bottom: 1rem;
`