
import { useEffect, useState } from 'react'

export default function Typewriter({ texts = [], typingSpeed = 65, deletingSpeed = 35, pause = 1500 }) {
  const [textIndex, setTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!texts.length) return

    const currentText = texts[textIndex % texts.length]
    let delay = deleting ? deletingSpeed : typingSpeed

    if (!deleting && displayText === currentText) {
      delay = pause
    } else if (deleting && displayText === '') {
      delay = 350
    }

    const timer = setTimeout(() => {
      if (!deleting && displayText === currentText) {
        setDeleting(true)
      } else if (deleting && displayText === '') {
        setDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
      } else if (deleting) {
        setDisplayText(currentText.slice(0, displayText.length - 1))
      } else {
        setDisplayText(currentText.slice(0, displayText.length + 1))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [texts, textIndex, displayText, deleting, typingSpeed, deletingSpeed, pause])

  return (
    <span className="typewriter">
      <span>{displayText}</span>
      <span className="typewriter-cursor" aria-hidden="true">|</span>
    </span>
  )
}