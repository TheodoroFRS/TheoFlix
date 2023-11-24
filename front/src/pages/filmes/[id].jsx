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
                    <div className={styles.container_autores}>
                        <div className={styles.list_autores}>
                            <div className={styles.autor}>
                                1
                            </div>
                            <div className={styles.autor}>
                                2
                            </div>

                            <div className={styles.autor}>
                                3
                            </div>

                            <div className={styles.autor}>
                                4
                            </div>

                            <div className={styles.autor}>
                                5
                            </div>

                            <div className={styles.autor}>
                                6
                            </div>
                            <div className={styles.autor}>
                                7
                            </div>
                            <div className={styles.autor}>
                                8
                            </div>
                            <div className={styles.autor}>
                                9
                            </div>
                            <div className={styles.autor}>
                                10
                            </div>
                            <div className={styles.autor}>
                                11
                            </div>

                            <div className={styles.autor}>
                                1
                            </div>
                            <div className={styles.autor}>
                                2
                            </div>

                            <div className={styles.autor}>
                                3
                            </div>

                            <div className={styles.autor}>
                                4
                            </div>

                            <div className={styles.autor}>
                                5
                            </div>

                            <div className={styles.autor}>
                                6
                            </div>
                            <div className={styles.autor}>
                                7
                            </div>
                            <div className={styles.autor}>
                                8
                            </div>
                            <div className={styles.autor}>
                                9
                            </div>
                            <div className={styles.autor}>
                                10
                            </div>
                            <div className={styles.autor}>
                                11
                            </div>
                        </div>
                    </div>
                </>

            )}

            <Container >

            </Container>


        </>
    )

}