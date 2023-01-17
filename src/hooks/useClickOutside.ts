import { useEffect, useRef } from 'react'

export const useClickOutside = (action: any) => {
  const ref = useRef<any>(null)

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        action()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, action])

  return ref
}
