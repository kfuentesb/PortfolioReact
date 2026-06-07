// Projects.tsx
import { Container, Row, Col } from 'react-bootstrap'
import { useRef, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import "../css/projects.css"

const projects = [
  {
    title: 'NextIndie',
    description: 'Una plataforma de descubrimiento de juegos indies, con trailers, comunidad y calendario.',
    tags: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'REST APIs'],
    emoji: <i className="bi bi-controller" style={{ color: '#3eafc9' }}></i>,
    github: 'https://github.com/kfuentesb/nextindie'
  },
  {
    title: 'Drone Gestory',
    description: 'Aplicación de gestión de flotas de drones para empresas.',
    tags: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    emoji: <i className="bi bi-airplane-engines" style={{ color: '#3eafc9' }}></i>,
    // github omitido → repo privado
  },
]

export default function Projects() {
  const firstProjectRef = useRef<HTMLDivElement>(null)

  const scrollToFirst = () => {
    firstProjectRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Opcional: scroll automático al cargar la página
  useEffect(() => {
    const timer = setTimeout(() => scrollToFirst(), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="p-5 bg-dark bg-opacity-90" id="proyectos">
      <Container>
        <div className="mb-5">
          <h2 className="display-5 fw-bold text-light">Mis Proyectos</h2>
        </div>

        <Row className="g-4">
          {projects.map((project) => (
            <Col md={4} key={project.title}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                emoji={project.emoji}
                github={project.github}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}