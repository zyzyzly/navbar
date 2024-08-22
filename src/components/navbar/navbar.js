import React from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Dropdown,
  Button,
} from "react-bootstrap";
import {
  FaSearch,
  FaEnvelope,
  FaSignInAlt,
  FaShoppingBasket,
} from "react-icons/fa";
import "./navbar.css";
import { GiComputerFan } from "react-icons/gi";
import { TfiMenuAlt } from "react-icons/tfi";

export const CustomNavbar = () => {
  return (
    <div>
      {/* Top Navbar */}
      <Navbar bg="light" expand="lg">
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand href="#">
            <img
              src="https://www.micstatic.com/nail/img/logo_pc.png"
              width="250"
              height="50"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>

          {/* Search Box and Dropdown */}
          <div className="search-container">
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                Products
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Category 1</Dropdown.Item>
                <Dropdown.Item href="#">Category 2</Dropdown.Item>
                <Dropdown.Item href="#">Category 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <FormControl
              type="search"
              placeholder="Enter a keyword to search products"
              className="search-input"
              aria-label="Search"
            />
            <Button variant="danger" className="search-button">
              <FaSearch />
            </Button>
          </div>

          {/* Right Elements */}
          <Nav className="ml-auto">
            <Nav.Link href="#">
              <div className="nav-icon-text">
                <GiComputerFan />
                <span>Post My RFQ</span>
              </div>
            </Nav.Link>
            <Nav.Link href="#">
              <div className="nav-icon-text">
                <FaSignInAlt />
                <span>Sign In</span>
              </div>
            </Nav.Link>
            <Nav.Link href="#">
              <div className="nav-icon-text">
                <FaEnvelope />
                <span>Messages</span>
              </div>
            </Nav.Link>
            <Nav.Link href="#">
              <div className="nav-icon-text">
                <FaShoppingBasket />
                <span>Inquiry Basket</span>
              </div>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Bottom Dropdown Navbar */}
      <Navbar bg="light" variant="light" expand="lg" className="mt-1">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbar-dropdown" />
          <Navbar.Collapse id="navbar-dropdown">
            <Nav className="w-100">
              <Dropdown className="me-auto">
                <Dropdown.Toggle variant="light" className="text-dark">
                  <TfiMenuAlt />
                  All Categories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Action 1</Dropdown.Item>
                  <Dropdown.Item href="#">Action 2</Dropdown.Item>
                  <Dropdown.Item href="#">Action 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle variant="light" className="text-dark">
                  Supplier
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Action 1</Dropdown.Item>
                  <Dropdown.Item href="#">Action 2</Dropdown.Item>
                  <Dropdown.Item href="#">Action 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle variant="light" className="text-dark">
                  Buyer
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Action 1</Dropdown.Item>
                  <Dropdown.Item href="#">Action 2</Dropdown.Item>
                  <Dropdown.Item href="#">Action 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle variant="light" className="text-dark">
                  Help
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Action 1</Dropdown.Item>
                  <Dropdown.Item href="#">Action 2</Dropdown.Item>
                  <Dropdown.Item href="#">Action 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle variant="light" className="text-dark">
                  Apps
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Action 1</Dropdown.Item>
                  <Dropdown.Item href="#">Action 2</Dropdown.Item>
                  <Dropdown.Item href="#">Action 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle variant="light" className="text-dark">
                  English
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Action 1</Dropdown.Item>
                  <Dropdown.Item href="#">Action 2</Dropdown.Item>
                  <Dropdown.Item href="#">Action 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
