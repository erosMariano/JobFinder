import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <main>
            <User>
                <div>
                    <img src="" alt="" />
                    <div>
                        <h2>OLÁ, CARLOS</h2>
                        <p>Seja muito bem vindo!</p>
                    </div>
                </div>
                <img src="" alt="" />
            </User>

            <Aplications>
                <img src="" alt="" />
                <div>
                    <h3>SUAS APLICAÇÕES</h3>
                    <p>Confira aqui o resultado das suas aplicações</p>
                </div>
                <span>2</span>
            </Aplications>

            <h3>eNCONTRE  um job para chamar de seu</h3>

            <Filter>
                <label htmlFor="">
                    <img src="" alt="" />
                    <input type="text" />
                </label>
                <img src="" alt="" />
            </Filter>

            <ListVagas>
                <div>
                    <h3>40 vagas encontradas</h3>
                    <h4>Maior relevância</h4>
                </div>

                <ListVagasItem>
                    
                </ListVagasItem>
            </ListVagas>
        </main>
    )
}

export default Home

export const User = styled.div``



export const Aplications = styled.div``

export const Filter = styled.div``

export const ListVagas = styled.div``

export const ListVagasItem = styled.div``