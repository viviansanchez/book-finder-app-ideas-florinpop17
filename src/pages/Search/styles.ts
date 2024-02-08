import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 1rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  max-width: 62.5rem;

  animation: appear 2s;

  @keyframes appear {
    from {opacity: 0}
    to {opacity: 1}
  }
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;

  padding-bottom: 1rem;
`