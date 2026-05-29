import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
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
        <section className="p-5" id="experiencia" style={{ background: '#f8f9fa' }}>
            <Container style={{ maxWidth: '800px' }}> {/* Centra y acota el ancho para que el diseño vertical se vea más ejecutivo */}
                
                {/* TÍTULO PRINCIPAL */}
                <div className="mb-5 text-center text-md-start">
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
                                    borderLeft: '5px solid #d43f34', /* Línea de acento roja a juego con tu marca */
                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                                }}
                                // Reutilizamos efectos hover como en tus otros componentes
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
                                            {/* Puesto */}
                                            <Card.Title className="fw-bold fs-4 mb-1 text-dark">
                                                {exp.title}
                                            </Card.Title>
                                            
                                            {/* Empresa u Organización */}
                                            <h6 className="text-muted fw-semibold mb-3">
                                                <i className="bi bi-building me-2"></i>{exp.company}
                                            </h6>
                                        </Col>
                                        
                                        {/* Duración / Tiempo */}
                                        <Col md={3} className="text-md-end mb-3 mb-md-0">
                                            <Badge bg="dark" className="px-3 py-2 rounded-pill fw-normal">
                                                <i className="bi bi-clock me-1"></i> {exp.time}
                                            </Badge>
                                        </Col>
                                    </Row>
                                    
                                    {/* Descripción detallada */}
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