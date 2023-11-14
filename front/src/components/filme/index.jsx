
import styles from "./styles.module.css"

export default function Filme({ titulo, src, alt, sinopse, lancamento, ...props }) {

    return (
        <>
            <div className={styles.evento} {...props} >

                <img className={styles.image} src={src} alt={alt} />
                <div className={styles.conteudo}>
                    <h1 className={styles.eventoTitulo}>{titulo}</h1>

                    <div>Lançamento: {lancamento}</div>


                    <h1 className={styles.eventoTitulo}>Sinopse</h1>
                    {sinopse}
                </div>


            </div >
        </>
    )

}