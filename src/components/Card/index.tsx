import { Container, ImgContainer, BookInfoContainer } from "./styles";

export function Card() {
  // props for Card: { data }: any
  //leaving type any just for now

  //authors is an array btw, will have to map it after doing api stuff

  //for later so I dont forget (for img tag):
  // const imageAltText = `Imagem da capa do livro ${data.volumeInfo.title}`
  // alt={imageAltText}

  return (
    <Container>
      <ImgContainer>
        <img src="http://books.google.com/books/content?id=byJyDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" />
      </ImgContainer>

      <BookInfoContainer>
        <h2>book title</h2>
        <p><span>Authors: </span>book authors</p>
        <p><span>Publisher: </span>book publisher</p>
        <p><span>Publish date: </span>book publish date</p>

        <a href="#" target="_blank">Saiba mais</a>
      </BookInfoContainer>

    </Container>
  )
}