import React from 'react'
import ActiveLastBreadcrumb from '../breadcrumbs'
import { breadcrumbDataUpdate } from './constants'

const UpdateCustomer = () => {
  return (
    <>
    <ActiveLastBreadcrumb breadcrumbData = {breadcrumbDataUpdate} />
    <div>UpdateCustomer</div>
    </>
  )
}

export default UpdateCustomer