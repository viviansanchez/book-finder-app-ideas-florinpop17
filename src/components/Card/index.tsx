import { Container, ImgContainer, BookInfoContainer } from "./styles";

import { BooksProps } from "../../services/getBooks";

interface Props {
  data: BooksProps
}

export function Card({ data }: Props) {
  const imageAltText = `Imagem da capa do livro ${data.title}`
  const extraInfo = `${data.infoLink}`

  return (
    <Container >
      <ImgContainer>
        <img src={data.image} alt={imageAltText} />
      </ImgContainer>

      <BookInfoContainer>
        <h2>{data.title}</h2>
        <p>
          <span>Autores: </span>
          {
            data.authors.map(author => {
              return <span className="author-name">{author} </span>
            })
          }
        </p>
        <p><span>Editora: </span>{data.publisher}</p>
        <p><span>Data de publicação: </span>{data.publishedDate}</p>

        <a href={extraInfo} target="_blank">Saiba mais</a>
      </BookInfoContainer>

    </Container>
  )
}