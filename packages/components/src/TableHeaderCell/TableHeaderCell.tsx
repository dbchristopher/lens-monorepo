import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {
  color,
  ColorProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  space,
  SpaceProps,
  WidthProps,
} from 'styled-system'

export type BaseTableHeaderCellProps = ColorProps &
  FontSizeProps &
  FontWeightProps &
  SpaceProps

const StyledTableHeaderCell: FunctionComponent<
  BaseTableHeaderCellProps
> = styled.th`
  ${space}
  ${fontSize}
  ${color}
  ${fontWeight}
`

export interface ExternalTableHeaderCellProps extends WidthProps {
  children: React.ReactNode
}

const TableHeaderCell: FunctionComponent<
  ExternalTableHeaderCellProps
> = props => (
  <StyledTableHeaderCell
    py="xsmall"
    fontSize="xsmall"
    color="palette.charcoal400"
    fontWeight={600}
    {...props}
  />
)

export default TableHeaderCell
