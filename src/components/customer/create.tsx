import React, { useState } from 'react'
import ActiveLastBreadcrumb from '../breadcrumbs'
import { breadcrumbDataCreate } from './constants'
import { useNavigate } from "react-router-dom";
import styles from './customer.module.scss'

const CreateCustomer = () => {

  const history = useNavigate();
  const [adduser, setAddUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    country: "",
    state: "",
    city: "",
    zipCode: ""
})

const { firstName, lastName, email, mobile, country, state, city, zipCode } = adduser;

const onInputChange = (e: any) => { 
  setAddUser(
      {...adduser, [e.target.name]: e.target.value}
  )
}

const onSubmit = async (e: any) => {

}

const clearFormData = () => {
  setAddUser(
    {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      country: "",
      state: "",
      city: "",
      zipCode: ""
    }
  )
}

const BackToSupervisePage = () => {
  history('/customer/supervise');
}

  return (
    <>
    <ActiveLastBreadcrumb breadcrumbData = {breadcrumbDataCreate} />
      <div className={styles.createCustomerWrapper}>
      <form className={styles.customerCreateForm} onSubmit={(e) => onSubmit(e)}>
        <br />
            <div className="form-row d-flex mb-3">
                <div className="form-group col-5">
                    <label>First name<span className='requiredFiled'></span></label>
                    <input type="text" className="form-control"  placeholder="First Name" name='firstName' value={firstName} onChange={(e) => onInputChange(e)} required/>
                </div>
                <div className="form-group col-1"></div>
                <div className="form-group col-5">
                    <label >Last name<span className='requiredFiled'></span></label>
                    <input type="text" className="form-control"  placeholder="Last Name" name='lastName'value={lastName} onChange={(e) => onInputChange(e)} required/>
                </div>
            </div>
            <div className="form-row d-flex mb-3">
                <div className="form-group col-5">
                    <label>Email<span className='requiredFiled'></span></label>
                    <input type="text" className="form-control"  placeholder="Email" name='email' value={email} onChange={(e) => onInputChange(e)} required/>
                </div>
                <div className="form-group col-1"></div>
                <div className="form-group col-5">
                    <label >Mobile<span className='requiredFiled'></span></label>
                    <input type="tel" className="form-control"  placeholder="UserName" name='mobile'value={mobile} onChange={(e) => onInputChange(e)} required/>
                </div>
            </div>

            <div className="form-row d-flex mb-3">
                <div className="form-group col-5">
                    <label>Country<span className='requiredFiled'></span></label>
                    <input type="text" className="form-control"  placeholder="Select Country" name='country' value={country} onChange={(e) => onInputChange(e)} required/>
                </div>
                <div className="form-group col-1"></div>
                <div className="form-group col-5">
                    <label >State<span className='requiredFiled'></span></label>
                    <input type="text" className="form-control"  placeholder="Select State" name='state'value={state} onChange={(e) => onInputChange(e)} required />
                </div>
            </div>
            <div className="form-row d-flex mb-3">
                <div className="form-group col-5">
                    <label>City<span className='requiredFiled'></span></label>
                    <input type="text" className="form-control"  placeholder="City" name='city' value={city} onChange={(e) => onInputChange(e)} required/>
                </div>
                <div className="form-group col-1"></div>
                <div className="form-group col-5">
                    <label >Zip code<span className='requiredFiled'></span></label>
                    <input type="text" className="form-control"  placeholder="ZIP CODE" name='zipCode'value={zipCode} onChange={(e) => onInputChange(e)} required/>
                </div>
            </div>                
            <br />
            <div className="form-row">
                <button type="button" className="defaultButton" onClick={() => clearFormData()}>Clear</button>
                <button type="button" className="secondaryButton" onClick={() => BackToSupervisePage()}>Cancel</button>
                <button type="submit" className="primaryButton">Submit</button>
            </div>
      </form>
      </div>
    </>
  )
}

export default CreateCustomer