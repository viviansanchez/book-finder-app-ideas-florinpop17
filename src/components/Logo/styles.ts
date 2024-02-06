import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 0.5rem;
   
  h1 {
    color: ${({ theme }) => theme.COLORS.GREEN_200};
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    padding: 0;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.GREEN_200};
    font-size: 2.5rem;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 4rem;
    }

    svg {
      font-size: 5rem;
    }
  }
`