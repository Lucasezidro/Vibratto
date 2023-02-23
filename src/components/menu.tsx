import React from 'react';
import styles from './menu.module.scss'
import { FaMusic, FaMicrophone, FaGuitar, FaHeadphones } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'

const Menu: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Vibratto</h1>
      <div className={styles.responsiveMenu}>
        <button>
          <AiOutlineMenu />
        </button>
      </div>

      <ul className={styles.menu}>
        <li>
          <FaGuitar className={styles.icon} />
          <a href="">Instrumentos Musicais</a>
        </li>
        <li>
          <FaHeadphones className={styles.icon} />
          <a href="">Recomendações</a>
        </li>
        <li>
          <FaMusic className={styles.icon} />
          <a href="">Quero Aprender</a>
        </li>
        <li>
          <FaMicrophone className={styles.icon} />
          <a href="">Artistas</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu;