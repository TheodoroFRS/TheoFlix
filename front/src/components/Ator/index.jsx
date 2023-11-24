import Link from "next/link"
import styles from "./styles.module.css"


export default function Ator({ id, nome, src, alt, personagem, dublador, ...props }) {

    return (
        <>
            <div className={styles.card} {...props} >
                {/* <Link href={`/ator/${id}`} > */}

                <img className={styles.image} src={src} alt={alt} />

                <div className={styles.cardNome}> {nome}</div>
          
                <div className={styles.personagem}>{personagem}</div> 

                Brasil:
                <div className={styles.personagem}>{dublador}</div>

                    {/* </Link> */}
            </div>
        </>
    )

}