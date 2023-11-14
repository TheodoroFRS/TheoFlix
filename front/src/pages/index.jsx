import Container from "@/components/Container";
import Header from "@/components/Header";
import ListFilmes from "@/components/ListFilmes";
import Link from "next/link"
import styles from '@/styles/Home.module.css'


export default function Home() {

    return (
        <>
            <Header/>
          
            <Container>
                <ListFilmes />
            </Container>

            <Container>
                
            </Container>
        </>
    )
}
