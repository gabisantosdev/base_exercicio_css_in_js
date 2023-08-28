import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import GlobalStyles, * as S from './styles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <S.Container>
        <ListaVagas />
      </S.Container>
    </>
  )
}

export default App
