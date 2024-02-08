import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Container, InputContainer, CardsContainer } from './styles'

import { IoIosSearch } from "react-icons/io";

import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Card } from '../../components/Card';

import { getBooks, BooksProps } from '../../services/getBooks';


export function Search() {

  const [search, setSearch] = useState('')
  const [books, setBooks] = useState<BooksProps[]>([])

  function handleClick() {
    getBooks(search).then((response) => {
      setBooks(response)
    })
  }

  return (
    <Container>
      <Link to='/'>
        <Logo />
      </Link>

      <InputContainer>
        <Input
          placeholder='Pesquisar por título, autor, editora...'
          onChange={e => setSearch(e.target.value)}
        />
        <button type='button' onClick={handleClick} >
          <IoIosSearch />
        </button>
      </InputContainer>

      <CardsContainer>
        {
          books.map(book => {
            return <Card data={book} key={book.id} />
          })
        }
      </CardsContainer>


    </Container>
  )
}
