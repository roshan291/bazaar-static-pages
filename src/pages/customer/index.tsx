import React, {useState} from 'react'
import styles from "./customer.cards.module.scss"
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Col from 'react-bootstrap/Col';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';

const CustomerCards = (props: any) => {

  const [open, setOpen] = useState(false)
  const [openID, setOpenID] = useState("" as any)

  const handleViewOpen = (index: any) => {
    setOpenID(index)
    setOpen(!open);
  }
  return (
    <>
    {
        props?.superviseData?.map((item: any, index: any) => {
            const iconText = item.fname; 
            return <Col xs={12} md={3} key={index}>
            <div className={styles.cardWrpper} >
               <div className={styles.header}>
                   <h2 className={styles.icon}>{iconText.charAt(0)}</h2>
                   <h2 className={styles.title}>{item.fname} {item.lname}</h2>
               </div>
               <div className={styles.content}>
                   <ul>
                       <li><AddIcCallIcon /> {item.mobile}</li>
                       <li><MarkEmailUnreadIcon /> {item.email}</li>
                   </ul>
                   <div className={styles.viewMoreDetails}>
                       <BorderColorIcon /> <VisibilityIcon onClick = {() => handleViewOpen(index)} />  <DeleteForeverIcon />
                   </div>
               </div>
               {
                <div className={`${ openID === index ? styles.openModalActive : styles.openModal}`}>
                  <CloseIcon className={styles.closeIcon} onClick = {() => setOpenID("")}/>
                <ul>
                  <li>{item.fname} {item.lname}</li>
                  <li>{item.mobile}</li>
                  <li>{item.email}</li>
                  <li>{item.city}</li>
                  <li>{item.state}</li>
                  <li>{item.country}</li>
                  <li>{item.pincode}</li>  
                </ul>
               </div> 
               }
               
             </div>
           </Col>
        }
        )
    }
    </>
  )
}

export default CustomerCards