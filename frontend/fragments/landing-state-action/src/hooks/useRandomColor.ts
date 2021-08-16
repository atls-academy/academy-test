import { useEffect } from 'react'
import { useRef }    from 'react'

const useRandomColor = () => {
  const node = useRef()
  const { random, floor } = Math
  const colors = ['red', 'green', 'blue']

  useEffect(() => {
    if (node && node.current) {
      // @ts-ignore
      node.current.style.color = colors[floor(random() * 3)]
    }
  }, [colors, floor, random])

  return node
}

export { useRandomColor }
