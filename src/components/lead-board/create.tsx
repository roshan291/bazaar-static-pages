import React, {useCallback, useEffect, useState} from 'react'
import ActiveLastBreadcrumb from '../breadcrumbs'
import { useNavigate } from "react-router-dom";
import moment from 'moment';
import { breadcrumbDataCreate } from './constants';
import styles from "./lead-board.module.scss";
import { usersDetails } from '../../constants/global';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const CreateLead = () => {

  const history = useNavigate();
  const [createLead, setCreateLead] = useState({
    leadTitle: "",
    paymentmode: "",
    customerName: "",
    getRequirementValue: "",
    noOfInfants :"",
    typeOfHoliday:"", 
    dateANDtime: "", 
    pickUpPoint: "",
    dropPoint: "",
    noOfAdults: "",
    noOfKids: "",
    groupTourPackageList :"",
    vehicleType :"",
    noOfRooms :"",
    startDate :"",
    endDate :"",
    checkIN :"",
    checkOUT :"",
    distination :"",
    noOfDays :"",
    typeOfVisa :"",
    coupleList: "",
    currencyType: "",
    budgetForTrip: "",
    requiredDocumentsList: "",
    shortNote: "",
    selectLeadstatus: "",
    leadGeneratedNo: `HB${moment().format("YYMMhhmm")}`,
    leadCreatedDate: moment().format("MMMM Do YYYY, h:mm:ss a"),
    serviceAirfare: "",
    serviceInvernalTransport: "",
    serviceHotelStay: "",
    serviceSightseeing: "",
    serviceVisaFees: "",
    serviceGovtTax: "",
    serviceSurcharge: "",
    serviceCruiseStay: "",
    serviceFreeGoodies: "",
    serviceAllMeals: "",
    servicePassportFrees: "",
    serviceBreakfast: "",
    serviceTourManager: "",
    serviceMAP: "",
})

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
} = createLead;

const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

const onSubmit = async (e: any) => {}
const handleLeadChange = (e: any) => {}

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

