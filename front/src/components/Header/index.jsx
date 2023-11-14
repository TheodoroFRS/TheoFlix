import Link from "next/link"
import styles from "./styles.module.css"


export default function Header({ }) {
  // titulo, navbarBotao1, navbarBotao1Link, navbarBotao2, navbarBotao2Link
  //   navbarBotao1 = "Eventos"
  //   navbarBotao1Link = "/"
  //   navbarBotao2 = "Cadastrar evento"
  //   navbarBotao2Link = "/CadastrarEvento"



  return (
    <>
      <header>
        <div className={styles.header} >
          <div className={styles.titulo} >
            <Link href="/">
              <img className={styles.image} src="../img/TheoFlix.svg" alt="TheoFlix" />
            </Link>
          </div>
          
          {/* <nav className={styles.navbar}>
            <ul className={styles.ul}>
              <li><Link className={styles.navbar__botoes} href={`${navbarBotao1Link}`}>{navbarBotao1}</Link></li>
              <li><Link className={styles.navbar__botoes} href={`${navbarBotao2Link}`}>{navbarBotao2}</Link></li>

            </ul>
          </nav> */}
        </div>

      </header>

    </>

  )
}
