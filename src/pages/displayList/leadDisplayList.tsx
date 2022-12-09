import React from 'react'
import styles from './display-list.module.scss';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DownloadIcon from '@mui/icons-material/Download';
import moment from 'moment';

const DisplayList = (props: any) => {

    const handleView = (data: any) => {
        console.log("handleView", data)
        props?.setViewSingleItem(data)
    }
  return (
    <>
    <div className={styles.list_main_wrapper}>
    {
        props?.rowData?.map((item: any) => <div className={styles.display_wrapper} key={item.id}>
            <div className={styles.display_header}>
                <h5>{item.leadGeneratedNo} - {item.leadTitle}</h5>
            </div>
            <ul>
                <li>
                    <label>Requirements</label>
                    <span>Hotel Stay</span>
                </li>
                <li>
                    <label>Destination</label>
                    <span>{item.distination !== "" ? item.distination : "--"}</span>
                </li>
                <li>
                    <label>Adult</label>
                    <span>{item.noOfAdults !== "" ? item.noOfAdults : "--"}</span>
                </li>
                <li>
                    <label>Kid</label>
                    <span>{item.noOfKids !== "" ? item.noOfKids : "--"}</span>
                </li>
                <li>
                    <label>Budget / Cost</label>
                    <span>{item.budgetForTrip !== "" ? item.budgetForTrip  : "--" }</span>
                </li>
            
                <li>
                    <label>Status</label>
                    <span>{item.selectLeadstatus === "inProgress" ? "In Progress" : item.selectLeadstatus === "new" ? "New" : item.selectLeadstatus === "pending" ? "Pending" : item.selectLeadstatus === "confirmed" ? "Confirmed" : item.selectLeadstatus === "completed" ? "Completed" : "Canceled"}</span>
                </li>
                <li className={styles.actionButtons}>
                    <BorderColorIcon />
                    <VisibilityIcon  onClick={() => handleView(item)}/>
                    <DeleteForeverIcon />
                </li>
            </ul>
            <label className={styles.display_footer}>Trip : On {moment(item.startDate, "YYYY/MM/DD").format('DD/MM/YYYY')} | New Since (68 Days) | Managed By  {item.customerName} | {item.leadCreatedDate}</label>
        </div>)
    }
    </div>
    </>
  )
}

export default DisplayList

