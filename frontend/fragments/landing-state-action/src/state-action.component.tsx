import React                         from 'react'
import { FC }                        from 'react'

import { Box }                       from '@ui/layout'
import { Column }                    from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Text }                      from '@ui/text'

import { useRandomColor }            from './hooks'
import { body }                      from './helpers'
import { getRandomizedColorMessage } from './helpers'
import { checkResult }               from './helpers'

const StateAction: FC = () => {
  const node = useRandomColor()

  const handleClick = (event) => {
    // Тут ничего трогать не нужно
    checkResult(body(window))
  }

  return (
    <Box width='100%' height='100%' justifyContent='center'>
      <Column justifyContent='center'>
        <Layout>
          <Text fontWeight='medium' fontSize='big' ref={node}>
            {getRandomizedColorMessage<number>('I have randomized color')}
          </Text>
        </Layout>
        <Layout flexBasis={16} />
        <Layout>
          <Box cursor='pointer'>
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
