import Image from "next/image"
import styles from "./styles.module.css"

export default function Banner({texto,sub_titulo}) {
    return (
        <>
                <div className={styles.header_image}>
                    <p className={styles.header_title}>{texto}</p>
                    <p className={styles.header_title}>{sub_titulo}</p>
                </div>
            
        </>
    )
}