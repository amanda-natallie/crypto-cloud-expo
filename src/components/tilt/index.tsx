import React, { useRef, useEffect, ReactNode } from 'react'

interface TiltProps {
  children: ReactNode
}

const TiltComponent: React.FC<TiltProps> = ({ children }) => {
  const elRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = elRef.current

    const handleMove = (e: MouseEvent) => {
      if (el) {
        el.style.transition = 'all 0.2s ease'
        const height = el.clientHeight
        const width = el.clientWidth

        const xVal = e.clientX - el.getBoundingClientRect().left
        const yVal = e.clientY - el.getBoundingClientRect().top

        const yRotation = 20 * ((xVal - width / 2) / width)
        const xRotation = -20 * ((yVal - height / 2) / height)

        const string = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
        el.style.transform = string
      }
    }

    const handleMouseOut = () => {
      if (el) {
        el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
      }
    }

    const handleMouseDown = () => {
      if (el) {
        el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
      }
    }

    const handleMouseUp = () => {
      if (el) {
        el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
      }
    }

    if (el) {
      el.addEventListener('mousemove', handleMove)
      el.addEventListener('mouseout', handleMouseOut)
      el.addEventListener('mousedown', handleMouseDown)
      el.addEventListener('mouseup', handleMouseUp)

      return () => {
        el.removeEventListener('mousemove', handleMove)
        el.removeEventListener('mouseout', handleMouseOut)
        el.removeEventListener('mousedown', handleMouseDown)
        el.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [])

  return <div ref={elRef}>{children}</div>
}

export default TiltComponent
