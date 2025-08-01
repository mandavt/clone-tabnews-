import React from 'react'
import styles from './styles.module.css'

function Home() {

return <>
        <h1 className={styles.titulo}>Ooooiiii! Você veio mesmo!</h1>
        <img className={styles.imagem} src='/gatinho-espiando.jpg' alt='gatinho-espiando'></img>
        <h2 className={styles.subtitulo}>SEEEEXXXTOOU BEBÊ!</h2>
        <img className={styles.imagem} src='/gatinho-pose.jpg' alt='gatinho-fazendo-pose'></img>

        {/* <Input /> */}
        {/* <Button>Aoba</Button> */}
    </>

}

export function Button(props) {
    return <button>{props.children}</button>
}

// export function Input() {
//     return <input type="text" />
// }

export default Home;