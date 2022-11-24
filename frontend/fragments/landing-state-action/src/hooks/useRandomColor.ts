import { useEffect } from 'react'

const useRandomColor = (nodeTransferred) => {
  const node = nodeTransferred
  const { random, floor } = Math

  useEffect(() => {
    const colors = ['red', 'green', 'blue']
    if (node && node.current) {
      ;(node.current as any).style.color = colors[floor(random() * 3)]
    }
  }, [node, floor, random])

  return () => node
}

export { useRandomColor }
