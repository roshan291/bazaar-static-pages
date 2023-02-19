import React, {Fragment, useState} from 'react'
import styles from './navigation.module.scss';
import { Link, NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import QueueRoundedIcon from '@mui/icons-material/QueueRounded';
import PriceChangeRoundedIcon from '@mui/icons-material/PriceChangeRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import NextPlanRoundedIcon from '@mui/icons-material/NextPlanRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
import EditNotificationsRoundedIcon from '@mui/icons-material/EditNotificationsRounded';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { style } from '@mui/system';
import { menu } from './constants';

const Navigation = (props: any) => {
    const navigate = useNavigate();

    const [leadSubItems, setLeadSubItems] = useState(false)
    const [itinerarySubItems, setItinerarySubItems] = useState(false)
    const [billingSubItems, setBillingSubItems] = useState(false)
    const [customerSubItems, setCustomerSubItems] = useState(false)
    const [activeDashboard, setActiveDashboard] = useState(true);
    const [activeLeadboard, setActiveLeadboard] = useState(false);
    const [activeItinerary, setActiveItinerary] = useState(false);
    const [activeBilling, setActiveBilling] = useState(false);
    const [activeCustomer, setActiveCustomer] = useState(false);
    const [activeHelp, setActiveHelp] = useState(false);

    const [open, setOpen] = useState(false);

    const redirectToDashboard = () =>{ 
        navigate('/');
    }

    const handleLeadBoard = () => {
        setLeadSubItems(!leadSubItems);
        setItinerarySubItems(false);
        setBillingSubItems(false);
        setCustomerSubItems(false);

        setActiveDashboard(false)
        setActiveLeadboard(true)
        setActiveItinerary(false)
        setActiveBilling(false)
        setActiveCustomer(false)
        setActiveHelp(false)
    }
    const handleItinerary = () => {
        setItinerarySubItems(!itinerarySubItems)
        setLeadSubItems(false); 
        setBillingSubItems(false);
        setCustomerSubItems(false);
       
        setActiveDashboard(false)
        setActiveLeadboard(false)
        setActiveItinerary(true)
        setActiveBilling(false)
        setActiveCustomer(false)
        setActiveHelp(false)

    }
    const handleBilling = () => {
        setBillingSubItems(!billingSubItems)
        setLeadSubItems(false);
        setItinerarySubItems(false);
        setCustomerSubItems(false);

        setActiveDashboard(false)
        setActiveLeadboard(false)
        setActiveItinerary(false)
        setActiveBilling(true)
        setActiveCustomer(false)
        setActiveHelp(false)
    }
    const handleCustomer = () => {
        setCustomerSubItems(!customerSubItems);
        setLeadSubItems(false);
        setItinerarySubItems(false);
        setBillingSubItems(false);

        setActiveDashboard(false)
        setActiveLeadboard(false)
        setActiveItinerary(false)
        setActiveBilling(false)
        setActiveCustomer(true)
        setActiveHelp(false)
    }

    const handleDashboard = () => {
        setActiveDashboard(true)
        setActiveLeadboard(false)
        setActiveItinerary(false)
        setActiveBilling(false)
        setActiveCustomer(false)
        setActiveHelp(false)

        setLeadSubItems(false);
        setItinerarySubItems(false);
        setBillingSubItems(false);
        setCustomerSubItems(false);
    }

    const handleMenuOpen = () => {
        setOpen(!open);
        props.handleClickSideNav(!open)
    }

  return (
    <div className={styles.nav_wrapper}>
        <nav>
            <div className={styles.logo_wrapper}>
                <div>logo</div>
                {/* <Link to="/" onClick={handleDashboard}>
                    <img className={styles.logo} src='https://s3.ap-south-1.amazonaws.com/tripcontrolimage/upload/user_company_logos/1524478299.jpg'  alt=''/>
                </Link> */}
                {/* <div className={`${styles.handleOpenMenu} ${open ? styles.activeMenuOpen : null}`}><MenuOpenIcon onClick={handleMenuOpen} /></div> */}
            </div>
            <ul className={`${styles.menu_items} ${open ? styles.activeMenuItems : null}`}>
                <li className={activeDashboard ? styles.active: ""} onClick={handleDashboard}>
                    <Link to="/">Dashboard</Link>
                </li>
                <li className = {activeLeadboard ? styles.active: ""} onClick={handleLeadBoard}>Lead Board { leadSubItems ? <KeyboardArrowUpIcon className={styles.menu_arrow} /> : <KeyboardArrowDownIcon className={styles.menu_arrow} />} 
                    {
                        leadSubItems ? <div className={styles.suvMenuActive}>
                            <ul>
                                <li>
                                    <Link to="/lead-board/create">Create Lead </Link>
                                </li>
                                <li>
                                    <Link to="/lead-board/supervise">Supervise Lead </Link>
                                </li>
                            </ul>
                        </div> : null
                    }
                </li>
                
                
                <li className = {activeItinerary ? styles.active: ""} onClick={handleItinerary}>Itinerary { itinerarySubItems ? <KeyboardArrowUpIcon className={styles.menu_arrow}/> : <KeyboardArrowDownIcon className={styles.menu_arrow} />}
                {
                    itinerarySubItems ? <div className={styles.suvMenuActive}>
                        <ul>
                        <li><Link to="/itinerary/create">Create Itinerary</Link></li>
                        <li><Link to="/itinerary/supervise">Customised Itinerary</Link></li>
                        <li><Link to="/itinerary/prepared"> Prepared Itinerary</Link></li>
                        </ul>
                    </div> : null
                }
                </li>
               
              
                <li className= {activeBilling ? styles.active: ""} onClick={handleBilling}>Billing { billingSubItems ? <KeyboardArrowUpIcon className={styles.menu_arrow}/> : <KeyboardArrowDownIcon className={styles.menu_arrow} />}
                {
                    billingSubItems ? <div className={styles.suvMenuActive}>
                    <ul>
                     <li><Link to="/billing/create">Create Invoice</Link></li>
                     <li><Link to="/billing/supervise"> Supervise Invoice</Link></li>
                     </ul>
                    </div> : null
                }
                </li>
                
                <li className = {activeCustomer ? styles.active: ""} onClick={handleCustomer}>Customer {customerSubItems ? <KeyboardArrowUpIcon className={styles.menu_arrow}/> : <KeyboardArrowDownIcon className={styles.menu_arrow} /> }
                {
                    customerSubItems ? <div className={styles.suvMenuActive}>
                        <ul>
                        <li><Link to="/customer/create">Create Customer</Link></li>
                        <li><Link to="/customer/supervise">Supervise Customer</Link></li>
                        {/* <li><Link to="/customer/update"><EventNoteIcon /> Update Customer</Link></li> */}
                        </ul>
                    </div> : null
                }
                </li>
                
                <li className = {activeHelp ? styles.active: ""}>
                    <Link to="/help">Help <KeyboardArrowDownIcon className={styles.menu_arrow} /> </Link>
                </li>

            </ul>
        </nav>
        {/* <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand onClick={redirectToDashboard}>Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link onClick={redirectToDashboard}><DashboardIcon /> Dashboard</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Lead Board" id="collasible-nav-dropdown">
                <LeaderboardIcon />
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>

                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                <HelpCenterIcon /> Help
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar> */}
    </div>
  )
}

export default Navigation