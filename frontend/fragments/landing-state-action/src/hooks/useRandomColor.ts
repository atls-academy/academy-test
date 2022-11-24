import { useEffect } from 'react'
import { useRef }    from 'react'

const useRandomColor = (() => {
  const node = useRef(null)
  const { random, floor } = Math

  useEffect(() => {
    const colors = ['red', 'green', 'blue']
    if (node && node.current) {
      ;(node.current as any).style.color = colors[floor(random() * 3)]
    }
  }, [floor, random])

  return () => node
})()

export { useRandomColor }
