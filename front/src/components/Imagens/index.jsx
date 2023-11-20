import styles from "./styles.module.css"


export default function Imagens({ src, alt, ...props }) {

    return (
        <>
            <div className={styles.card} {...props} >
           
                    <img className={styles.image} src={src} alt={alt} />

            </div>
        </>
    )

}