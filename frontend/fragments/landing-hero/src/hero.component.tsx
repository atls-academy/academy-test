import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'

const Hero: FC = () => (
  <Box border='1px solid black' width='100%' height='100%'>
    <Column width='100%' justifyContent='center' alignItems='center'>
      <Layout>
        <Text fontSize='big' fontWeight='bold'>
          Hero
        </Text>
      </Layout>
      <Layout flexBasis={32} />
      <Layout>
        <Text fontSize='normal' fontWeight='medium'>
          Scroll down V
        </Text>
      </Layout>
    </Column>
  </Box>
)

export { Hero }
