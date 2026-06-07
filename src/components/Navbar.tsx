import { Nav } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  const getNavLinkClass = (path: string) => {
    const baseClasses = 'fw-semibold px-3 hover-nav-link'
    return location.pathname === path
      ? `${baseClasses} text-dark`
      : `${baseClasses} text-secondary`
  }

  return (
    <div>
      <div className="position-absolute top-0 start-50 translate-middle-x mt-4" style={{ zIndex: 10 }}>
        <Nav className="floating-nav">
          <Nav.Item>
            <Nav.Link href="/" className={getNavLinkClass('/')}>
              Portada
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/experiencia" className={getNavLinkClass('/experiencia')}>
              Experiencia
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>  
    </div>
  )
}