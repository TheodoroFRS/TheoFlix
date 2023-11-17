import Header from "@/components/Header";
import Filme from "@/components/filme";

import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { api } from "@/service/api";

import Container from "@/components/Container";

import { formatarData } from "@/utils/mascaras";
import Message from "@/components/Message";


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
                const res = await api.get(`/filmes/${id}`)
                setFilme(res.data.data.attributes)
                console.log(res.data.data.attributes.titulo);
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
            <Header/>
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
                        src={filme.capa}
                        alt={filme.alt}
                        sinopse={filme.sinopse}
                        lancamento={filme.lancamento}
                    />
                </>

            )}

            <Container >

            </Container>


        </>
    )

}