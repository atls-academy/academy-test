import React, {useEffect, useRef} from 'react'

import { Box }                       from '@ui/layout'
import { Column }                    from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Text }                      from '@ui/text'

import { useRandomColor }            from './hooks'
import { body }                      from './helpers'
import { getRandomizedColorMessage } from './helpers'
import { checkResult }               from './helpers'

const StateAction: () => JSX.Element = () => {
  const randomColor = useRandomColor()
  const node = useRef(null)
  useEffect(() => {
    node.current.style.color = randomColor
  }, [])

  const handleClick = (event) => {
    // Тут ничего трогать не нужно
    checkResult(body(window))
  }

  return (
    <Box width='100%' height='100%' justifyContent='center'>
      <Column justifyContent='center'>
        <Layout>
          <Text fontWeight='medium' fontSize='big' ref={node}>
            {getRandomizedColorMessage<string>('I have randomized color')}
          </Text>
        </Layout>
        <Layout flexBasis={16} />
        <Layout>
          <Box>
            <Text fontWeight='medium' fontSize='big' onClick={handleClick}>
              Click me
            </Text>
          </Box>
        </Layout>
      </Column>
    </Box>
  )
}

export { StateAction }
