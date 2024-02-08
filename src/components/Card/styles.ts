import styled from "styled-components";

export const Container = styled.div`
  border: 3px solid ${({ theme }) => theme.COLORS.ORANGE_100};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  max-width: 15.625rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 27rem;
    max-width: 27rem;
  }
`
export const ImgContainer = styled.div`
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    max-width: 9rem;

    > img {
      width: 7.125rem;
    }
  }
`

export const BookInfoContainer = styled.div`
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.GREEN_200};
  }

  p {
    color: ${({ theme }) => theme.COLORS.ORANGE_200};

    > span {
      color: ${({ theme }) => theme.COLORS.GREEN_200};
    }

    > .author-name {
      color: ${({ theme }) => theme.COLORS.ORANGE_200}
    }
  }

  a {
    align-self: flex-end;
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;

    background-color: ${({ theme }) => theme.COLORS.ORANGE_100};
    color: ${({ theme }) => theme.COLORS.WHITE};

    transition: all 0.2s;

    &:hover {
      filter: brightness(1.2);
      color: ${({ theme }) => theme.COLORS.GREEN_200};
    }
  }

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }
`