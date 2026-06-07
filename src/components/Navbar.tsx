import { Nav } from 'react-bootstrap'
import { useState } from 'react'

export default function Navbar() {
  const [activePath, setActivePath] = useState(() => {
    return typeof window !== 'undefined' ? window.location.pathname : '/';
  });

  const getNavLinkClass = (path: string) => {
    const baseClasses = 'fw-semibold px-3 hover-nav-link';
    return activePath === path
      ? `${baseClasses} text-dark`
      : `${baseClasses} text-secondary`;
  }

  return (
    <div>
      <div className="position-absolute top-0 start-50 translate-middle-x mt-4" style={{ zIndex: 10 }}>
        <Nav className="floating-nav">
          <Nav.Item>
            <Nav.Link href="/" onClick={() => setActivePath('/')} className={getNavLinkClass('/')}>
              Portada
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/experiencia" onClick={() => setActivePath('/experiencia')} className={getNavLinkClass('/experiencia')}>
              Experiencia
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>  
    </div>
  )
}
