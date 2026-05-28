import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap'

const projects = [
    // Lista de proyectos
    {
        title: 'NextIndie',
        description: 'Una plataforma de descubrimiento de juegos indies, con trailers, comunidad y calendario.',
        tags: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
        emoji: <i className="bi bi-controller" style={{ color: '#3eafc9' }}></i>,
        github: 'https://github.com/kfuentesb/nextindie'
    },
    {
        title: 'Drone Gestory',
        description: 'Aplicación de gestión de flotas de drones para empresas.',
        tags: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker'], // He usado las mismas tecnologías
        emoji: <i className="bi bi-airplane-engines" style={{ color: '#3eafc9' }}></i>,
        // Repo privado
    },
]

export default function Projects() {
    return (
        <section className="p-5 bg-dark bg-opacity-90" id="proyectos">
            <Container>
                <div className="mb-5">
                    <h2 className="display-5 fw-bold text-light">Mis Proyectos</h2>
                </div>

                <Row className="g-4">
                    {projects.map((project) => (
                        <Col md={4} key={project.title}>
                            <Card className="h-100 rounded-2 border-4" style={{
                                background: '#1a1a1a', // Tonalidad diferente a bg-dark para que se note
                                border: '1px solid #2a2a2a',
                                height: '100%',
                                // Para que la transition de border se viese tuve que cambiarlo de boostrap a css inline.
                                transition: 'border-color 0.2s',
                            }}
                                onMouseEnter={e => e.currentTarget.style.borderColor = '#f8f9fa'}
                                onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2a2a'}
                            >
                                <Card.Body className="p-4 d-flex flex-column">
                                    <div className="display-4">{project.emoji}</div>
                                    <Card.Title className="text-white fw-semibold fs-6 mt-2">
                                        {project.title}
                                    </Card.Title>
                                    <Card.Text className="text-white-50 small lh-base flex-grow-1">
                                        {project.description}
                                    </Card.Text>
                                    <div className="d-flex flex-wrap gap-2 my-3">
                                        {project.tags.map(tag => (
                                            <Badge bg="success" key={tag}>
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div>
                                        {project.github ? (
                                            <Button variant="outline-info" size="sm" href={project.github} target="_blank">
                                                Ver en Github
                                            </Button>
                                        ):(
                                            <Badge bg="danger">
                                                <i className="bi bi-lock-fill me-1"></i> Repositorio privado
                                            </Badge>
                                        )}
                                        
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}