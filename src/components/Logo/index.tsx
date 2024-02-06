import { Container } from "./styles";
import { GiBookshelf } from "react-icons/gi";

export function Logo() {
  return (
    <Container>
      <GiBookshelf />
      <h1>BookFinder</h1>
    </Container>
  )
}