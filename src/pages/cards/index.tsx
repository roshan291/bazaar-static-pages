import React from 'react'
import styles from './cards.module.scss'


const CustomCards = (props: any) => {
  return (
    <div className={styles.cardWrapper}>
        {
          props?.data?.map((item: any) => <div key={item.id} className={styles.cardItem}>
              <h3>{item.title}</h3>
              <h2>{item.count}</h2>
          </div>)
        }
    </div>
  )
}

export default CustomCards;