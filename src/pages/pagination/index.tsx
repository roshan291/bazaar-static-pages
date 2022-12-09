
import React, {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate'; 
import styles from "./pagination.module.scss"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const CustomPagination = (props: any) => {
 
    // props.handleCurentPaginationData(itemsSlice)

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = props?.itemsPerPage;

    useEffect(() => {
        handlePageRefresh(0)
      }, [
        props?.rowData
      ])

      const handlePageClick = (event: any) => {
        const newOffset = event.selected * itemsPerPage % props?.rowData?.length;
        handlePageRefresh(newOffset)
      };

      const handlePageRefresh = (newOffset: any) => {
        const endOffset = newOffset + itemsPerPage;
        setCurrentItems(props?.rowData?.slice(newOffset, endOffset));
        setPageCount(Math.ceil(props?.rowData?.length / itemsPerPage));
        props.handleCurentPaginationData(props?.rowData?.slice(newOffset, endOffset))
      }

    return (
    <div className={styles.pagtination_wrapper}>
        <ReactPaginate
            nextLabel={<KeyboardArrowRightIcon />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel={<KeyboardArrowLeftIcon />}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            // renderOnZeroPageCount=""
        />
    </div>
  )
}

export default CustomPagination