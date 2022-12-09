import React, {useState, useEffect} from 'react'
import styles from "./detailed-view.module.scss"
import Table from 'react-bootstrap/Table';

const ItineraryDetailedView = (props: any) => {

  const [data, setData] = useState([] as any)
    console.log("props?.signleView", props?.signleView?.length);

    useEffect(() => {
        if(props?.signleView?.length !== 0) {
            setData(props?.signleView)
        }
    }, [props?.signleView])

    const {
      itinerayTitle,
      destination,
      typeOfHoliday,
      adults,
      child,
      startDate,
      endDate,
      nights,
      travellers,
      budgetCost,
      costFor,
      currency,
      welcomeNote,
      customerName,
      email,
      mobile,
      address,
      country,
      state,
      city,
      pincode,
      birthDate,
      anniversaryDate,
      customerNote,
      inclusion,
      exclusion,
      thankYouNote,
      cost,
      terms,
      cancellation,
      tips,
      visaInformation,
      status,
  } = data;

  return (
    <>
    <br />
    {/* */}
      <div className={styles.itinerary_single_wrapper}>
        {/* <ul>
          <li><label className={styles.itinerary_single_wrapper_title}>Summary</label></li>
          <li><label>Itinerary Title : </label><span>{itinerayTitle}</span></li>
          <li><label>Destination : </label><span>{destination}</span></li>
          <li><label>Type of Holidays  : </label><span>{typeOfHoliday}</span></li>
          <li><label>Select Cover Image  : </label><span>{itinerayTitle}</span></li>
          <li><label>Adults : </label><span>{adults}</span></li>
          <li><label>Child : </label><span>{child}</span></li>
          <li><label>Start Date : </label><span>{startDate}</span></li>
          <li><label>End Date : </label><span>{endDate}</span></li>
          <li><label>Nights : </label><span>{nights}</span></li>
          <li><label>Travellers : </label><span>{travellers}</span></li>
          <li><label>Budget/Cost : </label><span>{budgetCost}</span></li>
          <li><label>Cost For : </label><span>{costFor}</span></li>
          <li><label>Currency : </label><span>{currency}</span></li>
          <li><label>Tour Cost Cover : </label><span>{itinerayTitle}</span></li>
          <li><label>Welcome Note : </label><span>{welcomeNote}</span></li>
          <li><label className={styles.itinerary_single_wrapper_title}>Customer Information</label></li>
          <li><label>Customer Name : </label><span>{customerName}</span></li>
          <li><label>Email ID : </label><span>{email}</span></li>
          <li><label>Mobile No : </label><span>{mobile}</span></li>
          <li><label>Address : </label><span>{address}</span></li>
          <li><label>Country : </label><span>{country}</span></li>
          <li><label>State : </label><span>{state}</span></li>
          <li><label>City : </label><span>{city}</span></li>
          <li><label>Postal Code : </label><span>{pincode}</span></li>
          <li><label>Birth Date : </label><span>{birthDate}</span></li>
          <li><label>Anniversary Date : </label><span>{anniversaryDate}</span></li>
          <li><label>Note : </label><span>{customerNote}</span></li>
          <li><label className={styles.itinerary_single_wrapper_title}>Day Wise Plan</label></li>
          <li><label className={styles.itinerary_single_wrapper_title}>Inclusion / Exclusion</label></li>
          <li><label>Inclusion : </label><span>{inclusion}</span></li>
          <li><label>Exclusion : </label><span>{exclusion}</span></li>
          <li><label className={styles.itinerary_single_wrapper_title}>Cost</label></li>
          <li><label>Cost : </label><span>{cost}</span></li>
          <li><label>Terms & Conditions : </label><span>{terms}</span></li>
          <li><label>Cancellation : </label><span>{cancellation}</span></li>
          <li><label className={styles.itinerary_single_wrapper_title}>Tips</label></li>
          <li><label>Tips : </label><span>{tips}</span></li>
          <li><label>Other / Visa Information : </label><span>{visaInformation}</span></li>
          <li><label className={styles.itinerary_single_wrapper_title}>Thank you</label></li>
          <li><label>Thank You Note : </label></li>
          <li><label>Status : </label><span>{status}</span></li>
        </ul> */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Summary</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Itinerary Title</td>
              <td>{itinerayTitle}</td>
            </tr>
            <tr>
              <td>Destination</td>
              <td>{destination}</td>
            </tr>
            <tr>
              <td>Type of Holidays</td>
              <td>{typeOfHoliday}</td>
            </tr>
            <tr>
              <td>Select Cover Image</td>
              <td>Jacob</td>
            </tr>
            <tr>
              <td>Adults</td>
              <td>{adults}</td>
            </tr>
            <tr>
              <td>Child</td>
              <td>{child}</td>
            </tr>
            <tr>
              <td>Start Date</td>
              <td>{startDate}</td>
            </tr>
            <tr>
              <td>End Date</td>
              <td>{endDate}</td>
            </tr>
            <tr>
              <td>Nights</td>
              <td>{nights}</td>
            </tr>
            <tr>
              <td>Travellers</td>
              <td>{travellers}</td>
            </tr>
            <tr>
              <td>Budget/Cost</td>
              <td>{budgetCost}</td>
            </tr>
            <tr>
              <td>Cost For</td>
              <td>{costFor}</td>
            </tr>
            <tr>
              <td>Currency</td>
              <td>{currency}</td>
            </tr>

            <tr>
              <td>Tour Cost Cover</td>
              <td>{"Tour cost"}</td>
            </tr>
            <tr>
              <td>Welcome Note</td>
              <td>{welcomeNote}</td>
            </tr>
            <tr>
              <th>Customer Information</th>
              <th></th>
            </tr>
            <tr>
              <td>Customer Name</td>
              <td>{customerName}</td>
            </tr>
            <tr>
              <td>Email ID</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>Mobile No</td>
              <td>{mobile}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{address}</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>{country}</td>
            </tr>
            <tr>
              <td>State</td>
              <td>{state}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{city}</td>
            </tr>
            <tr>
              <td>Postal Code</td>
              <td>{pincode}</td>
            </tr>
            <tr>
              <td>Birth Date</td>
              <td>{birthDate}</td>
            </tr>
            <tr>
              <td>Anniversary Date</td>
              <td>{anniversaryDate}</td>
            </tr>
            <tr>
              <td>Note</td>
              <td>{customerNote}</td>
            </tr>
            <tr>
              <th>Day Wise Plan</th>
              <th></th>
            </tr>
            <tr>
              <th>Inclusion / Exclusion</th>
              <th></th>
            </tr>
            <tr>
              <td>Inclusion</td>
              <td>{inclusion}</td>
            </tr>
            <tr>
              <td>Exclusion</td>
              <td>{exclusion}</td>
            </tr>
            <tr>
              <th >Cost</th>
              <th></th>
            </tr>
            <tr>
              <td>Cost</td>
              <td>{cost}</td>
            </tr>
            <tr>
              <td>Terms & Conditions</td>
              <td>{terms}</td>
            </tr>
            <tr>
              <td>Cancellation</td>
              <td>{cancellation}</td>
            </tr>
            <tr>
              <th>Tips</th>
              <th></th>
            </tr>
            <tr>
              <td>Tips</td>
              <td>{tips}</td>
            </tr>
            <tr>
              <td>Other / Visa Information</td>
              <td>{visaInformation}</td>
            </tr>
            <tr>
              <th>Thank you</th>
              <th></th>
            </tr>
            <tr>
              <td>Thank You Note</td>
              <td>{thankYouNote}</td>
            </tr>
          </tbody>
        </Table>
      </div>
     
     
  

 
    </>
  )
}

export default ItineraryDetailedView