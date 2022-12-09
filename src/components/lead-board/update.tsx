import React from 'react'
import ActiveLastBreadcrumb from '../breadcrumbs'
import { breadcrumbDataUpdate } from './constants'

const UpdateLead = () => {
  return (
    <>
    <ActiveLastBreadcrumb breadcrumbData = {breadcrumbDataUpdate} />
   </>
  )
}

export default UpdateLead