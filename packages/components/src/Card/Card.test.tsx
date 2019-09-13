import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '../../../test/utils/create_with_theme'
import { Card } from './Card'
import { CardMedia } from './CardMedia'

test('A Card', () => {
  const component = createWithTheme(<Card>🥑</Card>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A raised Card', () => {
  const component = createWithTheme(<Card raised={true}>🥑</Card>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A raised Card with a CardMedia block', () => {
  const component = createWithTheme(
    <Card raised={true}>
      <CardMedia image="http://placekitten.com/200/300" />
    </Card>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
