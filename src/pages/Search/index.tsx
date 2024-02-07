import { Container, InputContainer, CardsContainer } from './styles'

import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Card } from '../../components/Card';

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


      {/* cards are hard coded for testing only, will be a map later */}
      <CardsContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsContainer>


    </Container>
  )
}
