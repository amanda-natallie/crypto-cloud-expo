export const handleScrollIntoView = (anchor: string) => {
  const element = document.querySelector(anchor)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export const getCountdown = (): {
  days: number
  hours: number
  minutes: number
  seconds: number
} => {
  const targetDate = new Date('2023-10-05T18:30:00+04:00')
  const now = new Date()

  const timeDifference = targetDate.getTime() - now.getTime()

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}
