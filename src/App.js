import { GlobalStyle, H1, Container } from "./GlobalStyle";
import { PrimaryButton, SecondaryButton } from './Button'

function App() {
  return (
    <Container>
      <GlobalStyle />
      <H1>Hello World</H1>
      <PrimaryButton>Clickety Click</PrimaryButton>
      <SecondaryButton>Just Click</SecondaryButton>
    </Container>

  )
}

export default App;