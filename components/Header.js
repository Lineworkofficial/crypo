import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Navbar, Nav, NavDropdown, Dropdown, Button } from 'react-bootstrap';
import { ThemeConsumer } from '../context/ThemeContext';
export default class Header extends Component {
  componentDidMount() {
    let el = document.querySelector('#darkTheme');
    if (el) {
      el.addEventListener('click', function () {
        document.body.classList.toggle('dark');
      });
    }
  }
  render() {
    return (
      <>
        <Head>
          <title>Crypo</title>
          <meta
            name="description"
            content="Cryptocurrency Exchange Dashboard"
          />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <header className="light-bb">
          <Navbar expand="lg">
            <Link href="/">
              <a className="navbar-brand">
                <ThemeConsumer>
                  {({ data }) => {
                    return data.theme === 'light' ? (
                      <img src={'/img/logo-dark.svg'} alt="logo" />
                    ) : (
                      <img src={'/img/logo-light.svg'} alt="logo" />
                    );
                  }}
                </ThemeConsumer>
              </a>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navbar-nav mr-auto">
                <Link href="/">
                  <a className="nav-link">Exchange</a>
                </Link>
                <Link href="/markets">
                  <a className="nav-link">Markets</a>
                </Link>
                <NavDropdown title="Dashboard">
                  <Link href="/profile">
                    <a className="dropdown-item">Profile</a>
                  </Link>
                  <Link href="/wallet">
                    <a className="dropdown-item">Wallet</a>
                  </Link>
                  <Link href="/settings">
                    <a className="dropdown-item">Settings</a>
                  </Link>
                </NavDropdown>
                <NavDropdown title="Others">
                  <Link href="/login">
                    <a className="dropdown-item">Login</a>
                  </Link>
                  <Link href="/signup">
                    <a className="dropdown-item">Sign up</a>
                  </Link>
                  <Link href="/lock">
                    <a className="dropdown-item">Lock</a>
                  </Link>
                  <Link href="/otp-number">
                    <a className="dropdown-item">OTP Number</a>
                  </Link>
                  <Link href="/otp-verify">
                    <a className="dropdown-item">OTP Verify</a>
                  </Link>
                  <Link href="/reset">
                    <a className="dropdown-item">Reset</a>
                  </Link>
                  <Link href="/notfound">
                    <a className="dropdown-item">404</a>
                  </Link>
                </NavDropdown>
              </Nav>
              <Nav className="navbar-nav ml-auto">
                <Dropdown className="header-custom-icon">
                  <ThemeConsumer>
                    {({ data, update }) => (
                      <Button variant="default" onClick={update} id="darkTheme">
                        {data.theme === 'light' ? (
                          <i className="icon ion-md-moon"></i>
                        ) : (
                          <i className="icon ion-md-sunny"></i>
                        )}
                      </Button>
                    )}
                  </ThemeConsumer>
                  <Dropdown.Toggle variant="default">
                    <i className="icon ion-md-notifications"></i>
                    <span className="circle-pulse"></span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <div className="dropdown-header d-flex align-items-center justify-content-between">
                      <p className="mb-0 font-weight-medium">
                        6 New Notifications
                      </p>
                      <Link href="#">
                        <a className="text-muted">Clear all</a>
                      </Link>
                    </div>
                    <div className="dropdown-body">
                      <Link href="#">
                        <a className="dropdown-item">
                          <div className="icon">
                            <i className="icon ion-md-lock"></i>
                          </div>
                          <div className="content">
                            <p>Account password change</p>
                            <p className="sub-text text-muted">5 sec ago</p>
                          </div>
                        </a>
                      </Link>
                      <Link href="#">
                        <a className="dropdown-item">
                          <div className="icon">
                            <i className="icon ion-md-alert"></i>
                          </div>
                          <div className="content">
                            <p>Solve the security issue</p>
                            <p className="sub-text text-muted">10 min ago</p>
                          </div>
                        </a>
                      </Link>
                      <Link href="#">
                        <a className="dropdown-item">
                          <div className="icon">
                            <i className="icon ion-logo-android"></i>
                          </div>
                          <div className="content">
                            <p>Download android app</p>
                            <p className="sub-text text-muted">1 hrs ago</p>
                          </div>
                        </a>
                      </Link>
                      <Link href="#">
                        <a className="dropdown-item">
                          <div className="icon">
                            <i className="icon ion-logo-bitcoin"></i>
                          </div>
                          <div className="content">
                            <p>Bitcoin price is high now</p>
                            <p className="sub-text text-muted">2 hrs ago</p>
                          </div>
                        </a>
                      </Link>
                      <Link href="#">
                        <a className="dropdown-item">
                          <div className="icon">
                            <i className="icon ion-logo-usd"></i>
                          </div>
                          <div className="content">
                            <p>Payment completed</p>
                            <p className="sub-text text-muted">4 hrs ago</p>
                          </div>
                        </a>
                      </Link>
                    </div>
                    <div className="dropdown-footer d-flex align-items-center justify-content-center">
                      <Link href="#">
                        <a>View all</a>
                      </Link>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="header-img-icon">
                  <Dropdown.Toggle variant="default">
                    <img src={'img/avatar.svg'} alt="avatar" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <div className="dropdown-header d-flex flex-column align-items-center">
                      <div className="figure mb-3">
                        <img src={'img/avatar.svg'} alt="" />
                      </div>
                      <div className="info text-center">
                        <p className="name font-weight-bold mb-0">Tony Stark</p>
                        <p className="email text-muted mb-3">
                          tonystark@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="dropdown-body">
                      <ul className="profile-nav">
                        <li className="nav-item">
                          <Link href="/profile">
                            <a className="nav-link">
                              <i className="icon ion-md-person"></i>
                              <span>Profile</span>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/wallet">
                            <a className="nav-link">
                              <i className="icon ion-md-wallet"></i>
                              <span>My Wallet</span>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/settings">
                            <a className="nav-link">
                              <i className="icon ion-md-settings"></i>
                              <span>Settings</span>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/login">
                            <a className="nav-link red">
                              <i className="icon ion-md-power"></i>
                              <span>Log Out</span>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </>
    );
  }
}
