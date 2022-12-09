import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DisplayList from '../../pages/displayList/leadDisplayList';
import ActiveLastBreadcrumb from '../breadcrumbs';
import { breadcrumbData, leadData } from './constants';
import styles from "./lead-board.module.scss";
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import Form from 'react-bootstrap/Form';
import CustomPagination from '../../pages/pagination';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import AddBoxIcon from '@mui/icons-material/AddBox'; 
import CustomDrawer from '../../pages/drawer';
import DeleteModal from '../../pages/delete-modal';
import CustomizedSnackbars from '../../pages/CustomizedSnackbar';

const SuperviseLead = () => {

  const [rowData, setRowData] = useState([] as any)
  const [currentData, setCurrentData] = useState([] as any)
  const [viewSignleItem, setViewSingleItem] = useState([] as any);

  useEffect(() => {
    if(leadData.length !== 0) {
      setRowData(leadData);
    }
  },[leadData])
  
  const handleCurentPaginationData = (currectData: any) => {
    setCurrentData(currectData); 
  }

  const isJourney = {
    ItinerayCustomisedView: false,
    leadView: true,
    ItinerayPreparedView: false,
  }

  // console.log("viewSignleItem", viewSignleItem);
  

  return (
    <>
    {/* <DeleteModal />
    <CustomizedSnackbars /> */}
    <ActiveLastBreadcrumb breadcrumbData = {breadcrumbData} />
    <div>
      <Container className={styles.searchAndFilterWrapper}>
          <Row>
              {/* <div className={styles.filterWrapper}>
                Filter
              </div> */}
              <Col xs={12} md={3}>
                <div className={styles.searchWrapper}>
                  <SearchIcon />
                  <input type="text" name="search" placeholder='Name, Destination, Budget' />
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
              <Form.Select aria-label="Default select example">
                 <option>Filter by Requirement</option>
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
      <Container className={styles.leadDataWrapper}>
          <Row>
              <DisplayList rowData = {currentData} setViewSingleItem = { setViewSingleItem } />
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
    </div>
    <CustomDrawer isJourney = {isJourney}  signleView = {viewSignleItem} />
    </>
  )
}

export default SuperviseLead