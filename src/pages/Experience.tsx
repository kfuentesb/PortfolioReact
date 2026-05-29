import { Container, Row, Col, Card, Badge, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom' // 1. IMPORTANTE: Añadida la importación para las rutas
import "../css/experience.css"  

const experiences = [
    {
        title: 'Prácticas en DroneTools',
        company: 'DroneTools S.L.',
        time: '4 meses',
        descriptionPoints: [
            'Desarrollo de una aplicación web para la gestión de flotas de drones, utilizando React para el frontend, Spring Boot (Java) para el backend y PostgreSQL como base de datos.',
            'Diseño de la arquitectura completa e implementación de un entorno dockerizado para su despliegue.',
            'Desarrollo de funcionalidades clave como un panel de control para operadores y un sistema de envío de correos.',
            'Implementación de un control de versiones especializado con sistema de guardado y firmado digital.',
            'Programación de una lógica para el cambio manual de huso horario según la ubicación del usuario.'
        ]
    }
]

export default function Experience() {
    return (
        <section className="p-5 position-relative" id="experiencia" style={{ background: '#f8f9fa', minHeight: '100vh' }}>
            
            {/* Navbar minimalista */}
            <div className="position-absolute top-0 start-50 translate-middle-x mt-4" style={{ zIndex: 10 }}>
                <Nav className="bg-white bg-opacity-75 backdrop-blur px-4 py-2 rounded-pill shadow-sm border border-light">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/" className="fw-semibold px-3 text-dark hover-nav-link">
                            Portada
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/experiencia" className="fw-semibold px-3 text-secondary hover-nav-link">
                            Experiencia
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>

            <Container style={{ maxWidth: '800px' }}> 
                
                {/* TÍTULO PRINCIPAL - Ajustado con pt-5 y mt-5 para evitar solapamientos */}
                <div className="mb-5 pt-5 mt-5 text-center text-md-start">
                    <h2 className="display-5 fw-bold text-uppercase" style={{ color: '#3eafc9' }}>
                        Mi Experiencia laboral
                    </h2>
                </div>

                {/* LISTA DE EXPERIENCIAS EN VERTICAL */}
                <Row className="flex-column g-4">
                    {experiences.map((exp, index) => (
                        <Col key={index} className="w-100">
                            <Card 
                                className="border-0 shadow-sm hover-card" 
                                style={{ 
                                    borderLeft: '5px solid #d43f34', 
                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.08)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,0.075)';
                                }}
                            >
                                <Card.Body className="p-4">
                                    <Row className="align-items-start">
                                        <Col md={9}>
                                            <Card.Title className="fw-bold fs-4 mb-1 text-dark">
                                                {exp.title}
                                            </Card.Title>
                                            
                                            <h6 className="text-muted fw-semibold mb-3">
                                                <i className="bi bi-building me-2"></i>{exp.company}
                                            </h6>
                                        </Col>
                                        
                                        <Col md={3} className="text-md-end mb-3 mb-md-0">
                                            <Badge bg="dark" className="px-3 py-2 rounded-pill fw-normal">
                                                <i className="bi bi-clock me-1"></i> {exp.time}
                                            </Badge>
                                        </Col>
                                    </Row>
                                    
                                    <ul className="text-secondary lh-base mt-2 ps-3" style={{ listStyleType: 'disc' }}>
                                        {exp.descriptionPoints.map((point, idx) => (
                                            <li key={idx} className="mb-2 small">{point}</li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                
            </Container>
        </section>
    )
}