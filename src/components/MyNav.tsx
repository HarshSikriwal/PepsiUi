import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Logo from "../assets/img/logo.png";
import Nav from "react-bootstrap/Nav";

const MyNav = () => {
  return (
    <Navbar expand="lg" className="justify-content-between fw-semibold">
      <Navbar.Brand>
        <img src={Logo} width={100} alt="logo" />
      </Navbar.Brand>
      <Nav defaultActiveKey="/" className="mr-auto fs-6  gap-4">
        <Nav.Link href="/" className="nav-link">
          PRODUCTS
        </Nav.Link>

        <Nav.Link eventKey="link-1" className="nav-link">
          WHAT'S NEW
        </Nav.Link>
        <Nav.Link eventKey="link-2" className="nav-link">
          NEWSLETTER
        </Nav.Link>
        <Nav.Link eventKey="link-3" className="nav-link">
          CONTACT US
        </Nav.Link>
      </Nav>

      <Button className="rounded-5 bg-transparent table-hover border-white border-3  px-4">
        BUY PRODUCTS
      </Button>
    </Navbar>
  );
};

export default MyNav;
