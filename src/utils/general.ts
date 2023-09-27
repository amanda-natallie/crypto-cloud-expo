export const handleScrollIntoView = (anchor: string) => {
  const element = document.querySelector(anchor)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
