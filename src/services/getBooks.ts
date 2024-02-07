import { api } from "./api";

interface GetBooksApiResponseProps {
  kind: string
  totalItems: number
  items: GetBooksApiResponseItemsProps[]
}

interface GetBooksApiResponseItemsProps {
  id: string,
  volumeInfo: volumeInfoApiResponseProps
}

interface volumeInfoApiResponseProps {
  title: string,
  authors: string[],
  publisher: string,
  publishedDate: string,
  imageLinks: ImageLinksApiResponseProps,
  infoLink: string
}

interface ImageLinksApiResponseProps {
  smallThumbnail: string
}

export interface BooksProps {
  id: string,
  title: string,
  authors: string[],
  image: string,
  infoLink: string,
  publishedDate: string,
  publisher: string
}

export async function getBooks(name: string): Promise<BooksProps[]> {
  try {
    const { data } = await api.get<GetBooksApiResponseProps>(`/volumes?q=${name}`)
    const { items } = data

    const books = items.map((item) => {
      return {
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        image: item.volumeInfo.imageLinks.smallThumbnail,
        infoLink: item.volumeInfo.infoLink,
        publishedDate: item.volumeInfo.publishedDate,
        publisher: item.volumeInfo.publisher
      }
    })

    return books

  } catch (error) {
    return []
  }
}