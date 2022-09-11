import React from 'react'
import styles from './Home.module.scss'
import Heading from './UI/Heading'
import Dog_main from "../img/dog_main.jpg"
import Categories from './Categories'

const Home = () => {
  return (
    <div className={styles.home__main}>
      <div className={styles.home__wrapper}>
        <div className={styles.home__banner}>
          <Heading text={"Не покупайте друга, найдите его у нас !"} />
          <img className={styles.home__img} src={Dog_main} alt="banner"  />
        </div>
      </div>
    </div>
  )
}

export default Home