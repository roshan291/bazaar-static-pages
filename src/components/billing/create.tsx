import React, { useState } from 'react';
import ActiveLastBreadcrumb from '../breadcrumbs'
import { breadcrumbDataCreate } from './constants'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Row, Col } from 'react-bootstrap'; 
import Table from 'react-bootstrap/Table';
import styles from "./billing.module.scss"


const CreateInvoice = () => {

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <ActiveLastBreadcrumb breadcrumbData = {breadcrumbDataCreate} />
      <Container className={styles.invoiceCreateWrapper}>
        <Row>
            <h1>Invoice</h1>
        </Row>
        <Row>
          <div className = {styles.invoiceNumber}>
            <div className={styles.invoiceLogo}>
              <img src="https://s3.ap-south-1.amazonaws.com/tripcontrolimage/upload/user_company_logos/1524478299.jpg" alt="" />
            </div>
            <div className={styles.invoiceDateWrapper}>
              <div>
                <span>Invoice Number</span>
                <h4>HB22120935</h4>
              </div>
              <div>
                <span>Date of Issue</span>
                <h4>07/12/2022</h4>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div className = {styles.titleDetails}>
            <ul className = {styles.addressDetails}>
              <li>Holiday Bazaar</li>
              <li>3rd floor, Nagarjuna Jubilant,</li>
              <li>Himayat Nagar main road, Hyderabad - 500029,</li>
              <li>Telangana, India.</li>
            </ul>
            
            <ul className = {styles.emailDetails}>
              <li>+91 0888 55 13151</li>
              <li>admin@holidaybazaar.co</li>
              <li>http://holidaybazaar.co</li>
            </ul>
        </div>
      </Row>
      <Row>
        <div className={styles.GSTDetailsBlock}>
          <h5>Seller GST Details</h5>
            <ul>
                <li>
                    <label>GSTIN:</label>
                    <span>36AAPCS5625R1ZE</span>
                </li>
                <li>
                    <label>CIN:</label>
                    <span></span>
                </li>
                <li>
                    <label>PAN NO:</label>
                    <span>BLUPA2358A</span>
                </li>
            </ul>
        </div>
      </Row>
      <Row>
        <div className={styles.formWrapper} >
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3 ">
              <Form.Group as={Col} md="3" controlId="validationCustom01">
                <Form.Label>Select Customer*</Form.Label>
                <Form.Select aria-label="Default select example"  required>
                  <option value="">Select Customer</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom02">
                <Form.Label>Currency*</Form.Label>
                <Form.Select aria-label="Default select example" required>
                  <option value="">Select Currency</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom02">
                <Form.Label>Payment Mode*</Form.Label>
                <Form.Select aria-label="Default select example" required>
                  <option value="">Select Payment</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom02">
                <Form.Label>Status*</Form.Label>
                <Form.Select aria-label="Default select example" required>
                  <option value="">Select Status</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row>
              <div className={styles.tableWrapper}>
                <br />
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Particulars</th>
                      <th>Rate</th>
                      <th>Quantity</th>
                      <th>Discount</th>
                      <th>HSN/SAC</th>
                      <th>GST</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Roshan text</td>
                      <td>1000</td>
                      <td>5</td>
                      <td>50</td>
                      <td>5%</td>
                      <td>18%</td>
                      <td>10000</td>
                    </tr>
                  </tbody>
                </Table>
                <div className={styles.addmore}>
                  <button type="button">Add more</button>
                </div>
                <h2 className={styles.grandTotal}>
                  Grand Total: 595959.00
                </h2>
              </div>
            </Row>
            <Row>
            <Form.Group className="mb-3" controlId="validationCustom10">
              <Form.Label>Billing Note</Form.Label>
              <Form.Control as="textarea" rows={3} required />
            </Form.Group>
            </Row>
            <Row>
              <div className={styles.isProformaInvoice}>
                <Form.Check
                  inline
                  label="Create proforma invoice"
                  name="group1"
                  type= "checkbox"
                />
              </div>
            </Row>
            <Row>
              <div className={styles.actionButtons}>
                <Button type="button">Clear</Button>
                <Button type="button">Cancel</Button>
                <Button type="submit" className={styles.primaryButton}>Submit</Button>
              </div>
            </Row>
          </Form>
        </div>
      </Row>
    </Container>
    </>
  )
}

export default CreateInvoice