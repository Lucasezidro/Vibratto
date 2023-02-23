import React, { useState } from "react";
import styles from "./menu.module.scss";
import { FaMusic, FaMicrophone, FaGuitar, FaHeadphones } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

const Menu = () => {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Vibratto</h1>
      <div className={styles.responsiveMenu}>
        <button onClick={() => setShowResponsiveMenu(true)}>
          <AiOutlineMenu />
        </button>
      </div>

      {showResponsiveMenu && (
        <div className={styles.showMenu}>
          <button 
            className={styles.closeMenu}
            onClick={() => setShowResponsiveMenu(false)}
          >
            X
          </button>

          <ul>
            <li>
              <FaGuitar className={styles.icon} />
              <a href="/instrumentMusic">Instrumentos Musicais</a>
            </li>
            <li>
              <FaHeadphones className={styles.icon} />
              <a href="/recomendations">Recomendações</a>
            </li>
            <li>
              <FaMusic className={styles.icon} />
              <a href="/learn">Quero Aprender</a>
            </li>
            <li>
              <FaMicrophone className={styles.icon} />
              <a href="/artist">Artistas</a>
            </li>
          </ul>
        </div>
      )}

      <ul className={styles.menu}>
        <li>
          <FaGuitar className={styles.icon} />
          <a href="instrumentMusic">Instrumentos Musicais</a>
        </li>
        <li>
          <FaHeadphones className={styles.icon} />
          <a href="recomendations">Recomendações</a>
        </li>
        <li>
          <FaMusic className={styles.icon} />
          <a href="learn">Quero Aprender</a>
        </li>
        <li>
          <FaMicrophone className={styles.icon} />
          <a href="artist">Artistas</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
