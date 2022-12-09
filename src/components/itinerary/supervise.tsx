import React, {useState, useEffect} from 'react'
import ItineraryDisplayList from '../../pages/displayList/itineraryDisplayList'
import CustomDrawer from '../../pages/drawer'
import ActiveLastBreadcrumb from '../breadcrumbs'
import { breadcrumbData, itinerayData } from './constatnts'
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import Form from 'react-bootstrap/Form';
import CustomPagination from '../../pages/pagination';
import styles from "./itinerary.module.scss"
import { Container, Row, Col } from 'react-bootstrap'
import AddBoxIcon from '@mui/icons-material/AddBox'; 

const CustomisedItinerary = () => {

  const [rowData, setRowData] = useState([] as any)
  const [currentData, setCurrentData] = useState([] as any)
  const [viewSignleItem, setViewSingleItem] = useState([] as any);

  useEffect(() => {
    if(itinerayData.length !== 0) {
      setRowData(itinerayData);
    }
  },[itinerayData])
  
  const handleCurentPaginationData = (currectData: any) => {
    setCurrentData(currectData); 
  }


  const isJourney = {
    ItinerayCustomisedView: true,
    ItinerayPreparedView: false,
    leadView: false
  }

  console.log("currentData", currentData, rowData);
  
  return (
    <>
    <ActiveLastBreadcrumb breadcrumbData = {breadcrumbData} />
    <CustomDrawer isJourney = {isJourney} signleView = {viewSignleItem} />
    <div>
      <Container className={styles.searchAndFilterWrapper}>
          <Row>
              {/* <div className={styles.filterWrapper}>
                Filter
              </div> */}
              <Col xs={12} md={3}>
                <div className={styles.searchWrapper}>
                  <SearchIcon />
                  <input type="text" name="search" placeholder='ID,  Title,  Customer,  Name,  Budget...' />
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
              {/* <Form.Select aria-label="Default select example">
                 <option>Filter by Requirement</option>
                  <option>All</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                  <option>Pending</option>
                  <option>Confirmed</option>
                  <option>Cancelled</option>
              </Form.Select> */}
               
                <div className={styles.addButton}>
                  <AddBoxIcon />
                </div>
              </Col>
          </Row>
      </Container>
      <Container className={styles.leadDataWrapper}>
          <Row>
            <ItineraryDisplayList rowData = {currentData} setViewSingleItem = { setViewSingleItem } />
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
    </>
  )
}

export default CustomisedItinerary