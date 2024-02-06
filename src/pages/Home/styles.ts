import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  height: 100vh;
  margin: 0 auto;
  margin-top: -4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  max-width: 62.5rem;

  p {
    text-align: center;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.ORANGE_200};

    strong {
      color: ${({ theme }) => theme.COLORS.GREEN_200};
    }
  }

  @media screen and (min-width: 768px) {
    p {
      font-size: 2rem;
    }
  }
`

