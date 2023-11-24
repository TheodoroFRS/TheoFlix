import styles from "./styles.module.css"


export default function Titulo({ children }) {


  return (
    <>
      <div className={styles.container}>
      <p className={styles.titulo}> {children}</p>
      </div>

    </>

  )
}
