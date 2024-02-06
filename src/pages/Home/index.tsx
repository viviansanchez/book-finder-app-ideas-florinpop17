import { Container } from './styles'

import { Logo } from '../../components/Logo'
import { Button } from '../../components/Button'

export function Home() {

  return (
    <Container>
      <Logo />
      <p>
        Boas vindas! Este é o <strong>BookFinder</strong>. Aqui você pode pesquisar por um livro utilizando o seu título, nome do autor ou editora.
      </p>
      <Button title='Pesquisar' />
    </Container>
  )
}

