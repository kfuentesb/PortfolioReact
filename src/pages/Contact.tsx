import { Container, Row, Col, Card, Form, Button, Badge, Spinner } from 'react-bootstrap'
import { useState } from 'react'

const contactInfo = [
  {
    icon: 'bi-envelope-fill',
    label: 'Email',
    value: 'kevfueben@gmail.com',
    href: 'mailto:kevfueben@gmail.com',
    color: '#3eafc9'
  },
  {
    icon: 'bi-linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/kevin-fuentes-benito',
    href: 'https://www.linkedin.com/in/kevin-fuentes-benito',
    color: '#0077b5'
  },
  {
    icon: 'bi-github',
    label: 'GitHub',
    value: 'github.com/kfuentesb',
    href: 'https://github.com/kfuentesb',
    color: '#1a1a1a'
  },
  {
    icon: 'bi-geo-alt-fill',
    label: 'Ubicación',
    value: 'Sevilla, España',
    href: null,
    color: '#d43f34'
  }
]

// 🔴 REEMPLAZA ESTO CON TU URL DE FORMSPREE
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mrevvanq'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nuevo mensaje de ${formData.name} - Portfolio`,
          _replyto: formData.email
        })
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error al enviar:', error)
      setStatus('error')
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <section className="p-5 position-relative" id="contacto" style={{ background: '#f8f9fa', minHeight: '100vh' }}>
      <Container style={{ maxWidth: '1000px' }}>
        
        <div className="mb-5 pt-5 mt-5 text-center text-md-start">
          <Badge bg="dark" className="text-light mb-3 px-3 py-2 rounded-pill">
            <i className="bi bi-chat-dots me-2"></i>Contacto
          </Badge>
          <h2 className="display-5 fw-bold text-uppercase" style={{ color: '#3eafc9' }}>
            Hablemos
          </h2>
          <p className="lead text-muted mt-3">
            ¿Tienes un proyecto en mente o quieres contratarme? Estoy abierto a nuevas oportunidades.
          </p>
        </div>

        <Row className="g-5">
          <Col md={5}>
            <Row className="g-3">
              {contactInfo.map((info) => (
                <Col xs={12} key={info.label}>
                  <Card className="border-0 shadow-sm hover-card h-100">
                    <Card.Body className="p-4 d-flex align-items-center">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                        style={{
                          width: 50,
                          height: 50,
                          backgroundColor: `${info.color}15`,
                          color: info.color
                        }}
                      >
                        <i className={`bi ${info.icon} fs-4`}></i>
                      </div>
                      <div>
                        <small className="text-muted text-uppercase fw-semibold" style={{ fontSize: '0.75rem' }}>
                          {info.label}
                        </small>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="d-block fw-bold text-dark text-decoration-none hover-nav-link"
                            style={{ fontSize: '0.95rem' }}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="d-block fw-bold text-dark" style={{ fontSize: '0.95rem' }}>
                            {info.value}
                          </span>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <Card className="border-0 shadow-sm mt-3" style={{ background: 'rgba(34, 224, 148, 0.1)' }}>
              <Card.Body className="p-3 d-flex align-items-center">
                <span className="d-inline-block rounded-circle bg-success me-2" style={{ width: 10, height: 10 }}></span>
                <span className="fw-semibold text-success small">Disponible para trabajar</span>
              </Card.Body>
            </Card>
          </Col>

          <Col md={7}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4 p-md-5">
                <h5 className="fw-bold mb-4">Envíame un mensaje</h5>
                
                {/* Mensaje de éxito */}
                {status === 'success' && (
                  <div className="alert alert-success d-flex align-items-center mb-4" role="alert">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    ¡Mensaje enviado! Te responderé lo antes posible.
                  </div>
                )}

                {/* Mensaje de error */}
                {status === 'error' && (
                  <div className="alert alert-danger d-flex align-items-center mb-4" role="alert">
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    Hubo un error al enviar. Inténtalo de nuevo o contáctame por email.
                  </div>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold small text-muted">Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      disabled={isSubmitting}
                      className="py-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold small text-muted">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      disabled={isSubmitting}
                      className="py-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold small text-muted">Mensaje</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Cuéntame sobre tu proyecto o propuesta..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      disabled={isSubmitting}
                      className="py-2"
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 py-2 fw-semibold"
                    style={{ backgroundColor: '#3eafc9', borderColor: '#3eafc9' }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                          className="me-2"
                        />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send me-2"></i>Enviar mensaje
                      </>
                    )}
                  </Button>
                </Form>

                <p className="text-muted small text-center mt-3 mb-0">
                  <i className="bi bi-shield-check me-1"></i>
                  Tu información está segura. No comparto datos con terceros.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}