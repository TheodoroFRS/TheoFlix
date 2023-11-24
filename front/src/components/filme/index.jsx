
import styles from "./styles.module.css"

export default function Filme({ titulo, src, alt, sinopse, lancamento, duracao, Palavras_chave, generos, classificacao,avaliacaoes_positivas,avaliacaoes_negativas, backimage, ...props }) {
    
    // console.log(Palavras_chave[2].name)


     function palavras(Palavras_chave) {
// for (let i = 0; i < Palavras_chave.length; i++) {

    
// }
     }
     
    return (
        <>
            <div className={styles.backimage} style={{ 'backgroundImage': `url(${src})` }}>
                <div className={styles.desfocar}>
                    <div className={styles.evento} {...props} >

                        <img className={styles.image} src={src} alt={alt} />
                        <div className={styles.conteudo}>

                            <div className={styles.titulo}>
                                <h1 className={styles.eventoTitulo}>{titulo}</h1>

                                <div className={styles.classificacao}>{classificacao}</div>
                            </div>


                            <div>Lançamento: {lancamento}</div>
                            <div>Dutação: {duracao}</div>

                           <div>Palavras-chave: {palavras(Palavras_chave)}</div>

                            <div>generos: {generos}</div>

                            <div>Avaliações:👍 {avaliacaoes_positivas} 👎{avaliacaoes_negativas}</div>

                            <h1 className={styles.eventoTitulo}>Sinopse</h1>
                            <div className={styles.sinopse}>{sinopse}</div>
                        </div>


                    </div >
                </div>
            </div>
        </>
    )

}