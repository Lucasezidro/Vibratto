import React from 'react';
import styles from './style.module.scss'

interface CardProps {
  title: string
  description: string
  children?: React.ReactNode
  href: string
  shadow?: string
  linkColor: string
}

const CardHome = (props: CardProps) => {
  return (
    <div className={styles.card} style={{ boxShadow: `1px 2px 5px ${props.shadow}` }}>
      <div className={styles.title}>
        <strong>{props.title}</strong> 
        
        <span className={styles.icon}>
          {props.children}
        </span>
      </div>

      <div className={styles.description}>
        <span>{props.description}</span>

        <a href={props.href} style={{ color: props.linkColor }}>Saiba Mais</a>
      </div>
    </div>
  )
}

export default CardHome;
