import { useEffect, useState } from 'react'

export function useTypingEffect(phrases, typingSpeed = 70, pauseMs = 1800) {
  const [display, setDisplay] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex] ?? ''
    let timeout

    if (paused) {
      timeout = setTimeout(() => {
        setPaused(false)
        setDeleting(true)
      }, pauseMs)
    } else if (!deleting) {
      timeout = setTimeout(() => {
        const next = charIndex + 1
        setDisplay(current.slice(0, next))
        if (next >= current.length) {
          setPaused(true)
        } else {
          setCharIndex(next)
        }
      }, typingSpeed)
    } else {
      timeout = setTimeout(() => {
        if (charIndex <= 0) {
          setDeleting(false)
          setPhraseIndex((i) => (i + 1) % phrases.length)
        } else {
          const next = charIndex - 1
          setCharIndex(next)
          setDisplay(current.slice(0, next))
        }
      }, typingSpeed / 2)
    }

    return () => clearTimeout(timeout)
  }, [phrases, phraseIndex, charIndex, deleting, paused, typingSpeed, pauseMs])

  return display
}
