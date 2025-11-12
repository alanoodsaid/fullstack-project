
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../image/logo.jpg';

export default function Header() {
  return (
    <Navbar
      expand="md"
      light
      className="px-4"
      style={{ backgroundColor: '#F26B1D' }}
    >
      {/* Left side: Platform name - Links to Home */}
      <NavbarBrand tag={Link} to="/" className="fw-bold text-dark">
        Event Platform
      </NavbarBrand>

      {/* Right side: Nav links + logo */}
      <div className="d-flex align-items-center ms-auto">
        <Nav navbar className="me-3">
          <NavItem className="me-3">
            <Link  to="/login" className="text-dark fw-semibold text-decoration-none">
              LogIn
            </Link>
          </NavItem>
        </Nav>
        
        {/* Logo Image - Replaces Admin */}
        <img
          src={logo}
          alt="Event Platform Logo"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </div>
    </Navbar>
  );
}