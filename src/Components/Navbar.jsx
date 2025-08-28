import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CountNoteContext } from '../lib/Context/CountNote';
import { useNavigate } from 'react-router';

export default function MyNavbar() {

 let {CountNote}= useContext(CountNoteContext)
 const navigate= useNavigate()




 function Sinout(){
  localStorage.removeItem("token")
  navigate("/login")
 }
  return (
    <>
     <Navbar expand="lg" className="bg-green-500">
      <Container>
        <Navbar.Brand href="#home">NoteApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           <button onClick={Sinout} className='btn btn-danger'>Sign Out</button>
           <h4>Num of Notes :{CountNote}</h4>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}
