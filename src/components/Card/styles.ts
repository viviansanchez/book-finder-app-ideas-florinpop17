import styled from "styled-components";

export const Container = styled.div`
  border: 3px solid ${({ theme }) => theme.COLORS.ORANGE_100};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

`

export const ImgContainer = styled.div`
  /* border: 1px solid red; */

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;

  }
`

export const BookInfoContainer = styled.div`
  /* border: 1px solid green; */

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
  }

  a {
    /* border: 1px solid red; */

    align-self: flex-end;
    padding: 0.2rem 0.3rem;
    border-radius: 0.25rem;

    background-color: ${({ theme }) => theme.COLORS.ORANGE_100};
    color: ${({ theme }) => theme.COLORS.WHITE};

    transition: all 0.2s;

    &:hover {
      filter: brightness(0.9);
      text-decoration: underline;
      /* for some reason, this is not working. Leaving this here to find fix later, as it's high priority */
    }
  }

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`