console.log("RR", yyyy + "/" + dd + "/" + mm );

  const handleOnChange = (e: any) => {
      const target = e.target;

      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name
      setCreateLead(
          // {...invoice, [e.target.name]: e.target.value}
          {...createLead, [name]: value}
      )
  }

  console.log("getRequirementValue", getRequirementValue);

  return (
    <>
     <ActiveLastBreadcrumb breadcrumbData = {breadcrumbDataCreate} />
     <div className={styles.leadFormWrapper} >
     <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom001">
            <Form.Label>Lead Title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Please enter lead title"
            />
          </Form.Group>
        </Row>
        <div className={styles.line_devider}></div>
        <h5 className={styles.subtitle}>Customer Details</h5>
        <Row className="mb-3">
          <Form.Label>Select Customer</Form.Label>
            <Form.Group as={Col} md="4" controlId="validationCustom002">
            <Form.Select required>
              <option value="">Select customer</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="2">
          <Button type="button" className={styles.defaultButtonAddNewCustomer}>Add New Customer</Button>
          </Form.Group>
        </Row>
        <div className={styles.line_devider}></div>
        <Row className="mb-3">
          <Form.Label>Select Requirement</Form.Label>
            <Form.Group as={Col} md="4" controlId="validationCustom003">
            <Form.Select required onChange={handleOnChange}  value={getRequirementValue} name="getRequirementValue" >
                <option value="" selected>Please select</option>
                <option value="fitTourPackage">FIT (Customised) Tour Package</option>
                <option value="groupTourPackage">Group Tour Package</option>
                <option value="hotelStay">Hotel Stay</option>
                <option value="carService">Cab Service / Pick Up & Drop</option>
                {/* <option value="flights">Flights</option>
                <option value="trainTickets">Train Tickets</option> */}
                <option value="forex">Forex</option>
                <option value="visa">Visa</option>
            </Form.Select>
          </Form.Group>
        </Row>
         

        {getRequirementValue === "fitTourPackage" ? <Row className={styles.requirement_wrapper}>
            <h6>FIT (Customised) Tour Package</h6>
            <div className={styles.line_devider_inside}></div>
            <div className={styles.requirement_content}>
            <Row className="mb-12">
              <Form.Group as={Col} md="3" controlId="validationCustom01">
                <Form.Label>Type of Holiday</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                />
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom01">
                <Form.Label>No of Adults</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="0"
                />
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom01">
                <Form.Label>No of Kids</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="0"
                />
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom01">
                <Form.Label>No Of Infants (Below 2 Years)</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="0"
                />
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationCustom01">
              <br />
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="First name"
                />
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom01">
              <br />
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="First name"
                />
              </Form.Group>
              
              <Form.Group as={Col} md="6" controlId="validationCustom01">
              <br />
                <Form.Label>Destination</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                />
              </Form.Group>
            </Row>
            <br />
            <h6>Budget/Cost</h6>
            <div className={styles.line_devider_inside}></div>
            <Row className="mb-12">
              <br />
              
                <Form.Group as={Col} md="3">
                  <Form.Label>Per Person/Couple</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First name"
                  />
                </Form.Group>
                <Form.Group as={Col} md="3">
                  <Form.Label>Currency</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First name"
                  />
                </Form.Group>
                <Form.Group as={Col} md="3">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control 
                    type="number"
                    placeholder="First name"
                  />
                </Form.Group>
                <Form.Group as={Col} md="3">
                  <Form.Label>Payment Mode</Form.Label>
                  <Form.Control 
                    type="text"
                    placeholder="First name"
                  />
                </Form.Group>
               
            </Row>
            </div>
        </Row> : null}
        {
          getRequirementValue === "hotelStay" ? <Row className={styles.requirement_wrapper}>
            <h6>Hotel Stay Details</h6>
            <div className={styles.line_devider_inside}></div>
            <div className={styles.requirement_content}>
              <Row className="mb-12">
                 <Form.Group as={Col} md="3" controlId="validationCustom001">
                    <Form.Label>No of Rooms</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="0"
                    />
                  </Form.Group>
                  
                  
                  <Form.Group as={Col} md="3" controlId="validationCustom001">
                    <Form.Label>No of Adults</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="0"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom001">
                   
                    <Form.Label>No of Kids</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="0"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom001">
                  
                    <Form.Label>No Of Infants (Below 2 Years)</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="0"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom001">
                  <br />
                      <Form.Label>Check-In</Form.Label>
                      <Form.Control
                        required
                        type="date" 
                      />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom001">
                  <br />
                      <Form.Label>Check-Out</Form.Label>
                      <Form.Control
                        required
                        type="date" 
                      />
                  </Form.Group>
                  
                  <Form.Group as={Col} md="3" controlId="validationCustom001">
                  <br />
                    <Form.Label>Destination</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="0"
                    />
                  </Form.Group>
              </Row>
              <br />
              <h6>Budget/Cost</h6>
              <div className={styles.line_devider_inside}></div>
              <Row className="mb-12">
              <br />
              
                <Form.Group as={Col} md="3">
                  <Form.Label>Per Person/Couple</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First name"
                  />
                </Form.Group>
                <Form.Group as={Col} md="3">
                  <Form.Label>Currency</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First name"
                  />
                </Form.Group>
                <Form.Group as={Col} md="3">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control 
                    type="number"
                    placeholder="First name"
                  />
                </Form.Group>
                <Form.Group as={Col} md="3">
                  <Form.Label>Payment Mode</Form.Label>
                  <Form.Control 
                    type="text"
                    placeholder="First name"
                  />
                </Form.Group>
              </Row>
            </div>
          </Row> : null
        }
        {
          getRequirementValue === "groupTourPackage" ? <Row className={styles.requirement_wrapper}>
            <h6>Group Tour Package Details</h6>
            <div className={styles.line_devider_inside}></div>
            <div className={styles.requirement_content}>
              <Row className="mb-12">
              <Form.Group as={Col} md="3" controlId="validationCustom001">
                    <Form.Label>Type of Holiday</Form.Label>
                    <Form.Select required>
                      <option value="">Select customer</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom001">
                    <Form.Label>No of Adults</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="0"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom001">
                   
                    <Form.Label>No of Kids</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="0"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom001">
                  
                    <Form.Label>No Of Infants (Below 2 Years)</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="0"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom001">
                  <br />
                      <Form.Label>Start Date</Form.Label>
                      <Form.Control
                        required
                        type="date" 
                      />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom001">
                  <br />
                      <Form.Label>End Date</Form.Label>
                      <Form.Control
                        required
                        type="date" 
                      />
                  </Form.Group>
                  
                  <Form.Group as={Col} md="3" controlId="validationCustom001">
                  <br />
                    <Form.Label>Destination</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="0"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom001">
                  <br />
                    <Form.Label>Group Tour Pacakage List</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="0"
                    />
                  </Form.Group>
              </Row>
              <br />
              <h6>Budget/Cost</h6>
              <div className={styles.line_devider_inside}></div>
              <Row className="mb-12">
              <br />
                <Form.Group as={Col} md="3">
                  <Form.Label>Per Person/Couple</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First name"
                  />
                </Form.Group>
                <Form.Group as={Col} md="3">
                  <Form.Label>Currency</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First name"
                  />
                </Form.Group>
                <Form.Group as={Col} md="3">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control 
                    type="number"
                    placeholder="First name"
                  />
                </Form.Group>
                <Form.Group as={Col} md="3">
                  <Form.Label>Payment Mode</Form.Label>
                  <Form.Control 
                    type="text"
                    placeholder="First name"
                  />
                </Form.Group>
              </Row>
            </div>
          </Row> : null
        }
        {
          getRequirementValue === "carService" ? <Row className={styles.requirement_wrapper}>
            <h6>Cab Service / Pick Up & Drop Details</h6>
            <div className={styles.line_devider_inside}></div>
            <div className={styles.requirement_content}>
              <Row className="mb-12">
                <Form.Group as={Col} md="3" controlId="validationCustom001">
                    <Form.Label>Date & Time</Form.Label>
                    <Form.Control
                      required
                      type="date"
                      placeholder="0"
                    />
                </Form.Group>
                 <Form.Group as={Col} md="3" controlId="validationCustom001">
                    <Form.Label>Pick up Point</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="0"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom001">
                    <Form.Label>Drop Point</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="0"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom001">
                    <Form.Label>No of Adults</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="0"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom001">
                   <br />
                    <Form.Label>No of Kids</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="0"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom001">
                  <br />
                    <Form.Label>No Of Infants (Below 2 Years)</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="0"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="3">
                    <br />
                    <Form.Label>Vehicle Type</Form.Label>
                    <Form.Select required>
                      <option value="">Select customer</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  
              </Row>
            </div>
          </Row> : null
        }
        {
          getRequirementValue === "flights" ? <Row className={styles.requirement_wrapper}>
            <h6>Flights</h6>
            <div className={styles.line_devider_inside}></div>
            <div className={styles.requirement_content}>
              <Row className="mb-12"></Row>
            </div>
          </Row> : null
        }
        {
          getRequirementValue === "trainTickets" ? <Row className={styles.requirement_wrapper}>
            <h6>Train Tickets</h6>
            <div className={styles.line_devider_inside}></div>
            <div className={styles.requirement_content}>
              <Row className="mb-12"></Row>
            </div>
          </Row> : null
        }
        {
          getRequirementValue === "forex" ? <Row className={styles.requirement_wrapper}>
            <h6>Forex Details</h6>
            <div className={styles.line_devider_inside}></div>
            <div className={styles.requirement_content}>
              <Row className="mb-12">
                <Form.Group as={Col} md="4">
                    <Form.Label>Select Currency</Form.Label>
                    <Form.Select required>
                      <option value="">Select customer</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom001">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Please enter lead title"
                    />
                  </Form.Group>
              </Row>
            </div>
          </Row> : null
        }
        {
          getRequirementValue === "visa" ? <Row className={styles.requirement_wrapper}>
            <h6>Visa</h6>
            <div className={styles.line_devider_inside}></div>
            <div className={styles.requirement_content}>
              <Row className="mb-12">
                <Form.Group as={Col} md="4">
                  <Form.Label>Select Customer</Form.Label>
                  <Form.Select required>
                    <option value="">Select customer</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom001">
                  <Form.Label>No Of Days</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Please enter lead title"
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom001">
                  <Form.Label>Type Of Visa</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Please enter lead title"
                  />
                </Form.Group>
              </Row>
              <br />
              <Row className="mb-8">
                <Form.Group as={Col} md="8" >
                  <Form.Label>Required Documents</Form.Label>
                  <Form.Control as="textarea" rows={5} />
                </Form.Group>
              </Row>
            </div>
          </Row> : null
        }

        <Row className={styles.requirement_wrapper}>
          <h6>Service Included in the price</h6>
          <div className={styles.line_devider_inside}></div>
          <div className={styles.serviceIncluded}>
          <Row className="mb-12">
          <Form.Group as={Col} md="3">
            <Form.Check 
              type={"checkbox"} 
              label="Airfare"  
              name= "" 
              value=""
            />
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Check 
              type={"checkbox"}
              label="Internal Transportation"  
              name= "" 
              value=""
            />
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Check 
              type={"checkbox"}
              label="Hotel Stay"  
              name= "" 
              value=""
            />
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Check 
              type={"checkbox"}
              label="Sightseeing"  
              name= "" 
              value=""
            />
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Check 
              type={"checkbox"}
              label="Visa Fees"  
              name= "" 
              value=""
            />
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Check 
              type={"checkbox"}
              label="Government Tax"  
              name= "" 
              value=""
            />
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Check 
              type={"checkbox"}
              label="Surcharge"  
              name= "" 
              value=""
            />
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Check 
              type={"checkbox"}
              label="Cruise Stay"  
              name= "" 
              value=""
            />
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Check 
              type={"checkbox"}
              label="Free Goodies"  
              name= "" 
              value=""
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Check 
              type={"checkbox"}
              label="APAI - Stay &amp; All Meals"  
              name= "" 
              value=""
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Check 
              type={"checkbox"}
              label="Passport Fees"  
              name= "" 
              value=""
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Check 
              type={"checkbox"}
              label="CP - Stay &amp; Breakfast"  
              name= "" 
              value=""
            />
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Check 
              type={"checkbox"}
              label="Tour Manager"  
              name= "" 
              value=""
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Check 
              type={"checkbox"}
              label="MAP - Stay, Breakfast &amp; Dinner"  
              name= "" 
              value=""
            />
          </Form.Group>

          </Row>
          </div>
        </Row>

        <Row className="mb-6">
          <Form.Group as={Col} md="6" >
            <Form.Label>Short Note</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
        </Row>
        <br />
        <div className={styles.line_devider_inside}></div>
        <br />
        <Row className="mb-6">
          <Form.Label>Select Lead Status</Form.Label>
            <Form.Group as={Col} md="6">
            <Form.Select required>
              <option value="">Select customer</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <br /> <br />
        <Button type="button" className={styles.defaultButton}>Cancel</Button>
        <Button type="submit" className={styles.primaryButton}>Submit form</Button>
      </Form>
     </div>
    </>
  )
}

export default CreateLead