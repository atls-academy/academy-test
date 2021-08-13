const useRandomColor = ()=> {
  const { random, floor } = Math
  const colors = ['red', 'green', 'blue']
  const currentColor =  colors[floor(random() * 3)]



  return currentColor
}

export { useRandomColor }
