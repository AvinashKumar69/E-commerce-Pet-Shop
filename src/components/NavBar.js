import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../Firebase-config";
import SearchBar from "./SearchBar";

const NavBar = (props) => {

  console.log("Props:-", props);

  return (
    <Navbar sticky="top" bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">PETSY</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/">Home</Link>
            {
              !props.isLoggedIn ?
                <Nav.Link
                  type="button"
                  onClick={signInWithGoogle}
                >Log In</Nav.Link>
                :
                <p>Hello User!</p>
            }
          </Nav>
          <SearchBar />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.pets.isLoggedIn,
  }
}

export default connect(mapStateToProps)(NavBar);