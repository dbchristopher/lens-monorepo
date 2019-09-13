import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../../test/utils/snapshot'
import { Swatch } from './Swatch'

test('Default Swatch', () => {
  assertSnapshot(<Swatch />)
})

test('Swatch with hex value passed', () => {
  assertSnapshot(<Swatch color="#4c6670" />)
})

test('Swatch with width and height set', () => {
  assertSnapshot(<Swatch color="blue" width="50px" height="25px" />)
})
