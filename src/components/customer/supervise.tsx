import React, {useEffect, useState} from 'react'
import CustomerCards from '../../pages/customer'
import ActiveLastBreadcrumb from '../breadcrumbs'
import { breadcrumbData, superviseData } from './constants'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./customer.module.scss"
import CustomPagination from '../../pages/pagination';

const SuperviseCustomer = () => {

  const [rowData, setRowData] = useState([] as any)
  const [currentData, setCurrentData] = useState([] as any)

  useEffect(() => {
    if(superviseData.length !== 0) {
      setRowData(superviseData);
    }
  },[superviseData])

  const handleCurentPaginationData = (currectData: any) => {
    setCurrentData(currectData); 
  }

  return (
    <>
    <ActiveLastBreadcrumb breadcrumbData = {breadcrumbData} />
    <div className={styles.superviseCustomerWrapper}>
      <Container>
        <Row>
          <CustomerCards superviseData = {currentData}/>
        </Row>
      </Container>
      {
            <div className={`${styles.customerPaginationWrapper} ${rowData.length < 10 ? styles.customerPaginationVisibility : null }`}>
                <div>
                    <label>{`${rowData.length} Entries Found`}</label>
                </div>
                <div>
                    <CustomPagination itemsPerPage={12} offset={20} rowData = {rowData} handleCurentPaginationData = {handleCurentPaginationData} />
                </div>
                </div>
        }
 
    </div>
    </>
  )
}

export default SuperviseCustomer