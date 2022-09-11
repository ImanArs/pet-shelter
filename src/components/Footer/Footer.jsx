import React from 'react'
import styles from './Footer.module.scss'
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer_left}> <p>все права защищены</p></div>
        <div className={styles.footer_center}>
        <p>ПОМОГИ СОБАКАМ – РАССКАЖИ О НАС ДРУЗЬЯМ!</p>
          <ul>
            <li>.</li>
            <li>.</li>
            <li>.</li>
            <li>.</li>
          </ul>
        </div>
        <div className={styles.footer_right}>
          <button>стать волонтером</button>
        </div>
      </div>
    </div>
  )
}

export default Footer