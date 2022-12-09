import React from 'react'
import styles from './display-list.module.scss';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DownloadIcon from '@mui/icons-material/Download'; 
import moment from 'moment';
import VisibilityIcon from '@mui/icons-material/Visibility';

const InvoiceDisplayList = (props: any) => {

    console.log("props?.rowData", props?.rowData);
    
    return (
        <>
        <div className={styles.list_main_wrapper}>
        {
            props?.rowData?.map((item: any) => <div className={styles.display_wrapper} key={item.id}>
                <ul>
                    <li>
                        <label>#ID</label>
                        <span>{item.invoiceNO}</span>
                    </li>
                    <li>
                        <label>Date</label>
                        <span>{item.invoiceCreatedDate}</span>
                    </li>
                    <li>
                        <label>Customer Name</label>
                        <span>{item.customerName}</span>
                    </li>
                    <li>
                        <label>Budget / Cost</label>
                        <span>{item.amount}</span>
                    </li>
                    <li>
                        <label>Status</label>
                        <span>{item.selectLeadstatus === "inProgress" ? "In Progress" : item.selectLeadstatus === "new" ? "New" : item.selectLeadstatus === "pending" ? "Pending" : item.selectLeadstatus === "confirmed" ? "Confirmed" : item.selectLeadstatus === "completed" ? "Completed" : "Canceled"}</span>
                    </li>
                    <li className={styles.actionButtons}>
                        <BorderColorIcon />
                        <VisibilityIcon />
                        <DownloadIcon />
                        <DeleteForeverIcon />
                    </li>
                </ul>
            </div>)
        }
        </div>
        </>
      )
}

export default InvoiceDisplayList