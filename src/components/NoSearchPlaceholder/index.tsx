import { Container } from "./styles";

import { HiMagnifyingGlass } from "react-icons/hi2";

export function NoSearchPlaceholder() {
  return (
    <Container>
      <HiMagnifyingGlass />
      <p>Faça uma pesquisa!</p>
    </Container>
  )
}