import React from 'react'
import { copyright } from '../../constants/global'
import styles from './footer.module.scss'

const Footer = () => {
  return (  
    <div className={styles.footer}>
        <p>{copyright.copyrightText}</p>
    </div>
  )
}

export default Footer