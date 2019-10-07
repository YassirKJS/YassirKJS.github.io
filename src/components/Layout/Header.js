import React, {Component} from 'react';
import { updateActiveIndex } from '../../actions';
import { connect } from 'react-redux';
import '../../sass/layout/_header.scss';

//import {Navbar, Nav, NavDropdown} from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.css';
//import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
//import { StickyContainer, Sticky } from 'react-sticky';

// routing: see https://reacttraining.com/react-router/web/api/BrowserRouter
//import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

//import Logo from './Logo';
import Signin from '../Signin/Signin';
import Signup from '../Signin/Signup';
const banner_rectangle_sideless = require('../../resources/imgs/design/rectangle-sideless.png');

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
            signin_collapsed: true,
            signup_collapsed: true
        };

        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.closeSidebar = this.closeSidebar.bind(this);

        this.toggleSignin = this.toggleSignin.bind(this);
        this.closeSignin = this.closeSignin.bind(this);    
        
        this.toggleSignup = this.toggleSignup.bind(this);
        this.closeSignup = this.closeSignup.bind(this); 

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    toggleSidebar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
    closeSidebar() {
      if (this.state.collapsed !== true) {
        this.toggleSidebar();
      }
    }

    toggleSignin() {
      this.closeSignup();
      this.setState({
        signin_collapsed: !this.state.signin_collapsed
      });
    }
    closeSignin() {
      if (this.state.signin_collapsed !== true) {
        this.toggleSignin();
      }
    }

    toggleSignup() {
      this.closeSignin();
      this.setState({
        signup_collapsed: !this.state.signup_collapsed
      });
    }
    closeSignup() {
      if (this.state.signup_collapsed !== true) {
        this.toggleSignup();
      }
    }

    // when user clicks signin in signup form
    handleSignin () {
      this.closeSignup();

    }

    // when suer clicks signup in signin form
    handleSignup() {

    }

    componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  
    componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Set the wrapper ref
     */
    setWrapperRef(node) {
      this.wrapperRef = node;
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.closeSidebar();
      }
    }

    render() {
        return (
          <div className='navbar'>
            <div className="header__navbar">
              <img alt='' src={banner_rectangle_sideless} className='header__navbar--bg'/> 
              <div className='header__navbar--links'>
                <NavLink exact to="/" className='link' activeClassName="selected">
                  HOME
                </NavLink>
                <NavLink to="/Cars" className='link' activeClassName="selected">
                  CARS
                </NavLink>
                <NavLink to="/Players" className='link' activeClassName="selected">
                  PLAYERS
                </NavLink>
                <NavLink to="/Calendar" className='link' activeClassName="selected">
                  CALENDAR
                </NavLink> 
                <NavLink to="/Reddit" className='link' activeClassName="selected">
                  REDDIT
                </NavLink> 
                <NavLink to="/Livestreams" className='link' activeClassName="selected">
                  LIVESTREAMS
                </NavLink> 
                <NavLink to="/Livetweets" className='link' activeClassName="selected">
                  LIVETWEETS
                </NavLink> 
              </div>
                
              <div className='header__navbar--signup'>
                <div className='link signup-link' activeClassName="selected" onClick={this.toggleSignup} >
                  SIGN UP
                </div> 
                <div className='link signin-link' activeClassName="selected" onClick={this.toggleSignin} >
                  SIGN IN
                </div> 
                <div className='menu-bars'>
                    <FontAwesomeIcon icon={faBars} className='icon-bars' onClick={this.toggleSidebar} />  
                </div>
              </div>                
            </div>

            <div ref={this.setWrapperRef} className= {this.state.collapsed? 'side__navbar collapsed' : 'side__navbar toggled'}>
              <div className='side__navbar--links'>
                <div className=''>
                  <FontAwesomeIcon icon={faTimes} className='icon-collapse' onClick={this.closeSidebar}/>  
                </div>
                <NavLink exact to="/" className='side--link' activeClassName="side--link--selected"
                    activeStyle={{
                        color: "var(--color-neon-blue",                            
                    }}
                >
                  HOME
                </NavLink>
                <NavLink to="/Cars" className='side--link' activeClassName="side--link--selected"
                    activeStyle={{
                        color: "var(--color-neon-blue"
                    }}
                >
                  CARS
                </NavLink>
                <NavLink to="/Players" className='side--link' activeClassName="side--link--selected"
                    activeStyle={{
                        color: "var(--color-neon-blue"
                    }}
                >
                  PLAYERS
                </NavLink>
                <NavLink to="/Calendar" className='side--link' activeClassName="side--link--selected"
                    activeStyle={{
                        color: "var(--color-neon-blue"
                    }}
                >
                  CALENDAR
                </NavLink> 
                <NavLink to="/Reddit" className='side--link' activeClassName="side--link--selected"
                    activeStyle={{
                        color: "var(--color-neon-blue"
                    }}
                >
                  REDDIT
                </NavLink> 
                <NavLink to="/Livestreams" className='side--link' activeClassName="side--link--selected"
                    activeStyle={{
                        color: "var(--color-neon-blue"
                    }}
                >
                  LIVESTREAMS
                </NavLink> 
                <NavLink to="/Livetweets" className='side--link' activeClassName="side--link--selected"
                    activeStyle={{
                        color: "var(--color-neon-blue"
                    }}
                >
                  LIVETWEETS
                </NavLink> 
              </div>
              
              <div className='side__navbar--signup'>
                <div className='side--link signup-link' activeClassName="side--link--selected" onClick={this.toggleSignup}>
                    SIGN UP
                  </div> 
                  <div className='side--link signin-link' activeClassName="side--link--selected" onClick={this.toggleSignin}>
                    SIGN IN
                  </div> 
                </div>     
            </div>

            <div className= {this.state.signin_collapsed? 'signin-collapsed' : 'signin-toggled'}>
              <FontAwesomeIcon icon={faTimes} className='icon-signinCollapse' onClick={this.closeSignin}/>  
              <Signin handleSignup={this.toggleSignup} />
            </div>

            <div className= {this.state.signup_collapsed? 'signup-collapsed' : 'signup-toggled'}>
              <FontAwesomeIcon icon={faTimes} className='icon-signupCollapse' onClick={this.closeSignup}/>  
              <Signup handleSignin={this.toggleSignin} />
            </div>            
          </div>
        );
    }
}

//export default Header;

const mapDispatchToProps = (dispatch) => {
    return {
        updateActiveIndex: (index) => dispatch(updateActiveIndex(index)),
    }
};

const mapStateToProps = state => ({
    activeIndex: state.activeIndex
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
