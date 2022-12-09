import React from 'react'
import styles from './breadcrumbs.module.scss'
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@mui/material';

const ActiveLastBreadcrumb = (props: any) => {
  return (
    <div className={styles.breadcrumbs}>
      <div className={styles.breadcrumbTitle}>
          <h2>{props?.breadcrumbData[0]?.title}</h2>
      </div>
      <div className={styles.breadcrumbsItems}>
        <Breadcrumbs>
          {
            props?.breadcrumbData?.map((item: any) => item.links.map((list: any) => <Link to = {list.link}>{list.urlTitle}</Link> ))
          }
        </Breadcrumbs>
      </div>

    </div>
  )
}

export default ActiveLastBreadcrumb