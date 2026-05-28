import { Container, Row, Col, Badge, Card } from 'react-bootstrap'

const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'] },
    { category: 'Backend', items: ['Node.js', 'Java', 'C#', 'REST APIs'] },
    { category: 'Herramientas', items: ['Git', 'Spring Boot', 'Unity', 'VS Code'] },
]

export default function About() {
    return (
        <section id="sobre-mí" className="p-5" style={{ background: '#f8f9fa' }}>
            <Container>
                <Row className="align-items-center g-5">

                    <Col md={4} className="text-center">
                        <div
                            className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
                            style={{ width: 260, height: 260, background: '#1a1a1a', border: '2px solid #6ee7b730', fontSize: '6rem' }}
                        >
                            👨‍💻
                        </div>
                    </Col>

                    <Col md={8}>
                        <h2 className="text-uppercase fw-bold mb-4" style={{ color: '#3eafc9'}}>
                            Sobre mí
                        </h2>
                        <p className="mb-3 fw-bold fs-3 lead">
                            Soy <span style={{color: '#d43f34'}}>desarrollador web</span> recién graduado. Mi próxima meta será especializarme en el desarollo de videojuegos.
                        </p>
                        <p className="mb-4 lh-lg lead">
                            Cuando no estoy programando, me gusta el deporte, los juegos y explorar nuevas tecnologías.
                        </p>

                        {skills.map(({ category, items }) => (
                            <div key={category} className="mb-3">
                                <p className="mb-2" style={{ color: '#6ee7b7', fontSize: '0.8rem', letterSpacing: '0.15em' }}>
                                    {category.toUpperCase()}
                                </p>
                                <div className="d-flex flex-wrap gap-2">
                                    {items.map(skill => (
                                        <Badge
                                            key={skill}
                                            bg="success"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </Col>

                </Row>
            </Container>
        </section>
    )
}