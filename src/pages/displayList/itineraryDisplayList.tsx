import React from 'react'
import styles from './display-list.module.scss';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DownloadIcon from '@mui/icons-material/Download';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import moment from 'moment'; 
import Table from 'react-bootstrap/Table';

const ItineraryDisplayList = (props: any) => {

    const handleView = (data: any) => {
        console.log("handleView", data)
        props?.setViewSingleItem(data)
    }
    
  return (
    <>
    <div className={styles.list_main_wrapper}>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th># ID</th>
            <th>Created Date</th>
            <th>Itinerary Title</th>
            <th>Customer Name</th>
            <th>Mobile Number</th>
            <th>Budget / Cost</th>
            <th>Status</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                 props?.rowData?.map((item: any, index : any) => <tr className={styles.display_wrapper} key={item.id}>
                    <td>{item.itinerayNO}</td>
                    <td>{item.itinerayCreatedDate}</td>
                    <td>{item.itinerayTitle}</td>
                    <td>{item.customerName}</td>
                    <td>{item.mobile}</td>
                    <td>{item.budgetCost}</td>
                    <td>{item.selectLeadstatus === "inProgress" ? "In Progress" : item.selectLeadstatus === "new" ? "New" : item.selectLeadstatus === "pending" ? "Pending" : item.selectLeadstatus === "confirmed" ? "Confirmed" : item.selectLeadstatus === "completed" ? "Completed" : "Canceled"}</td>
                    <td>
                        <BorderColorIcon />
                        <VisibilityIcon onClick={() => handleView(item)} />
                        <DownloadIcon />
                        {/* <ContentPasteIcon /> */}
                        <ContentCopyIcon />
                        <DeleteForeverIcon />
                    </td>
                 </tr>)
            }
        </tbody>
        </Table>
      
    {
        // props?.rowData?.map((item: any) => <div className={styles.display_wrapper} key={item.id}>
        //     <ul>
        //         <li>
        //             <label>#ID</label>
        //             <span>{item.itinerayNO}</span>
        //         </li>
        //         <li>
        //             <label>Created Date</label>
        //             <span>{item.itinerayCreatedDate}</span>
        //         </li>
        //         <li>
        //             <label>Title</label>
        //             <span>{item.itinerayTitle}</span>
        //         </li>
        //         <li>
        //             <label>Customer Name</label>
        //             <span>{item.customerName}</span>
        //         </li>
        //         <li>
        //             <label>Mobile Number</label>
        //             <span>{item.mobile}</span>
        //         </li>
        //         <li>
        //             <label>Budget / Cost</label>
        //             <span>{item.budgetCost}</span>
        //         </li>
            
        //         <li>
        //             <label>Status</label>
        //             <span>{item.selectLeadstatus === "inProgress" ? "In Progress" : item.selectLeadstatus === "new" ? "New" : item.selectLeadstatus === "pending" ? "Pending" : item.selectLeadstatus === "confirmed" ? "Confirmed" : item.selectLeadstatus === "completed" ? "Completed" : "Canceled"}</span>
        //         </li>
        //         <li className={`${styles.actionButtons} ${styles.actionButtonsItinerary}`}>
        //             <BorderColorIcon />
        //             <VisibilityIcon onClick={() => handleView(item)} />
        //             <DownloadIcon />
        //             {/* <ContentPasteIcon /> */}
        //             <ContentCopyIcon />
        //             <DeleteForeverIcon />
        //         </li>
        //     </ul>
        // </div>)
    }
    </div>
   
    </>
  )
}

export default ItineraryDisplayList