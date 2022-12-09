import moment from 'moment'
import React, { useEffect, useState } from 'react'
import styles from "./detailed-view.module.scss"
import DoneIcon from '@mui/icons-material/Done';

const LeadDetailedView = (props: any) => {

    const [data, setData] = useState([] as any)
    console.log("props?.signleView", props?.signleView?.length);

    useEffect(() => {
        if(props?.signleView?.length !== 0) {
            setData(props?.signleView)
        }
    }, [props?.signleView])

    console.log("data", data)
    const {
        leadTitle,
        customerName,
        getRequirementValue,
        typeOfHoliday, 
        dateANDtime, 
        pickUpPoint,
        dropPoint,
        noOfAdults,
        noOfKids,
        noOfInfants,
        groupTourPackageList,
        vehicleType,
        noOfRooms,
        startDate,
        endDate,
        checkIN,
        checkOUT,
        distination,
        noOfDays,
        typeOfVisa,
        coupleList,
        currencyType,
        budgetForTrip,
        requiredDocumentsList,
        leadCreatedDate,
        shortNote,
        selectLeadstatus,
        paymentmode,
        serviceAirfare,
        serviceInvernalTransport,
        serviceHotelStay,
        serviceSightseeing,
        serviceVisaFees,
        serviceGovtTax,
        serviceSurcharge,
        serviceCruiseStay,
        serviceFreeGoodies,
        serviceAllMeals,
        servicePassportFrees,
        serviceBreakfast,
        serviceTourManager,
        serviceMAP, 
    } = data
    
  return (
    <>
       {
            <div className={styles.viewLeadWrapper}>
                <div className={styles.viewLeadHeader}>
                    <div>
                        <span>Lead Title</span>
                        <label>{leadTitle}</label>
                    </div>
                    <div>
                        <span>Lead Creation Date</span>
                        <label>{leadCreatedDate}</label>
                    </div>
                    <div>
                        <span>Lead Status</span>
                        <label>{selectLeadstatus === "inProgress" ? "In Progress" : selectLeadstatus === "new" ? "New" : selectLeadstatus === "pending" ? "Pending" : selectLeadstatus === "confirmed" ? "Confirmed" : selectLeadstatus === "completed" ? "Completed" : "Canceled"}</label>
                    </div>
                    <div>
                        <span>Lead Requirements</span>
                        <label>{getRequirementValue === "fitTourPackage" ? "FIT (Customised) Tour Package" : getRequirementValue === "groupTourPackage" ? "Group Tour Package" : getRequirementValue === "hotelStay" ? "Hotel Stay" : getRequirementValue === "carService" ? "Cab Service / Pick Up & Drop" : getRequirementValue === "flights" ? "Flights" : getRequirementValue === "trainTickets" ? "Train Tickets" :  getRequirementValue === "forex" ? "Forex" : "Visa" }</label>
                    </div>
                </div>
                <div className={styles.viewLeadContent}>
                    <div className={styles.viewLeadLeftContent}>
                        <ul>
                            { 
                            customerName !== "" ? <li>
                                <span>Customer Name : </span>
                                <span>{customerName}</span>
                            </li> : null}
                            { typeOfHoliday !== "" ? <li>
                                <span>Type Of Holiday : </span>
                                <span>{typeOfHoliday}</span>
                            </li> : null}
                           { startDate !== "" ? <li>
                                <span>Start Date : </span>
                                <span>{moment(startDate).format("DD/MM/YYYY")}</span>
                            </li> : null }
                            { endDate !== "" ? <li>
                                <span>End Date : </span>
                                <span>{moment(endDate).format("DD/MM/YYYY")}</span>
                            </li> : null }
                            
                            {
                                paymentmode !== "" ? <li>
                                    <span>Payment Mode : </span>
                                    <span>{paymentmode === "cash" ? "Cash" : paymentmode === "cheque" ? "Cheque" : paymentmode === "neft" ? "RTGS / NEFT / IMPS" : "Payment Gateway"}</span>
                                </li> : null
                            }
                            { noOfInfants !== "" ? <li>
                                <span>No Of Infants : </span>
                                <span>{noOfInfants}</span>
                            </li> : null }
                             
                            { moment(dateANDtime).format("DD/MM/YYYY, HH:MM a") !== "Invalid date" ? <li>
                                <span>Date & Time : </span>
                                <span>{moment(dateANDtime).format("DD/MM/YYYY, HH:MM a")}</span>
                            </li> : null }
                            { pickUpPoint !== "" ? <li>
                                <span>Pick Up Point : </span>
                                <span>{pickUpPoint}</span>
                            </li> : null }
                            { dropPoint !== "" ? <li>
                                <span>Drop Point : </span>
                                <span>{dropPoint}</span>
                            </li> : null }
                            { noOfAdults !== "" ? <li>
                                <span>No Of Adults : </span>
                                <span>{noOfAdults}</span>
                            </li> : null }
                            { noOfKids !== "" ? <li>
                                <span>No Of Kids : </span>
                                <span>{noOfKids}</span>
                            </li>: null}
                            {groupTourPackageList !== "" ? <li>
                                <span>Group Tour Package List : </span>
                                <span>{groupTourPackageList}</span>
                            </li>: null}
                            { vehicleType !== "" ? <li>
                                <span>Vehicle Type : </span>
                                <span>{vehicleType}</span>
                            </li>: null }
                            { noOfRooms !== "" ? <li>
                                <span>No Of Rooms : </span>
                                <span>{noOfRooms}</span>
                            </li>: null }
                            { moment(checkIN).format("DD/MM/YYYY") !== "Invalid date" ? <li>
                                <span>Check-in : </span>
                                <span>{moment(checkIN).format("DD/MM/YYYY")}</span>
                            </li> : null }
                            { moment(checkOUT).format("DD/MM/YYYY") !== "Invalid date" ? <li>
                                <span>Check-out : </span>
                                <span>{moment(checkOUT).format("DD/MM/YYYY")}</span>
                            </li> : null }
                           { distination !== "" ? <li>
                                <span>Distination : </span>
                                <span>{distination}</span>
                            </li>: null }
                            { noOfDays !== "" ? <li>
                                <span>No Of Days : </span>
                                <span>{noOfDays}</span>
                            </li> : null }
                            { typeOfVisa !== "" ? <li>
                                <span>Type Of Visa : </span>
                                <span>{typeOfVisa}</span>
                            </li> : null}
                            { coupleList !== "" ? <li>
                                <span>Couple list : </span>
                                <span>{coupleList}</span>
                            </li>: null }
                            { currencyType !== "" ? <li>
                                <span>Currency Type : </span>
                                <span>{currencyType}</span>
                            </li> : null }
                            { requiredDocumentsList !== "" ? <li>
                                <span>Required documents list : </span>
                                <span>{requiredDocumentsList}</span>
                            </li> : null }
                           { budgetForTrip !== "" ? <li>
                                <span>Budget For Trip : </span>
                                <span>{budgetForTrip}</span>
                            </li> : null }
                        </ul>
                    </div>
                </div>
                <div className={styles.selectedServicesWrapper}>
                    <ul>
                        { serviceAirfare && <li><DoneIcon /> Airfare </li>}
                        { serviceInvernalTransport && <li><DoneIcon /> Internal Transportation </li>}
                        { serviceHotelStay && <li><DoneIcon /> Hotel Stay </li>}
                        { serviceSightseeing && <li><DoneIcon /> Sightseeing </li>}
                        { serviceVisaFees && <li><DoneIcon /> Visa Fees </li>}
                        { serviceGovtTax && <li><DoneIcon /> Government Tax </li>}
                        { serviceSurcharge && <li><DoneIcon /> Surcharge </li>}
                        { serviceCruiseStay && <li><DoneIcon /> Cruise Stay </li>}
                        { serviceFreeGoodies && <li><DoneIcon /> Free Goodies </li>}
                        { serviceAllMeals && <li><DoneIcon /> APAI - Stay &amp; All Meals </li>}
                        { servicePassportFrees && <li><DoneIcon /> Passport Fees </li>}
                        { serviceBreakfast && <li><DoneIcon /> CP - Stay &amp; Breakfast </li>}
                        { serviceTourManager && <li><DoneIcon /> Tour Manager </li>}
                        { serviceMAP && <li><DoneIcon /> MAP - Stay, Breakfast &amp; Dinner </li>}
                    </ul>
                </div>
                {
                    shortNote !== 0 && <div className={styles.shortNoteWrapper}>
                    <ul>
                            <li>
                                <span>Short Note : </span>
                                <span>{shortNote}</span>
                            </li>
                    </ul>
                    </div>
                }
               
            </div>
        }
    </>
  )
}

export default LeadDetailedView