import React, { useState, useEffect } from 'react'
import ActiveLastBreadcrumb from '../breadcrumbs'
import { breadcrumbData, invoiceData } from './constants'
import styles from "./billing.module.scss";
import { Container, Row, Col } from 'react-bootstrap'; 
import CustomPagination from '../../pages/pagination';
import InvoiceDisplayList from '../../pages/displayList/invoiceDisplayList';
import AddBoxIcon from '@mui/icons-material/AddBox'; 
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import Form from 'react-bootstrap/Form';
import CustomDrawer from '../../pages/drawer';

const SuperviseInvoice = () => {

  const [rowData, setRowData] = useState([] as any)
  const [currentData, setCurrentData] = useState([] as any)

  const [selectedData, setSelectedData] = useState(true)


  const filterData = (status: any) => {
    const data = invoiceData?.filter((item: any) => item.proformaInvoice === status);
    setSelectedData(status)
    setRowData(data)
  }

  useEffect(() => {
    if(invoiceData.length !== 0) {
      setRowData(invoiceData?.filter((item: any) => item.proformaInvoice === selectedData));
    }
  },[invoiceData])
  
  const handleCurentPaginationData = (currectData: any) => {
    setCurrentData(currectData); 
  }
  
  return (
    <>
    <ActiveLastBreadcrumb breadcrumbData = {breadcrumbData} />
    <Container className={styles.searchAndFilterWrapper}>
        <Row>
            <Col xs={12} md={3}>
              <div className={styles.searchWrapper}>
                <SearchIcon />
                <input type="text" name="search" placeholder='Name, Invoice, Budget' />
              </div>
            </Col>
            <Col xs={12} md={9} className={styles.fitlerWrapper}>
              <div className={styles.sortIcon}>
                  Sort by Date <SortIcon />
              </div>
              <Form.Select aria-label="Default select example">
                <option>Filter by Status</option>
                <option>All</option>
                <option>In Progress</option>
                <option>Completed</option>
                <option>Pending</option>
                <option>Confirmed</option>
                <option>Cancelled</option>
              </Form.Select>              
              <div className={styles.addButton}>
                <AddBoxIcon />
              </div>
            </Col>
        </Row>
    </Container>
    <Container className={styles.invoiceButtonsDataWrapper}>
        <Row>
            <div className={styles.itemButton}>
              <button onClick = {() => filterData(true)} className={ selectedData ? styles.active : styles.diactive } >Invoice</button>
              <button onClick = {() => filterData(false)} className={ !selectedData ? styles.active : styles.diactive }>Proforma Invoice</button>
            </div>
        </Row>
    </Container>
    <Container className={styles.invoiceDataWrapper}>
        <Row>
            <InvoiceDisplayList rowData = {currentData} />
        </Row>
    </Container>
    {
      <div className={`${styles.customerPaginationWrapper} ${rowData.length < 11 ? styles.customerPaginationVisibility : null }`}>
          <div>
              <label>{`${rowData.length} Entries Found`}</label>
          </div>
          <div>
              <CustomPagination itemsPerPage={10} offset={20} rowData = {rowData} handleCurentPaginationData = {handleCurentPaginationData} />
          </div>
      </div>
    }
 </>
  )
}

export default SuperviseInvoice