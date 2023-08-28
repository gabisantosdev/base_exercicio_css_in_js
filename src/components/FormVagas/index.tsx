import { FormEvent, useState } from 'react'
import * as S from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <S.Form onSubmit={aoEnviarForm}>
      <S.Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <S.ButtonPesquisar type="submit">Pesquisar</S.ButtonPesquisar>
    </S.Form>
  )
}
export default FormVagas
