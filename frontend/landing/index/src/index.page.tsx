import React    from 'react'
import { FC }   from 'react'

import { Hero } from '@fragments/landing-hero'
import { Main } from '@fragments/landing-main'

const IndexPage: FC = () => (
  <>
    <Hero />
    <Main />
  </>
)

export default IndexPage
