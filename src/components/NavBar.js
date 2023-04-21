import "bootstrap/dist/css/bootstrap.min.css";

import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import classes from "./NavBar.module.css";
import LinkedInLogo from "../icons/techstacks/LinkedIn2.png";
import GitHubLogo from "../icons/techstacks/GitHub.png";

const Cards = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="md">
      <Container className={`${classes.containerMargin} d-flex`}>
        <div className="ms-md-4">
          <a href="https://www.linkedin.com/in/prabuddharb/" className="me-3">
            <img src={LinkedInLogo} alt="" className={`${classes.logoNav}`} />
          </a>
          <a href="https://github.com/Prabuddha781?tab=repositories">
            <img src={GitHubLogo} alt="" className={`${classes.logoNav}`} />
          </a>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <button
              className={`${classes.button10} me-md-3 mb-md-0 mb-2 mt-md-0 mt-2 align-self-center`}
              onClick={() => navigate("/")}
            >
              Home
            </button>
            <button
              className={`${classes.button10} align-self-center`}
              onClick={() => navigate("/tech")}
            >
              Tech
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Cards;
