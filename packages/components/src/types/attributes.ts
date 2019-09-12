import { FontWeights, RampSizes, SpacingSizes } from '../style'

import {
  ResponsiveBorderRadiusValue,
  ResponsiveHeightValue,
} from '../style/responsive'

export interface CustomizableAttributes {
  [key: string]: any
  borderRadius?: ResponsiveBorderRadiusValue
  color?: string
  fontSize?: RampSizes
  fontWeight?: FontWeights
  height?: ResponsiveHeightValue
  px?: SpacingSizes
  py?: SpacingSizes
}
