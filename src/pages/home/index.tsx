import React from 'react';
import styles from './style.module.scss'
import Menu from '../../components/menu';
import profilePhoto from '../../assets/LUCAS EZIDRO_Easy-Resize.com.jpg'

const Home = () => {
  return (
    <>
    <Menu />
    <div className={styles.container}>
      <div className={styles.userdata}>
        <div>
          <img src={profilePhoto} alt="profile-photo" />
        </div>

        <span className={styles.welcome}>Bem vindo Lucas!</span>
        <span className={styles.email}>lucasezidro7@gmail.com</span>
      </div>

      <div className={styles.login}>
        <button className={styles.createAccount}>Criar Conta</button>
        <button className={styles.signin}>Entrar</button>
      </div>
    </div>
    </>
  )
}

export default Home;