import React, {useState} from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';  
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';



const Header = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
  <>
    <Navbar bg="dark" variant="dark" style={{height:"60px"}}>  
    <Container>  
      <NavLink to="/" className="text-decoration-none text-light mx-3">Add to cart</NavLink>  
        <Nav className="me-auto">  
          <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>    
        </Nav>  
        <Badge badgeContent={4} color="primary"
         id="basic-button"
         aria-controls={open ? 'basic-menu' : undefined}
         aria-haspopup="true"
         aria-expanded={open ? 'true' : undefined}
         onClick={handleClick}>
        <i class="fa-solid fa-cart-shopping text-light" style={{fontSize:25,cursor:"pointer"}}></i> 
        </Badge>
    </Container>





    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       Your Cart is Empty
      </Menu>  
  </Navbar>  
  </>
  )
}

export default Header

