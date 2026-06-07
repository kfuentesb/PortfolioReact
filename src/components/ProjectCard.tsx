// components/ProjectCard.tsx
import { Card, Badge, Button } from 'react-bootstrap'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  emoji: React.ReactNode
  github?: string
}

export default function ProjectCard({ title, description, tags, emoji, github }: ProjectCardProps) {
  return (
    <Card className="h-100 rounded-2 border-4 hover-card project-card">
      <Card.Body className="p-4 d-flex flex-column">
        <div className="display-4">{emoji}</div>
        <Card.Title className="text-white fw-semibold fs-6 mt-2">
          {title}
        </Card.Title>
        <Card.Text className="text-white-50 small lh-base flex-grow-1">
          {description}
        </Card.Text>
        <div className="d-flex flex-wrap gap-2 my-3">
          {tags.map(tag => (
            <Badge bg="success" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
        <div>
          {github ? (
            <Button variant="outline-info" size="sm" href={github} target="_blank">
              Ver en Github
            </Button>
          ) : (
            <Badge bg="danger">
              <i className="bi bi-lock-fill me-1"></i> Repositorio privado
            </Badge>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}