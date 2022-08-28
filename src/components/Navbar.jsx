import React from 'react';
import {Link} from 'react-scroll';
import logo from '../images/logo1.png';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
  } from '@chakra-ui/react'
  import CloseIcon from '@mui/icons-material/Close';
  import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
  import ListIcon from '@mui/icons-material/List';
  import { Button, ButtonGroup } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
import './navbar.css'
function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <div>
        <nav>
            <Link to='main' className='logo' smooth={true} duration={2000}>
                <img src={logo} alt='logo'/>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span >
                <ListIcon ref={btnRef} colorScheme='teal' style={{color:'#d0ff00',fontSize:"30px"}} onClick={onOpen}/>
                </span>
            </label> 
     
     <Drawer placement="left" onClose={onClose} isOpen={isOpen} colorScheme='teal' className="drawer">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody colorScheme='teal' className="drawer" >
            <div>
            <HighlightOffRoundedIcon style={{fontSize:"30px"}} onClick={onClose}className="icon"/>
            </div>
         
            <div className="head">
            <h1 style={{color:"black"}}>Contents</h1>
            </div>
          <div className='links'>
                <div className='b1'>
                  <Link to='main' className='active' smooth={true} duration={800}>Home</Link>
                  </div>
                <div className='b2'>
                  <Link to='features' smooth={true} duration={800}>Features</Link>
                  </div>
                <div className='b3'><Link to='services' smooth={true} duration={800}>Services</Link>
                </div>
                <div className='b4'><Link to='subscribe' smooth={true} duration={800}>Subscribe</Link></div>
                <div className='b5'><Link to='main'smooth={true} duration={800}>Contact</Link></div>
                {/* <Link to='#' className='hey'>App</Link> */}
                </div>
                
          </DrawerBody>
          <DrawerFooter>
          
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
            
            {/* <ul>
                <li><Link to='main' className='active' smooth={true} duration={2000}>Home</Link></li>
                <li><Link to='features' smooth={true} duration={2000}>Features</Link></li>
                <li><Link to='services' smooth={true} duration={2000}>Services</Link></li>
                <li><Link to='subscribe' smooth={true} duration={2000}>Subscribe</Link></li>
                <li><Link to='#'>Contact</Link></li>
            </ul> */}
            
        </nav>
    </div>
  )
}

export default Navbar;