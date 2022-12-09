import React, { useEffect, useState } from 'react'
import {breadcrumbData} from './constants'
import ActiveLastBreadcrumb from '../breadcrumbs'
import styles from './dashboard.module.scss'
import CustomCards from '../../pages/cards'
import { leadStatus } from '../../constants/global'

const Dashboard = () => {

  const [data, setData] = useState([] as any)

  useEffect(() => {
    if(Object.keys(breadcrumbData).length) {
      setData(breadcrumbData)
    }
  }, [
    breadcrumbData
  ])
  

  // console.log("breadcrumbs Roshan", data);

  return (
    <div className={styles.dashboard}>
      <ActiveLastBreadcrumb breadcrumbData = {breadcrumbData} />
      {/* <ActiveLastBreadcrumb breadcrumbData = {breadcrumbData} /> */}

      <div className={styles.dashboard_items}>
        <h3 className={styles.title}>Lead Status</h3>
        <CustomCards data = {leadStatus} />
        <h3 className={styles.title}>Invoice Status</h3>
        <CustomCards data = {leadStatus} />
      </div>

    </div>
  )
}

export default Dashboard