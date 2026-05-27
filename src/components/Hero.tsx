import { Container, Row, Col, Button } from 'react-bootstrap'
import profilePic from '../assets/profile.jpg'
import '../css/hero-background.css' // Animación de cartas

const cardSymbols = [
  { symbol: '♠', color: '#1a1a1a' },
  { symbol: '♥', color: '#c0392b' },
  { symbol: '♦', color: '#c0392b' },
  { symbol: '♣', color: '#1a1a1a' },
  { symbol: '♠', color: '#1a1a1a' },
  { symbol: '♥', color: '#c0392b' },
  { symbol: '♦', color: '#c0392b' },
  { symbol: '♣', color: '#1a1a1a' },
  { symbol: '♠', color: '#1a1a1a' },
  { symbol: '♥', color: '#c0392b' },
  { symbol: '♦', color: '#c0392b' },
  { symbol: '♣', color: '#1a1a1a' },
  { symbol: '♠', color: '#1a1a1a' },
  { symbol: '♥', color: '#c0392b' },
  { symbol: '♦', color: '#c0392b' },
  { symbol: '♣', color: '#1a1a1a' },
  { symbol: '♠', color: '#1a1a1a' },
  { symbol: '♥', color: '#c0392b' },
  { symbol: '♦', color: '#c0392b' },
  { symbol: '♣', color: '#1a1a1a' },
]

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      {/* Animación de fondo: símbolos de cartas abajo */}
      <div className="cards-container">
        {cardSymbols.map((card, i) => (
          <span
            key={i}
            className="card-symbol"
            style={{ color: card.color }}
          >
            {card.symbol}
          </span>
        ))}
      </div>

      {/* Contenido Header */}
      <Container className="hero-content">
        <Row className="align-items-center">
          <Col md={8} className="text-center text-md-start">
            <h1 className="display-6 fw-bold">
              Hola. Soy <span style={{ color: '#3eafc9'}}>Kevin</span>✌️
            </h1>
            <h1 className="display-5 fw-bold">
              <span style={{ color: '#d43f34' }}>Full Stack</span> Developer
            </h1>
            <p className="lead mt-4 mb-5 text-muted">
              Me apasiona crear aplicaciones web modernas utilizando React y Bootstrap. Siempre estoy buscando nuevos desafíos para seguir creciendo como desarrollador.
            </p>
            <Button variant="primary" size="lg" href="#proyectos">
              Ver Proyectos
            </Button>
          </Col>
          <Col md={4} className="text-center mt-4 mt-md-0">
            <img
              src={profilePic} // Sustituir por imagen de perfil
              alt="Foto de perfil"
              className="img-fluid rounded-circle"
              // boxShadow sin boostrap para una sombra más intensa
              style={{ maxWidth: '250px', boxShadow: '10px 10px 15px rgba(0,0,0,0.3)' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
