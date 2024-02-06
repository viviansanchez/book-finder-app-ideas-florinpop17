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
    font-size: clamp(1.5rem, 1.5rem + 2vw, 5rem);
    padding: 0;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.GREEN_200};
    font-size: clamp(2.5rem, 2.5rem + 2vw, 5rem);
  }
`