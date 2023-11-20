import Container from "@/components/Container";
import Header from "@/components/Header";
import ListFilmes from "@/components/ListFilmes";
import Link from "next/link"
import styles from '@/styles/Home.module.css'
import Banner from "@/components/Banner";


export default function Home() {

    return (
        <>
            <Header/>
            <Banner texto={"Bem vindo(a)"} sub_titulo={"Explore suas séries favoritas"}/>
         
                <ListFilmes />
         

            <Container>
                
            </Container>
        </>
    )
}
