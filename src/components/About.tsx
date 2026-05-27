import { Container, Row, Col, Badge } from 'react-bootstrap'

const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'REST APIs'] },
    { category: 'Herramientas', items: ['Git', 'Vite', 'Figma', 'VS Code'] },
]

export default function About() {
    return (
        <section id="sobre-mí" style={{ background: '#0a0a0a', padding: '6rem 0' }}>
            <Container>
                <Row className="align-items-center g-5">

                    <Col lg={5} className="text-center">
                        <div
                            className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
                            style={{ width: 260, height: 260, background: '#1a1a1a', border: '2px solid #6ee7b730', fontSize: '6rem' }}
                        >
                            👨‍💻
                        </div>
                    </Col>

                    <Col lg={7}>
                        <p style={{ color: '#6ee7b7', letterSpacing: '0.2em', fontSize: '0.85rem' }} className="text-uppercase mb-2">
                            Quién soy
                        </p>
                        <h2 className="fw-bold mb-4" style={{ fontSize: '2.2rem', color: '#f5f5f0' }}>
                            Sobre mí
                        </h2>
                        <p style={{ color: '#9ca3af', lineHeight: 1.9 }} className="mb-3">
                            Soy desarrollador web con X años de experiencia construyendo productos digitales.
                            Me especializo en el frontend pero me manejo bien en toda la stack.
                        </p>
                        <p style={{ color: '#9ca3af', lineHeight: 1.9 }} className="mb-4">
                            Cuando no estoy programando, me gusta el diseño, la música y explorar nuevas tecnologías.
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
                                            style={{ background: '#1a1a1a', color: '#d1d5db', border: '1px solid #2a2a2a', fontWeight: 400, fontSize: '0.8rem', padding: '0.45em 0.9em' }}
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