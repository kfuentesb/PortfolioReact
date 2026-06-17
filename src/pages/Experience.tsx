import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
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
  },
  {
    title: 'Programación en Realidad Virtual y Realidad Aumentada aplicables en entornos 5G',
    company: 'Vodafone',
    time: '1 mes',
    workTime: 1,
    descriptionPoints: [
      'Aprendizaje de Unity y C# para desarrollo de aplicaciones interactivas.',
      'Montaje de prototipos de juegos de realidad aumentada y realidad virtual.',
      'Build de aplicaciones para móvil, consolas y PC desde Unity.',
      'Enfoque especializado en el desarrollo de experiencias de realidad virtual y realidad aumentada.'
    ]
  },
  {
    title: 'Montador y Animador de Eventos y Espectáculos',
    company: 'Best Way Group',
    time: '6 meses',
    workTime: 6,
    descriptionPoints: [
      'Jefe de montaje especializado en zonas de tecnología y redes.',
      'Atención cara al público, información e implicación para resolver problemas del cliente.',
      'Planificación y ejecución de actividades educativas y recreativas para niños y adolescentes.',
      'Gestión logística de recursos y equipamiento técnico.',
      'Trabajo con múltiple equipamiento de realidad virtual: Meta Quest 2 y HTC para uso lúdico de los usuarios.',
      'Formación a usuarios en el uso de dispositivos VR y resolución de incidencias técnicas en directo.',
      'Mantenimiento preventivo y correctivo del equipamiento VR fuera de evento.'
    ]
  },
  {
    title: 'Teleoperador Avanzado',
    company: 'KONECTA',
    time: '2018 - 2022',
    workTime: 48,
    descriptionPoints: [
      'Atención telefónica y resolución de problemas para más de 50 usuarios ORANGE diarios.',
      'Empatía y orientación del cliente en situaciones de conflicto.',
      'Uso simultáneo y gestión de más de 10 programas y herramientas de trabajo.'
    ]
  }
]

// Función auxiliar: convierte meses totales a formato años y meses
function formatWorkTime(totalMonths: number): string {
  if (totalMonths < 12) {
    return `${totalMonths} ${totalMonths === 1 ? 'mes' : 'meses'}`
  }

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  const yearLabel = years === 1 ? 'año' : 'años'
  const monthLabel = months === 1 ? 'mes' : 'meses'

  if (months === 0) {
    return `${years} ${yearLabel}`
  }

  return `${years} ${yearLabel} y ${months} ${monthLabel}`
}

const totalWorkMonths = experiences.reduce((total, experience) => total + experience.workTime, 0)
const totalWorkLabel = formatWorkTime(totalWorkMonths)

export default function Experience() {
  return (
    <section className="p-5 position-relative" id="experiencia" style={{ background: '#f8f9fa', minHeight: '100vh' }}>
      <Container style={{ maxWidth: '800px' }}> 
        <div className="mb-5 pt-5 mt-5 text-center text-md-start">
          <h2 className="display-5 fw-bold text-uppercase" style={{ color: '#3eafc9' }}>
            Mi Experiencia laboral
          </h2>
          <Badge bg="dark" pill className="mt-3 px-3 py-2 fw-semibold">
            Tiempo Total: {totalWorkLabel}
          </Badge>
        </div>

        <Row className="flex-column g-4">
          {experiences.map((exp, index) => (
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