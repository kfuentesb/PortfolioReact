import { useState } from 'react'
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap'
import { useTotalMonths } from '../hooks/useTotalMonths'
import "../css/experience.css"

const experiences = [
  {
    title: 'Prácticas en DroneTools',
    company: 'DroneTools S.L.',
    time: '4 meses',
    workTime: 4,
    descriptionPoints: [
      'Desarrollo de una aplicación web propia para la gestión de flotas de drones, utilizando React y boostrap para el frontend, Spring Boot (Java) para el backend y PostgreSQL como base de datos.',
      'Diseño de la arquitectura completa e implementación de un entorno dockerizado para su despliegue.',
      'Desarrollo de funcionalidades clave como un panel de control para operadores y un sistema de envío de correos.',
      'Implementación de un control de versiones especializado con sistema de guardado y firmado digital.',
      'Programación de una lógica para el cambio manual de huso horario según la ubicación del usuario.',
      'Despliegue de la aplicación en un servidor de pruebas utilizando Docker y supervisión del rendimiento y la estabilidad.',
      'Diseño del Modelo Entidad Relación (MER) de nuestra aplicación web'
    ]
  }
]

export default function Experience() {
  const totalWorkLabel = useTotalMonths(experiences)
  // Estado para controlar qué tarjetas están expandidas (por índice)
  const [expandedCards, setExpandedCards] = useState<boolean[]>(
    new Array(experiences.length).fill(false)
  )

  const toggleExpand = (index: number) => {
    setExpandedCards(prev => {
      const next = [...prev]
      next[index] = !next[index]
      return next
    })
  }

  return (
    <section className="p-5 position-relative" id="experiencia" style={{ background: '#f8f9fa', minHeight: '100vh' }}>
      <Container style={{ maxWidth: '800px' }}>
        <div className="mb-5 pt-5 mt-5 text-center text-md-start">
          <h2 className="display-5 fw-bold text-uppercase" style={{ color: '#3eafc9' }}>
            Mi Experiencia laboral
          </h2>
          <Badge bg="dark" pill className="mt-3 px-3 py-2 fw-semibold">
            Tiempo Total Laboral: {totalWorkLabel}
          </Badge>
        </div>

        <Row className="flex-column g-4">
          {experiences.map((exp, index) => {
            const isExpanded = expandedCards[index]
            const visiblePoints = isExpanded
              ? exp.descriptionPoints
              : exp.descriptionPoints.slice(0, 3)
            const hasMore = exp.descriptionPoints.length > 3

            return (
              <Col key={index} className="w-100">
                <Card className="border-0 shadow-sm hover-card experience-card">
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
                      {visiblePoints.map((point, idx) => (
                        <li key={idx} className="mb-2 small">{point}</li>
                      ))}
                    </ul>

                    {hasMore && (
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => toggleExpand(index)}
                        className="mt-2"
                      >
                        {isExpanded ? (
                          <>Mostrar menos <i className="bi bi-chevron-up ms-1"></i></>
                        ) : (
                          <>Mostrar más <i className="bi bi-chevron-down ms-1"></i></>
                        )}
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}