import { Nav, Navbar as BsNavbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'  // ← Eliminado useLocation

const navLinks = [
  { path: '/', label: 'Portada', icon: 'bi-house' },
  { path: '/experiencia', label: 'Experiencia', icon: 'bi-briefcase' },
  { path: '/contacto', label: 'Contacto', icon: 'bi-envelope' },
]

export default function Navbar() {
  // ← Eliminada la línea: const location = useLocation()

  return (
    <BsNavbar expand="md" className="position-fixed w-100 top-0" style={{ zIndex: 1030 }}>
      <Container className="justify-content-center">
        <div className="floating-nav d-flex align-items-center">
          <BsNavbar.Toggle aria-controls="navbar-nav" className="border-0 shadow-none me-2" />
          <BsNavbar.Collapse id="navbar-nav">
            <Nav className="align-items-center">
              {navLinks.map((link) => (
                <Nav.Item key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `fw-semibold px-3 py-2 rounded-pill text-decoration-none d-flex align-items-center ${ 
                        isActive 
                          ? 'text-dark bg-white shadow-sm' 
                          : 'text-secondary hover-nav-link'
                      }`
                    }
                    end
                  >
                    <i className={`bi ${link.icon} me-2`}></i>
                    {link.label}
                  </NavLink>
                </Nav.Item>
              ))}
            </Nav>
          </BsNavbar.Collapse>
        </div>
      </Container>
    </BsNavbar>
  )
}