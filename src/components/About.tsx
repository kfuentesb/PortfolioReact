import { Container, Row, Col, Badge, Card } from 'react-bootstrap'
import "../css/about.css"
import profilePic from '../assets/profile2.jpg'

const skills = [
    { 
        category: 'Frontend', 
        items: ['React', 'JavaScript','TypeScript', 'HTML', 'CSS', 'Bootstrap'],
        icon: 'bi-window',
        color: '#3eafc9'
    },
    { 
        category: 'Backend', 
        icon: 'bi-hdd-network',
        items: ['Node.js', 'Java', 'C#', 'REST APIs', 'Spring Boot', 'Python'],
        color: '#d43f34'
    },
    { 
        category: 'Herramientas', 
        icon: 'bi-tools',
        items: ['Git', 'Unity', 'Docker', 'PostgreSQL'],
        color: '#22e094'
    },
]

export default function About() {
    return (
        <section id="sobre-mí" className="p-5" style={{ background: '#f8f9fa' }}>
            <Container>
                <Row className="align-items-center g-5">
                    {/* AVATAR */}
                    <Col md={4} className="text-center">
                        <div
                            className="rounded-circle mx-auto d-flex align-items-center justify-content-center border border-3 border-dark"
                            style={{ maxWidth: '320px', maxHeight: '320px' }}
                        >
                            <img 
                                src={profilePic} 
                                alt="Foto de Perfil" 
                                className="img-fluid rounded-circle profile-avatar" 
                            />
                        </div>
                    </Col>

                    <Col md={8}>
                        <div className="mb-4">
                            <Badge bg="dark" className="text-light mb-3 px-3 py-2 rounded-pill">
                                <i className="bi bi-person-workspace me-2"></i>Desarrollador Full Stack
                            </Badge>
                        </div>
                        <h2 className="text-uppercase fw-bold mb-4 display-5" style={{ color: '#3eafc9'}}>
                            Sobre mí
                        </h2>
                        <p className="mb-3 fw-bold fs-3 lead">
                            Soy <span style={{color: '#d43f34'}}>desarrollador web</span> recién graduado.
                            Mi próxima meta será especializarme en el desarrollo de videojuegos.
                        </p>

                        {/* GRID de habilidades */}
                        <Row className="g-3">
                            {skills.map(({ category, icon, items, color }) => (
                                <Col md={4} key={category}>
                                    <Card 
                                        className="h-100 border-0 shadow-sm hover-card"
                                        style={{ 
                                            transition: 'all 0.3s ease',
                                            borderTop: `4px solid ${color} !important`
                                        }}
                                    >
                                        <Card.Body className="p-3">
                                            <div className="d-flex align-items-center mb-3">
                                                <div 
                                                    className="rounded-circle d-flex align-items-center justify-content-center me-2"
                                                    style={{ 
                                                        width: 40, 
                                                        height: 40, 
                                                        backgroundColor: `${color}20`,
                                                        color: color,
                                                    }}
                                                >
                                                    <i className={`bi ${icon} fs-5`}></i>
                                                </div>
                                                <h6 className="mb-0 fw-bold text-uppercase" style={{ color: color }}>
                                                    {category}
                                                </h6>
                                            </div>
                                            <div className="d-flex flex-wrap gap-2">
                                                {items.map(skill => (
                                                    <Badge
                                                        key={skill}
                                                        className="rounded-pill px-3 py-2 fw-normal text-white bg-primary"
                                                    >
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        {/* Datos adicionales */}
                        <Row className="mt-4 g-3">
                        <Col xs={6} md={4}>
                            <div className="text-center p-3 rounded-3 stat-card" style={{ background: 'rgba(60, 181, 208, 0.1)' }}>
                                <i className="bi bi-calendar-check fs-2 mb-2 d-block" style={{ color: '#3eafc9' }}></i>
                                <span className="fw-bold fs-5 text-dark">2026</span>
                                <small className="d-block text-muted">Graduación</small>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className="text-center p-3 rounded-3 stat-card" style={{ background: 'rgba(110, 231, 183, 0.1)' }}>
                                <i className="bi bi-joystick fs-2 mb-2 d-block" style={{ color: '#6ee7b7' }}></i>
                                <span className="fw-bold fs-5 text-dark">Unity</span>
                                <small className="d-block text-muted">Certificado</small>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="text-center p-3 rounded-3 stat-card" style={{ background: 'rgba(195, 110, 231, 0.1)' }}>
                                <i className="bi bi-car-front-fill fs-2 mb-2 d-block" style={{ color: '#e36ee7' }}></i>
                                <span className="fw-bold fs-5 text-dark">Vehículo Propio</span>
                                <small className="d-block text-muted">Carnet B1</small>
                            </div>
                        </Col>
                    </Row>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}