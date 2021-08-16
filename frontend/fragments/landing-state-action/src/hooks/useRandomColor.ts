import { useEffect } from 'react'
import { useRef }    from 'react'

const useRandomColor = () => {
  const node = useRef(null)
  const { random, floor } = Math
  const colors = ['red', 'green', 'blue']

  useEffect(() => {
    node.current.style.color = colors[floor(random() * 3)]
  }, [colors, floor, random])

  return () => node
}

export { useRandomColor }
