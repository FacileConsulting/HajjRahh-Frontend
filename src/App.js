import React, { useEffect, useState } from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { DateRangePicker } from 'rsuite';
import store from './store';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import Holidays from './pages/Holidays';
import Trips from './pages/Trips';
import LoginRegister from './pages/LoginRegister';
import Select from './components/Select';
import Counter from './components/Counter';
import { handleAPIData } from './hooks/useCustomApi';
import { resetMyAccountFunc } from './reducers/myAccountSlice';
import { toastOptions } from './toastify';
import './App.css';
import 'rsuite/DateRangePicker/styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

const App = ({ message }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { displayEmail } = useSelector(state => {
    console.log('state.myAccount register', state)
    return state.myAccount
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchHealthData = async () => {
    let response = await handleAPIData('GET', '/api/health');
    console.log('/api/health', response);
  }

  const handleLogOutClick = () => {
    // dispatch(resetMyAccountFunc());
    setIsLoggedIn(false);
    history.push('/');
  }

  useEffect(() => {
    fetchHealthData();
  }, []);

  useEffect(() => {
    if (displayEmail) {
      console.log('true')
      setIsLoggedIn(true);
    } else {
      console.log('false')
      setIsLoggedIn(false);
    }
    history.push('/');
  }, [displayEmail]);

  return (
    <>
      <section className="section-wrapper">
        <nav className="navbar navbar-expand-lg bg-body-tertiary header-section">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <img src="./assets/images/hajjrahh_logo.jpg" className="hajjrahh-logo" alt="..." />
            </Link>
            {/* <Link to="/" className="navbar-brand">Hajjrahh</Link> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item text-center">
                  <span className="nav-menu-icon img-flight"></span> <br />
                  <a className="nav-link" aria-current="page">Flights</a>
                </li>
                <li className="nav-item text-center">
                  <span className="nav-menu-icon img-hotel"></span> <br />
                  <a className="nav-link" aria-current="page">Hotels</a>
                </li>

                <li className="nav-item text-center">
                  <span className="nav-menu-icon img-holidays"></span> <br />
                  <Link to="/holidays">Holidays
                    {/* <a className="nav-link" aria-current="page">Holidays</a> */}
                  </Link>
                </li>
                <li className="nav-item text-center">
                  <span className="nav-menu-icon img-cabs"></span> <br />
                  <a className="nav-link" aria-current="page">Cabs</a>
                </li>
                <li className="nav-item text-center">
                  <span className="nav-menu-icon img-invest"></span> <br />
                  <a className="nav-link" aria-current="page">Invest</a>
                </li>
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0 d-flex nav-secondary">
                {
                  isLoggedIn &&
                  <>
                    <li className="nav-item dropdown">
                      <Link to="/myAccount"> My Account</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/trips">Trips</Link>
                    </li>
                  </>
                }
                <li className="nav-item">
                  <a className="nav-link" href="#">Support</a>
                </li>
                {
                  isLoggedIn ?
                    <li className="nav-item" onClick={handleLogOutClick}>
                      <a className="nav-link" href="#">LogOut</a>
                    </li> :
                    <li className="nav-item">
                      <Link className="nav-link nav-btn btn-secondary" to="/loginRegister">Sign In</Link>
                    </li>
                }
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/myAccount" component={MyAccount} />
          <Route path="/trips" component={Trips} />
          <Route path="/holidays" component={Holidays} />
          <Route path="/loginRegister" component={LoginRegister} />
        </Switch>
      </section>
      <div className="section-bg">
        <div className="container-xxl py-5 section-block">
          <div className="row align-items-center">
            <div className="col">
              <div className="logo mb-2">HajjRahh</div>
              <p className="text-dark">© 2024 HajjRahh. All rights reserved.</p>
            </div>
            <div className="col">
              <ul className="list-inline float-end">
                <li className="list-inline-item"><a>Terms of Use</a></li>
                <li className="list-inline-item">|</li>
                <li className="list-inline-item"><a>Privacy and Cookies</a></li>
                <li className="list-inline-item">|</li>
                <li className="list-inline-item"><a>Cookie consent</a></li>
                <li className="list-inline-item">|</li>
                <li className="list-inline-item"><a>Contact us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
};

export default App;
