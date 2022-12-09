import React, { useState } from 'react';
import Dashboard from './components/dashboard';
import Navigation from './components/navigation';
import './index.scss'
import Footer from './pages/footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Help from './components/help';
import CreateLead from './components/lead-board/create';
import SuperviseLead from './components/lead-board/supervise';
import CreateCustomer from './components/customer/create';
import CreateInvoice from './components/billing/create';
import SuperviseInvoice from './components/billing/supervise';
import SuperviseCustomer from './components/customer/supervise';
import CreateItinerary from './components/itinerary/create';
import PreparedItinerary from './components/itinerary/prepared';
import CustomisedItinerary from './components/itinerary/supervise';
import UpdateInvoice from './components/billing/update';
import UpdateCustomer from './components/customer/update';
import UpdateLead from './components/lead-board/update';
import UpdateItinerary from './components/itinerary/update';

function App() {

 const [activeSideNav, setActiveSideNav] = useState(false)
  const handleClickSideNav = (value: any) => {
    console.log("handleClickSideNav", value); 
    setActiveSideNav(value)
  }

  console.log("style={{height: window.innerHeight}", window.outerHeight)
  return (
    <div className="page">
      <Router>
      {/* className={`side_navigation ${activeSideNav ? "activeSideNavigation" : null}`} */}
        <div className="main">
            <div >
              <Navigation handleClickSideNav = {handleClickSideNav} />
            </div>
            <div className="body_content">
            <Routes>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/lead-board/create" element={<CreateLead />}/>
              <Route path="/lead-board/supervise" element={<SuperviseLead />}/>
              <Route path="/lead-board/update" element={<UpdateLead />}/>
              <Route path="/customer/create" element={<CreateCustomer />}/>
              <Route path="/customer/supervise" element={<SuperviseCustomer />}/>
              <Route path="/customer/update" element={<UpdateCustomer />}/>
              <Route path="/billing/create" element={<CreateInvoice />}/>
              <Route path="/billing/supervise" element={<SuperviseInvoice />}/>
              <Route path="/billing/update" element={<UpdateInvoice />}/>
              <Route path="/itinerary/create" element={<CreateItinerary />}/>
              <Route path="/itinerary/prepared" element={<PreparedItinerary />}/>
              <Route path="/itinerary/supervise" element={<CustomisedItinerary />}/>
              <Route path="/itinerary/update" element={<UpdateItinerary />}/>
              {/* <Route path="/" element={<Dashboard />}/>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/" element={<Dashboard />}/> */}
              <Route path="/help" element={<Help />}/>
            </Routes>
            {/* <Footer /> */}
            </div>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
