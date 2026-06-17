export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <span className="fw-bold" style={{ color: '#3eafc9' }}>Kevin</span>
            <span className="text-muted ms-2">— Full Stack Developer</span>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="https://github.com/kfuentesb" target="_blank" rel="noopener noreferrer" className="text-light me-3 hover-nav-link">
              <i className="bi bi-github fs-5"></i>
            </a>
            <a href="https://www.linkedin.com/in/kevin-fuentes-benito/" target="_blank" rel="noopener noreferrer" className="text-light me-3 hover-nav-link">
              <i className="bi bi-linkedin fs-5"></i>
            </a>
          </div>
        </div>
        <hr className="my-3 border-secondary opacity-25" />
        <div className="text-center text-muted small">
          © {currentYear} Kevin. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}