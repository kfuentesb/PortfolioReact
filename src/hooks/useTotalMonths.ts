interface Experience {
  workTime: number
}

export function useTotalMonths(experiences: Experience[]): string {
  const total = experiences.reduce((sum, exp) => sum + exp.workTime, 0)
  return `${total} ${total === 1 ? 'mes' : 'meses'}`
}