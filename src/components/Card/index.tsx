import { Container, ImgContainer, BookInfoContainer } from "./styles";

import { BooksProps } from "../../services/getBooks";

interface Props {
  data: BooksProps
}

export function Card({ data }: Props) {
  const imageAltText = `Imagem da capa do livro ${data.title}`
  const extraInfo = `${data.infoLink}`

  // const imageSource = data.image == '' ? '../../assets/image-not-found.svg' : data.image
  // this is not working unfortunately, but at least the app doesnt break now. leaving this here as reminder, since it's not highest priority to solve. 

  return (
    <Container >
      <ImgContainer>
        <img src={data.image} alt={imageAltText} />
      </ImgContainer>

      <BookInfoContainer>
        <h2>{data.title}</h2>

        {
          data.authors &&
          <p>
            <span>Autores: </span>
            {data.authors &&
              data.authors.map(author => {
                return <span className="author-name">{author} </span>
              })
            }
          </p>
        }

        {
          data.publisher &&
          <p><span>Editora: </span>{data.publisher}</p>
        }

        {
          data.publisher &&
          <p><span>Data de publicação: </span>{data.publishedDate}</p>
        }

        <a href={extraInfo} target="_blank">Saiba mais</a>
      </BookInfoContainer>

    </Container>
  )
}