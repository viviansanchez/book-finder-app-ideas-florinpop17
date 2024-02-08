import styled from "styled-components";

export const Container = styled.div`
  border: 4px dashed ${({ theme }) => theme.COLORS.ORANGE_100};
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  gap: 2rem;

  animation: appear 2s;

  > svg {
    color: ${({ theme }) => theme.COLORS.ORANGE_100};
    font-size: clamp(6rem, 6rem + 2vw, 8rem);
  }

  > p {
    color: ${({ theme }) => theme.COLORS.ORANGE_100};
    font-size: clamp(2rem, 2rem + 2vw, 3rem);
  }

  @media screen and (min-width: 768px) {
    padding: 1.4rem;
  } 

  @keyframes appear {
    from {opacity: 0}
    to {opacity: 1}
  }
`