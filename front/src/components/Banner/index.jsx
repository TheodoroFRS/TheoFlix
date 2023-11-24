import Image from "next/image"
import styles from "./styles.module.css"

export default function Banner({ texto, sub_titulo, imagem }) {
    return (
        <>
        <div className={styles.image} style={{ 'backgroundImage': `url(${imagem})` }}>
            <div className={styles.header}>
                <div className={styles.container}>
                    <p className={styles.header_title}>{texto}</p>
                    <p className={styles.header_title}>{sub_titulo}</p>
                    <div className={styles.busca}>
                        <input type="text" placeholder="Buscar por uma série..." />
                        <button>Buscar</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}