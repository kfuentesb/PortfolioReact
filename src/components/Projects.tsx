import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap'

const projects = [
    {
        title: 'E-commerce App',
        description: 'Tienda online con carrito de compras, autenticación y pasarela de pago.',
        tags: ['React', 'Node.js', 'MongoDB'],
        demo: '#',
        code: '#',
        emoji: '🛒',
    },
    {
        title: 'Dashboard Analytics',
        description: 'Panel de control con gráficas en tiempo real y gestión de usuarios.',
        tags: ['React', 'Chart.js', 'Firebase'],
        demo: '#',
        code: '#',
        emoji: '📊',
    },
    {
        title: 'App del Tiempo',
        description: 'Aplicación meteorológica con geolocalización y previsión a 7 días.',
        tags: ['React', 'API REST', 'CSS'],
        demo: '#',
        code: '#',
        emoji: '🌤️',
    },
]

function Projects() {
    return (
        <section id="proyectos" style={{ background: '#0f0f0f', padding: '6rem 0' }}>
            <Container>
                <div className="mb-5">
                    <p style={{ color: '#6ee7b7', letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase' }}>
                        Mi trabajo
                    </p>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#f5f5f0' }}>Proyectos</h2>
                </div>

                <Row className="g-4">
                    {projects.map((project) => (
                        <Col md={4} key={project.title}>
                            <Card style={{
                                background: '#1a1a1a',
                                border: '1px solid #2a2a2a',
                                borderRadius: '12px',
                                height: '100%',
                                transition: 'border-color 0.2s',
                            }}
                                  onMouseEnter={e => e.currentTarget.style.borderColor = '#6ee7b740'}
                                  onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2a2a'}
                            >
                                <Card.Body className="p-4 d-flex flex-column">
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{project.emoji}</div>
                                    <Card.Title style={{ color: '#f5f5f0', fontWeight: 600, fontSize: '1.1rem' }}>
                                        {project.title}
                                    </Card.Title>
                                    <Card.Text style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.7, flexGrow: 1 }}>
                                        {project.description}
                                    </Card.Text>
                                    <div className="d-flex flex-wrap gap-2 my-3">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} style={{ background: '#6ee7b715', color: '#6ee7b7', fontWeight: 400, fontSize: '0.75rem', padding: '0.4em 0.8em' }}>
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="d-flex gap-2 mt-auto">
                                        <Button href={project.demo} size="sm" style={{ background: '#6ee7b7', border: 'none', color: '#0a0a0a', fontWeight: 600, borderRadius: '4px' }}>
                                            Demo
                                        </Button>
                                        <Button href={project.code} size="sm" variant="outline" style={{ border: '1px solid #3a3a3a', color: '#9ca3af', borderRadius: '4px' }}>
                                            Código
                                        </Button>
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

export default Projects