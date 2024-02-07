import styled from "styled-components";

export const Container = styled.button`
  padding: 0.5rem 0.75rem;
  background: none;
  border: 2px solid ${({ theme }) => theme.COLORS.ORANGE_100};
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.COLORS.GREEN_200};
  font-size: 1.5rem;
  font-weight: 700;

  transition: all 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.ORANGE_100};
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
    padding: 1rem 1.5rem;
     font-size: 2rem;
  }
`