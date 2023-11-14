import { useEffect, useState } from "react"

import styles from "./styles.module.css"


export default function Message({ Texto, ativo, error, success }) { //ativo,

  const allStyle = {
    ...(success && { backgroundColor: 'var(--cor-success)' }),
    ...(error && { backgroundColor: 'var(--cor-error)' })

  };
  return (
    <>
      {ativo === true ? (

        <>
          <div className={styles.container}>
            <div className={styles.caixa} style={allStyle}>
              <p>{Texto}</p>
            </div>
          </div>
        </>
      ) : (

        <>

        </>


      )}



    </>
  )
}
