import React, {useState} from 'react'
import ActiveLastBreadcrumb from '../breadcrumbs'
import { breadcrumbDataCreate } from './constatnts'
import { useNavigate } from "react-router-dom";
import styles from "./itinerary.module.scss";

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const CreateItinerary = () => {

  const history = useNavigate();
  const [active, setActive] = useState(0)
  // const [value, setValue] = React.useState<Dayjs | null>(null);
  const [startMinDate, setStartDate] = useState(new Date())
  const [activeMenu, setActiveMenu] = useState("Summary")
  const [activeSummary, setActiveSummary] = useState(true);
  const [activeDayWise, setActiveDayWise] = useState(true)
  const [activeInclusion, setActiveInclusion] = useState(true)
  const [activeCost, setActiveCost] = useState(true)
  const [activeTips, setActiveTips] = useState(true)
  const [activeThankYou, setActiveThankYou] = useState(true)
  const [selectedThankYou, setselectedThankYou] = useState([] as any)

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const menuItems = [
    "Summary", "Customer Information","Day Wise Plan", "Inclusion / Exclusion", "Cost", "Tips", "Thank you"
  ];

  const handleCurrectItem = (text: any, index: any) => {
    setActiveMenu(text);
    setActive(index)
  }



  return (
    <>
    <ActiveLastBreadcrumb breadcrumbData = {breadcrumbDataCreate} />

   <div className={styles.createItineraryWrapper}>
      <ul className="nav nav-tabs" id="customItineraryWrapper">
          {
            menuItems.map((memuItem: any, index: any) => <li className="nav-item" key={index}>
            <label className={`nav-link ${active === index ? "active": "deAactive"}`} onClick={() => { 
                // handleMemu(index)
                handleCurrectItem(memuItem, index)
                }}>{memuItem}</label>
            </li>)
          }
      </ul>
      <div className={styles.createItineraryContent}>
      {
        activeMenu === "Summary" ? <div className='createItineraryFormWrapper'> 
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-12">
            <br />
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Itinerary Title </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Itinerary Title"
                />
              </Form.Group>
               
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Destination </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Destination "
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Type of Holidays</Form.Label>
                <Form.Select aria-label="select example">
                  <option value="">Select thank you note</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom01">
              <br />
                <Form.Label>Adults </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Adutls"
                />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom01">
              <br />
                <Form.Label>Child </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Child"
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
              <br />
                <Form.Label>Travellers</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Travellers "
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
              <br />
                <Form.Label>Start Date </Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder=" "
                />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom01">
              <br />
                <Form.Label>End Date </Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder=" "
                />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom01">
              <br />
                <Form.Label>Nights </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nights "
                />
              </Form.Group>

             

              <Form.Group as={Col} md="4" controlId="validationCustom01">
              <br />
                <Form.Label>Budget/Cost</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Budget/Cost "
                />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom01">
              <br />
                <Form.Label>Cost For</Form.Label>
                <Form.Select aria-label="select example">
                  <option value="">Select cust for</option>
                  <option value="1">Person</option>
                  <option value="2">Couple</option> 
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
              <br />
                <Form.Label>Currency</Form.Label>
                <Form.Select aria-label="select example">
                  <option value="">Select currency</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
              <br />
                <Form.Label>Tour Cost Cover</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Tour Cost Cover "
                />
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
              <br />
                <Form.Label>Select Cover Image</Form.Label>
                <Form.Control type="file" />
               
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <br />
                <Form.Label>Welcome Note</Form.Label>
                <Form.Select aria-label="select example">
                  <option value="">Select welcome note</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>

            </Row>
            <br />
            <br />
            <Button type="submit">Submit form</Button>
          </Form>
        </div> : null
      }
      {
        activeMenu === "Customer Information" ? <div className='createItineraryFormWrapper'>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-12">
            <br />
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Customer Name </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Customer Name "
                />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Email ID </Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Mobile Number </Form.Label>
                <Form.Control
                  required
                  type="tel"
                  placeholder="Mobile "
                />
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="exampleForm.ControlTextarea1">
              <br />
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            
              <Form.Group as={Col} md="4" controlId="validationCustom01">
              <br />
                <Form.Label>Pincode </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Pincode "
                />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom01">
              <br />
                <Form.Label>Birth Date </Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder=" "
                />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom01">
              <br />
                <Form.Label>Anniversary Date </Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder=" "
                />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="exampleForm.ControlTextarea1">
                <br />
                <Form.Label>City</Form.Label>
                <Form.Select aria-label="select example">
                  <option value="">Select thank you note</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>             
              <Form.Group as={Col} md="4" controlId="exampleForm.ControlTextarea1">
                <br />
                <Form.Label>State</Form.Label>
                <Form.Select aria-label="select example">
                  <option value="">Select itinerary status</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="exampleForm.ControlTextarea1">
                <br />
                <Form.Label>Country</Form.Label>
                <Form.Select aria-label="select example">
                  <option value="">Select itinerary status</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="exampleForm.ControlTextarea1">
              <br />
                <Form.Label>Note</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

            </Row>
            <br />
            <br />
            <Button type="submit">Submit form</Button>
          </Form>
        </div> : null
      }
      {
        activeMenu === "Day Wise Plan" ? <div className='createItineraryFormWrapper'> Day Wise Plan
        <br /><br />
        <h1>In Progress</h1>
         </div> : null
      }
      {
        activeMenu === "Inclusion / Exclusion" ? <div className='createItineraryFormWrapper'>  
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-12">
            <br />
              <Form.Group as={Col} md="12" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Inclusion</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
               
              <Form.Group as={Col} md="12" controlId="exampleForm.ControlTextarea1">
              <br />
                <Form.Label>Exclusion</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
            </Row>
            <br />
            <br />
            <Button type="submit">Submit form</Button>
          </Form>
        </div> : null
      }
      {
        activeMenu === "Cost" ? <div className='createItineraryFormWrapper'> 
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-12">
            <br />
              <Form.Group as={Col} md="12" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Cost</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
               
              <Form.Group as={Col} md="12" controlId="exampleForm.ControlTextarea1">
              <br />
                <Form.Label>Terms & Conditions</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="exampleForm.ControlTextarea1">
              <br />
                <Form.Label>Cancellation</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
            </Row>
            <br />
            <br />
            <Button type="submit">Submit form</Button>
          </Form>
        </div> : null
      }
      {
        activeMenu === "Tips" ? <div className='createItineraryFormWrapper'>
           <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-12">
            <br />
              <Form.Group as={Col} md="12" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Tips</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
               
              <Form.Group as={Col} md="12" controlId="exampleForm.ControlTextarea1">
              <br />
                <Form.Label>Other / Visa Information</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
            </Row>
            <br />
            <br />
            <Button type="submit">Submit form</Button>
          </Form>
        </div> : null
      } 
      {
        activeMenu === "Thank you" ? <div className='createItineraryFormWrapper'>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-12">
            <br />
              <Form.Group as={Col} md="12" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Thank You Note</Form.Label>
                <Form.Select aria-label="select example">
                  <option value="">Select thank you note</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>             
              <Form.Group as={Col} md="12" controlId="exampleForm.ControlTextarea1">
                <br />
                <Form.Label>Itinerary Status</Form.Label>
                <Form.Select aria-label="select example" required>
                  <option value="">Select itinerary status</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>

            </Row>
            <br />
            <br />
            <Button type="submit">Submit form</Button>
          </Form>
        </div> : null
      }
    </div>
   </div>
    
    </>
  )
}

export default CreateItinerary