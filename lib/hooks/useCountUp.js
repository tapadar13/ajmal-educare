import { useState, useEffect, useRef } from 'react'

const useCountUp = (end, duration = 2000, start = 0, enabled = true) => {
  const [count, setCount] = useState(start)
  const [hasStarted, setHasStarted] = useState(false)
  const countRef = useRef(start)
  const requestRef = useRef()
  const startTimeRef = useRef()

  useEffect(() => {
    if (!enabled || hasStarted) return

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp
      }

      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      
      const current = Math.floor(start + (end - start) * easeOutQuart)
      
      if (current !== countRef.current) {
        countRef.current = current
        setCount(current)
      }

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    setHasStarted(true)
    requestRef.current = requestAnimationFrame(animate)

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [end, duration, start, enabled, hasStarted])

  const reset = () => {
    setHasStarted(false)
    setCount(start)
    countRef.current = start
    startTimeRef.current = null
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current)
    }
  }

  return { count, reset }
}

export default useCountUp
