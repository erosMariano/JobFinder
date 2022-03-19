import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ButtonLaranja from "../src/components/ButtonLaranja";
import {
  ArrowHome, ButtonHome, ButtonHome2, Container, Container__image, Container__Text, Form, LinkParaEmpresa, NotAccount, ResetPassword, SubtitlePaginaDois, Title, Title2
} from "../styles/styles";
export default function Home() {
  const [widthImagem, setWidthImagem] = useState(300)
  const [ativarSegundaTela, setAtivarSegundaTela] = useState(true)
  const [typeInputPassoword, setTypeInputPassoword] = useState("password")
  function ativarForm() {
    setWidthImagem(150)
    setAtivarSegundaTela(false)
  }

  function hidePassword() {
    if (typeInputPassoword === "password") {
      setTypeInputPassoword("text")
    } else {
      setTypeInputPassoword("password")

    }
  }

  return (
    <>
      <Head>
        <title>JobFinder | Login</title>
      </Head>
      <Container>
        <Container__image widthImagemProps={widthImagem} PropsAnimated={ativarSegundaTela}>
          <img src="/images/boneco-home/cubo-laranja.png" alt="Pessoa estudando em paz" id="cuboLaranja" />
          <img src="/images/boneco-home/cubo-preto.png" alt="Pessoa estudando em paz" id="cuboPreto" />
          <img src="/images/boneco-home/personagem.png" alt="Pessoa estudando em paz" id="personagem" />
          <img src="/images/boneco-home/carinha.png" alt="" id="carinha" />
        </Container__image>

        {ativarSegundaTela ? (
          <Container__Text>
            <Title>Olá Designer,pronto para dar um <span>salto de carreira?</span></Title>
            <ButtonHome onClick={() => ativarForm()}><ButtonLaranja heightButton={"56px"} widthButton={"283px"} text="Começar agora" /></ButtonHome>

            <Link href="">
              <LinkParaEmpresa>Sou empresa, quero contratar</LinkParaEmpresa>
            </Link>
            <ArrowHome>
              <Image src="/images/icons/arrowLink.svg" width={5.32} height={8.62} />
            </ArrowHome>

            <img src="/images/eclipse-esquerda-top.png" alt="" className="eclipe-left" />
            <img src="/images/eclipse-direita-bottom.png" alt="" className="eclipe-direita" />
          </Container__Text>
        ) : (
          <>


            <img src="/images/eclipse-solida-top.png" alt="" className="eclipe-solida-top" />
            <img src="/images/eclipse-solida-bottom.png" alt="" className="eclipe-solida-bottom" />

            <img src="/images/eclipse-esquerda-top.png" alt="" className="eclipe-left" />
            <img src="/images/eclipse-direita-bottom.png" alt="" className="eclipe-direita" />

            <Container__Text>
              <Title2>Vamos la?</Title2>
              <SubtitlePaginaDois>
                Preencha os seus dados ou crie uma conta para continuar =)
              </SubtitlePaginaDois>
            </Container__Text>


            <Form>
              <label htmlFor="email_home_login">
                <span><Image src="/images/icons/user.svg" width={18} height={17} /></span>
                <input type="text" placeholder="Insira seu e-mail" id="email_home_login" />
              </label>

              <label htmlFor="password_home_login">
                <span><Image src="/images/icons/password.svg" width={13.09} height={14.88} /></span>
                <input type={typeInputPassoword} placeholder="Insira aqui sua senha" id="password_home_login" />
                <span id="eye" onClick={() => hidePassword()}><Image src="/images/icons/eye.svg" width={17.39} height={13} /></span>
              </label>
            </Form>

            <ResetPassword>
              <Link href="/">
                <a>Esqueci minha senha</a>
              </Link>
            </ResetPassword>

            <ButtonHome2><ButtonLaranja heightButton={"48px"} widthButton={"332px"} text="Entrar" /></ButtonHome2>


            <NotAccount>
              <Link href="/">
                <a>Não tem conta? Clique aqui</a>
              </Link>
              <Image src="/images/icons/arrowLink.svg" width={5.32} height={8.62} />
            </NotAccount>
          </>
        )}

      </Container>
    </>
  )
}
