import Head from 'next/head'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head><title>Teste </title></Head>
      <Container>Eros</Container>
      <Container2>Teste</Container2>
      <Teste>Eros Mariano</Teste>
    </>
  )
}

export const Container = styled.div`
  background: #03cbda;
`

export const Container2 = styled.div`
  background-color: #5e53f3;
`

export const Teste = styled.div`
  background: #48f1b1;
`