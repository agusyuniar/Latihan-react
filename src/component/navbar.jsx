import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import { Link } from 'react-router-dom'
  import { connect } from 'react-redux'
import { login,logout } from "../redux/action";

class Header extends React.Component {
    state = {
      isOpen: false
    };
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
          
        <Navbar color="primary" dark expand="md">
        <NavbarBrand><img src="omg.png" alt='logogo' width='100'></img><strong>latihan</strong>LAGI</NavbarBrand>
            <NavLink>            
                <Link className='navbar-brand' to='/home' style={{color: 'white'}}>
                    home
                </Link>
                <Link className='navbar-brand' to='/bukan'>
                    notHome
                </Link>
            </NavLink>
            <NavbarToggler onClick={this.toggle}  />
            <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="navbar-brand ml-auto" navbar>
        <NavLink style={{color: 'white'}}>
            {
                this.props.username
                ?
                this.props.username
                :
                'logged out'
            }
        </NavLink>    
        <Link to="/login">
            <NavLink style={{color: 'white'}}>
                  {
                    this.props.username
                    ?
                    <Link to="/login"><div style={{color: 'white'}} onClick={this.props.logout}>Log Out</div></Link>
                    :
                    '(Log in)'
                }
            </NavLink>
        </Link>
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret style={{color: 'white'}}>
            </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link className='navbar-brand' to='/bukan' style={{color: 'black'}}>
                    menu boongan
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <Link to="/login">
                  <DropdownItem onClick={this.props.logout}>
                    Log Out
                  </DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          
        </Navbar>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return{
    username: state.user.username
  }
}

export default connect(mapStatetoProps, {logout})(Header)