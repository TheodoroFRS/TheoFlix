import { useEffect, useState } from "react";
import Card from "../card";
import styles from "./styles.module.css"
import axios from "axios";
import { api } from "@/service/api";
// import Message from "@/components/message";
import Message from "../Message";
import Container from "../Container";
import { formatarData } from "@/utils/mascaras";
import { useRouter } from "next/router";
import Banner from "../Banner";

export default function ListFilmes() {

    const [filmes, setFilmes] = useState([])


    //  Estado para abrir e fechar o o message
    const [message, setMessage] = useState(false);

    const router = useRouter()

    async function getEventos() {
        try {
            const res = await api.get(`/filmes?populate=*`)
            setFilmes(res.data.data)
            console.log("get",res.data.data);
            // .then(resultados => setEventos(resultados.data))
            setMessage(false)

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
                <Message
                    Texto="Nenhum filme encontrado!"
                    ativo={message}
                    error
                />

            <div className={styles.listcard}>

                    <>
                        {filmes?.map(document =>
                            <Card
                                key={document.id}
                                id={document.id}
                                titulo={document.attributes.titulo}
                                src={"http://localhost:1337"+document.attributes.Capa.data.attributes.url} 
                                alt={document.attributes.alt}
                                //sinopse={document.attributes.sinopse}
                                //lancamento={document.attributes.lancamento}
                             
                            />
                        )}

                    </>

            </div>
        </>
    )

}