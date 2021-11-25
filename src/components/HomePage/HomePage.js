import React, {useState} from 'react';
import { Link, BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './HomePage.css';

export default function HomePage(props) {

    const[sidebar, setSidebar] = useState(false); //state for showing application sidebar
    const showSidebar = () => setSidebar(!sidebar);

    //function to be sent to parent component to change parent state
    const toAgriHelp = () => {
        props.parentLog(false);

    }

    return (
        <div>
            <Router>
                <div className='navbar'>
                    <div className='brand'>
                        AgriHelp
                    </div>

                    <div>
                        <i className='fas fa-search search'></i>
                        <i className='fas fa-user'></i>
                    </div>
                    
                    <Link to='#' className='menu-bars'>
                        <i className='fas fa-bars' onClick={showSidebar}></i>
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar} >
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <i className='fas fa-times'></i>
                            </Link>
                        </li>
                        <li className='nav-text'>
                            <Link to='/'>
                                <i className='fas fa-home'></i>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className='nav-text'>
                            <Link to='/reports'>
                                <i className='fas fa-file'></i>
                                <span>Reports</span>
                            </Link>
                        </li>
                        <li className='nav-text'>
                            <Link to='/products'>
                                <i className='fas fa-shopping-cart'></i>
                                <span>Products</span>
                            </Link>
                        </li>
                        <li className='nav-text'>
                            <Link to='/signin'>
                                <i className='fas fa-sign-out-alt'></i>
                                <span onClick={toAgriHelp} >Logout</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Router>
        </div>
    )
}

