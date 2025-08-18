import React from 'react'
import styles from './styles.module.css'

const daysWeek = {
  0: { phrase: "Domingou relaxado 😴", image: "/cat-sunday.jpg" },
  1: { phrase: "Segundou na correria 😵", image: "/cat-monday.jpg" },
  2: { phrase: "Terçou na expectativa.", image: "/cat-tuesday.jpg" },
  3: { phrase: "Quartou na metade da semana ✨", image: "/cat-wednesday.jpg" },
  4: { phrase: "Quintou quase lá 🙌", image: "/cat-thursday.jpg" },
  5: { phrase: "SEEEEXXXTOOU BEBÊ! 🍻", image: "/cat-friday.jpg" },
  6: { phrase: "Sabadou na tranquilidade! 😎", image: "/cat-saturday.jpg" },
}

function Home() {
  const today = new Date()
  const dayWeek = today.getDay()
  const { phrase, image } = daysWeek[dayWeek]


  return (
    <>
      <h1 className={styles.titulo}>Ooooiiii! Você veio mesmo!</h1>
      <img className={styles.imagem} src='/cat-spying.jpg' alt='gatinho-espiando'></img>
      <h2 className={styles.subtitulo}>{phrase}</h2>
      <img className={styles.imagem} src={image} alt={`image-of-day`}></img>

      {/* <Input /> */}
      {/* <Button>Aoba</Button> */}
    </>
  )
}

export function Button(props) {
  return <button>{props.children}</button>
}

// export function Input() {
//     return <input type="text" />
// }

export default Home;