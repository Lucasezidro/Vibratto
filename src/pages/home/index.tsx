import React from 'react';
import styles from './style.module.scss'
import Menu from '../../components/menu';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Menu />
    </div>
  )
}

export default Home;