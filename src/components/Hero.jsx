import { Container, Row, Col, Button } from 'react-bootstrap'

function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={7}>
            <p style={{ color: '#6ee7b7', letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Disponible para trabajar
            </p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, color: '#f5f5f0', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Hola, soy <br />
              <span style={{ color: '#6ee7b7' }}>Tu Nombre</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#9ca3af', maxWidth: '480px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Desarrollador frontend apasionado por crear interfaces bonitas y funcionales.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <Button
                href="#proyectos"
                style={{ background: '#6ee7b7', border: 'none', color: '#0a0a0a', fontWeight: 600, padding: '0.75rem 2rem', borderRadius: '4px' }}
              >
                Ver proyectos
              </Button>
              <Button
                href="#contacto"
                variant="outline-light"
                style={{ padding: '0.75rem 2rem', borderRadius: '4px' }}
              >
                Contactar
              </Button>
            </div>
          </Col>
          <Col lg={5} className="d-none d-lg-flex justify-content-center mt-5 mt-lg-0">
            <div style={{
              width: 280, height: 280, borderRadius: '50%',
              background: 'linear-gradient(135deg, #6ee7b7 0%, #3b82f6 100%)',
              opacity: 0.15,
              position: 'absolute',
              filter: 'blur(60px)'
            }} />
            <div style={{
              width: 240, height: 240, borderRadius: '50%',
              border: '2px solid #6ee7b720',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '5rem'
            }}>
              👨‍💻
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero