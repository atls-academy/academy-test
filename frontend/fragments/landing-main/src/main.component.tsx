import React        from 'react'
import { FC }       from 'react'

import { Box }      from '@ui/layout'
import { Row }      from '@ui/layout'
import { Space }    from '@ui/text'
import { NextLink } from '@ui/link'

const Main: FC = () => (
  <Box border='1px solid black' width='100%' height='100%'>
    <Row height='100%' justifyContent='center' alignItems='center'>
      <Text fontSize='big' fontWeight='bold'>
        Travel
      </Text>
      <Space />
      <Text fontSize='big' fontWeight='medium'>
        to
      </Text>
      <Space />
      <Text fontSize='big' fontWeight='normal'>
        another
      </Text>
      <Space />
      <NextLink href='/state-action' fontWeight='slim' fontSize='big'>
        page
      </NextLink>
    </Row>
  </Box>
)

export { Main }
