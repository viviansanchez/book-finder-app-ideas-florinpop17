import { Container, InputContainer } from './styles'

import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'

import { IoIosSearch } from "react-icons/io";

export function Search() {

  return (
    <Container>
      <a href="#">
        <Logo />
      </a>
      {/* link fron react-router-dom instead of a*/}
      <InputContainer>
        <Input
          placeholder='Pesquisar por título, autor, editora...'
        />
        <button type='button'>
          <IoIosSearch />
        </button>
      </InputContainer>
      <p>map on card component</p>

    </Container>
  )
}
