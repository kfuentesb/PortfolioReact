import { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import profilePic from '../assets/profile.jpg'
import '../css/hero-background.css'

// Array base fuera del componente (se usa para inicializar el estado)
const initialCardSymbols = [
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

// Función auxiliar: Fisher-Yates shuffle
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function Hero() {
  const [cardSymbols, setCardSymbols] = useState(initialCardSymbols)

  useEffect(() => {
    const interval = setInterval(() => {
      setCardSymbols(prev => shuffleArray(prev))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero-section" id="home">
      {/* Animación de fondo: símbolos de cartas abajo */}
      <div className="cards-container">
        {cardSymbols.map((card, i) => (
          <span
            key={`${card.symbol}-${i}`}
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
              src={profilePic}
              alt="Foto de perfil"
              className="img-fluid rounded-circle"
              style={{ maxWidth: '350px', boxShadow: '10px 10px 15px rgba(0,0,0,0.4)' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}