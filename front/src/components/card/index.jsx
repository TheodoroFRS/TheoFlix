import Link from "next/link"
import styles from "./styles.module.css"


export default function Card({ id, titulo, src, alt, lancamento, ...props }) {

    return (
        <>
            <div className={styles.card} {...props} >
                <Link href={`/filmes/${id}`} >


                    <img className={styles.image} src={src} alt={alt} />

                    <h2 className={styles.cardTitulo}>{titulo}</h2>

                    <div className={styles.data}>
                        {/* <div>Lançamento: {lancamento}</div> */}

                    </div>
                </Link>


            </div>
        </>
    )

}