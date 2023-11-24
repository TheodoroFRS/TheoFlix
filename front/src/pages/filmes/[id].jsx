import Header from "@/components/Header";
// import Filme from "@/components/Filme";

import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { api } from "@/service/api";
import styles from '@/styles/styles.module.css';
import Container from "@/components/Container";

import { formatarData } from "@/utils/mascaras";
import Message from "@/components/Message";
import Filme from "@/components/filme";
import Titulo from "@/components/Titulo";
import Ator from "@/components/Ator";


//npm install -g json-server
//npx json-server --watch database.json --port 3001

export default function EventosHome() {

    const [filme, setFilme] = useState({})

    //  Estado para abrir e fechar o o message
    const [message, setMessage] = useState(false);

    const router = useRouter()

    const id = router.query.id

    //as vezes falha
    async function getEventos() {
        try {
            if (id) {
                const res = await api.get(`/filmes/${id}?populate=*`)
                setFilme(res.data.data.attributes)
                console.log(res.data.data.attributes);
                // .then(resultado => setEvento(resultado.data));
                setMessage(false)
            }
        } catch (error) {
            if (error.response.status === 404) {
                setMessage(true)
            }
            console.log(error);
        }
    }

    useEffect(() => {
        getEventos();
    }, [router]);


    return (
        <>
            <Header />
            {message == true ? (
                <>
                    <Message
                        Texto="filme não encontrado"
                        ativo={true}
                        error
                    />

                </>

            ) : (

                <>

                    {/* <Message
                        Texto="filme encontrado"
                        ativo={true}
                        success
                    /> */}

                    <Filme
                        titulo={filme.titulo}
                        src={"http://localhost:1337" + filme.Capa?.data.attributes.url}
                        alt={filme.alt}
                        sinopse={filme.sinopse}
                        lancamento={filme.lancamento}
                        duracao={filme.duracao}
                        Palavras_chave={filme.Palavras_chave}
                        generos={filme.generos}
                        classificacao={filme.classificacao}
                        avaliacaoes_positivas={filme.avaliacaoes_positivas}
                        avaliacaoes_negativas={filme.avaliacaoes_negativas}

                    />

                    <Titulo> Imagens </Titulo>
                    <div className={styles.container}>

                        <div className={styles.list_imagens} >

                            {filme?.imagens?.data?.map(document =>
                                //key = { document },
                                <img className={styles.image} src={"http://localhost:1337" + document.attributes.url} alt={"Imagens do filme"} />

                            )}
                        </div>
                    </div>

                    <Titulo> Elenco </Titulo>
                    
                    {/* Mario */}
                    {/* <Container>
                        <div className={styles.container_atores}>

                            <div className={styles.atores}>

                                <div className={styles.list_atores}>
                                    <>
                                
                                        <Ator
                                            nome={"Anya Taylor-Joy"}
                                            src={"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT8_x2j3f9EFgZRfYfa5tM9BYefe-rRX3mwDtP_JgDb8BSQ56Uld8oeK9I&s=19"}
                                            alt={"Alt da imagem"}
                                            personagem={" Princesa Peach"}
                                            dublador={"Carina Eiras"}
                                         
                                        />

                                        <Ator
                                            nome={"Chris Pratt"}
                                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbb1zmpXFLV_CPcMPB11akKI7Rz2pm1fbJa3YvJRxsdNFYe6T5IXDnCQ8&s=10"}
                                            alt={"Alt da imagem"}
                                            personagem={"Mario"}   
                                            dublador={"Raphael Rossatto"}
                                        />

                                        <Ator
                                            nome={"Jack Black"}
                                            src={"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS5TKqyBeumQuBHvsDwryonzMgKJLTc1h6-qIwHPDZ9RrxxdVz3nNVabpHfsEqW_0254aiW2ls&s=19"}
                                            alt={"Alt da imagem"}
                                            personagem={"Bowser"}
                                            dublador={"Márcio Dondi"}
                                        />

                                        <Ator

                                            nome={"Charlie Day"}
                                            src={"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT1407_PLCvEn9JHtTFLJEi3UKyouThPbUAQNDNzzReTzl96DokT5U0io0lDDFTmkmHeZ1lN-Aj&s=19"}
                                            alt={"Alt da imagem"}
                                            personagem={"Luigi"}
                                            dublador={"Manolo Rey"}
                                        />

                                        <Ator
                                            nome={"Seth Rogen"}
                                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDg2pnyHBTVgucCuOVimHlTUq4VxjaX2uo6O-qTzCQBYcncw4y6GXnbg&s=10"}
                                            alt={"Alt da imagem"}
                                            personagem={"Donkey Kong"}
                                            dublador={"Pedro Azevedo"}
                                        />

                                        <Ator
                                            nome={"Keegan-Michael Key"}
                                            src={"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRddbb4odtvFqn-DFfOaEmpz0RYff3XCzqkipRTh6t6gij2mq3axd7xDEnhaEa7ZIKE3cA1B8U&s=19"}
                                            alt={"Alt da imagem"}
                                            personagem={"Toad"}
                                            dublador={"Eduardo Drummond"}
                                        />

                                        <Ator
                                            nome={"Charles Martinet"}
                                            src={"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTTtDubW0YB5Ii1lycC7aO1e7tHR7VvtaMVHYST1LU_kMMpKSROgRZLGl_KVFRqeR-RiJqCnpw5&s=19"}
                                            alt={"Alt da imagem"}
                                            personagem={"Giuseppe"}
                                            dublador={"Charles Martinet"}
                                        />

                                        <Ator
                                            nome={"Fred Armisen"}
                                            src={"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR7y2qMlSnCyzQaXK4KZ0muGuHaJds9-b3WJevXDPa8rBB2AldKdBx3Zmof0nQetsVKgbx1AUY&s=19"}
                                            alt={"Alt da imagem"}
                                            personagem={"Cranky Kong"}
                                            dublador={"Léo Rabelo"}
                                        />

                                        <Ator
                                            nome={"Kevin Michael Richardson"}
                                            src={"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ91xHgjEOMCMcNOXzOt2zo5qCfqW_fsmGyREOw5wDv7JWaTznH_GpmyXL8wLoJynbnjRsb8_I&s=19"}
                                            alt={"Alt da imagem"}
                                            personagem={"Kamek"}
                                            dublador={"Ricardo Juarez"}
                                        />

                                        <Ator
                                            nome={"Sebastian Maniscalco"}
                                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXd5EYlCcWNpo6tOG0_eweuUOoJI-ZVQASSHnk42wteqT4bO3qUc3ReS4&s=10"}
                                            alt={"Alt da imagem"}
                                            personagem={"Spike"}
                                            dublador={"Filipe Albuquerque"}
                                        />

                                        <Ator
                                            nome={"Khary Payton"}
                                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn1qIJaANFkvyuZyXwUD7krEjK12BmqSjvKvPlkTr-f3ORx5ME-lXdNPE&s=10"}
                                            alt={"Alt da imagem"}
                                            personagem={"Penguin King"}
                                            dublador={"Marco Ribeiro"}
                                        />

                                    </>


                                </div>
                            </div>

                        </div>
                    </Container> */}

                    <Container>
                        <div className={styles.container_atores}>

                            <div className={styles.atores}>

                                <div className={styles.list_atores}>
                                    <>
                                        {/* {filmes?.map(document =>
                                          <Ator
                                                key={document.id}
                                                id={document.id}
                                                nome={document.attributes.nome}
                                                src={"http://localhost:1337" + document.attributes.Capa.data.attributes.url}
                                                alt={document.attributes.alt}
                                                personagem={document.attributes.personagem}

                                            />
                                        )} */}


                                        <Ator
                                            nome={"nome"}
                                            src={"../favicon.ico"}
                                            alt={"Alt da imagem"}
                                            personagem={"nome do personagem"}
                                            dublador={"nome do dublador"}

                                        />

                                        <Ator
                                            nome={"nome"}
                                            src={"../favicon.ico"}
                                            alt={"Alt da imagem"}
                                            personagem={"nome do personagem"}
                                            dublador={"nome do dublador"}

                                        />

                                        <Ator
                                            nome={"nome"}
                                            src={"../favicon.ico"}
                                            alt={"Alt da imagem"}
                                            personagem={"nome do personagem"}
                                            dublador={"nome do dublador"}

                                        />

                                        <Ator
                                            nome={"nome"}
                                            src={"../favicon.ico"}
                                            alt={"Alt da imagem"}
                                            personagem={"nome do personagem"}
                                            dublador={"nome do dublador"}

                                        />

                                        <Ator
                                            nome={"nome"}
                                            src={"../favicon.ico"}
                                            alt={"Alt da imagem"}
                                            personagem={"nome do personagem"}
                                            dublador={"nome do dublador"}

                                        />
                                        <Ator
                                            nome={"nome"}
                                            src={"../favicon.ico"}
                                            alt={"Alt da imagem"}
                                            personagem={"nome do personagem"}
                                            dublador={"nome do dublador"}

                                        />
                                        <Ator
                                            nome={"nome"}
                                            src={"../favicon.ico"}
                                            alt={"Alt da imagem"}
                                            personagem={"nome do personagem"}
                                            dublador={"nome do dublador"}

                                        />
                                        <Ator
                                            nome={"nome"}
                                            src={"../favicon.ico"}
                                            alt={"Alt da imagem"}
                                            personagem={"nome do personagem"}
                                            dublador={"nome do dublador"}

                                        />
                                        <Ator
                                            nome={"nome"}
                                            src={"../favicon.ico"}
                                            alt={"Alt da imagem"}
                                            personagem={"nome do personagem"}
                                            dublador={"nome do dublador"}

                                        />



                                    </>


                                </div>
                            </div>

                        </div>
                    </Container>


                </>

            )}

            <Container >

            </Container>


        </>
    )

}