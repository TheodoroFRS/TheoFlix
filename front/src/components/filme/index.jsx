
import styles from "./styles.module.css"

export default function Filme({ titulo, src, alt, sinopse, lancamento, backimage, ...props }) {

    return (
        <>
            <div className={styles.backimage} style={{ 'backgroundImage': `url(${src})` }}>
                <div className={styles.desfocar}>
                    <div className={styles.evento} {...props} >

                        <img className={styles.image} src={src} alt={alt} />
                        <div className={styles.conteudo}>
                            <h1 className={styles.eventoTitulo}>{titulo}</h1>

                            <div>Lançamento: {lancamento}</div>


                            <h1 className={styles.eventoTitulo}>Sinopse</h1>
                            <div className={styles.sinopse}>{sinopse}</div>
                        </div>


                    </div >
                </div>
            </div>
        </>
    )

}