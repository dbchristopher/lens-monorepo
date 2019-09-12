import { palette } from './palette'

const {
  blue500,
  charcoal000,
  charcoal100,
  charcoal300,
  charcoal400,
  charcoal500,
  charcoal600,
  primary500,
  primary600,
  primary700,
  purple000,
  purple100,
  purple400,
  red000,
  red100,
  red400,
  red500,
  red600,
  red700,
  white,
} = palette

export interface SemanticColor {
  /** The base color for a named color set. */
  main: string
  /** Usually a tint of the main color, used in cases like visited links or pressed buttons. */
  light: string
  /** Usually an even lighter tint of the main color. */
  lighter: string
  /** Base color for links in a color group. */
  linkColor: string
  /** Usually a dark tint of the main color, used to indicate interactivity such as button hover. */
  dark: string
  /** Usually an even darker tint of the main color, used to indicate an action like button press. */
  darker: string
  /** Primary border color for a semantic color group. */
  borderColor: string
  /** Base text color for a semantic color group. */
  text: string
  /** Alternative text color */
  altText: string
}

/**
 * Defines color values for specific color groups.
 *
 * SemanticColors is one part of a two part color system, which also includes
 * Palette. The values defined here can be thought of as color groups that may
 * be used directly by components.
 *
 * Each SemanticColor should define the full set of possible color values, such
 * as main, linkColor, etc so that a color objects can be interchanged without
 * error across components.
 *
 * Some components accept entire color groups to define their appearance.
 * <Button/> is a good example of this.
 *
 * This idea is borrowed directly from the Office UI Fabric component
 * implementation:
 * https://github.com/officedev/office-ui-fabric-react/wiki/Theming#what-are-theme-slots
 */
export interface SemanticColors {
  /** Colors used for primary actions. */
  primary: SemanticColor
  /** Colors used for secondary actions. */
  secondary: SemanticColor
  /** Colors used for dangerous actions. */
  danger: SemanticColor
  /** Colors used for neutral actions. */
  neutral: SemanticColor
}

export const semanticColors: SemanticColors = {
  danger: {
    altText: red400,
    borderColor: charcoal300,
    dark: red600,
    darker: red700,
    light: red100,
    lighter: red000,
    linkColor: blue500,
    main: red500,
    text: white,
  },
  neutral: {
    altText: charcoal600,
    borderColor: charcoal300,
    dark: charcoal500,
    darker: charcoal600,
    light: charcoal100,
    lighter: charcoal000,
    linkColor: blue500,
    main: charcoal400,
    text: white,
  },
  primary: {
    altText: purple400,
    borderColor: charcoal300,
    dark: primary600,
    darker: primary700,
    light: purple100,
    lighter: purple000,
    linkColor: blue500,
    main: primary500,
    text: white,
  },
  secondary: {
    altText: purple400,
    borderColor: charcoal300,
    dark: primary600,
    darker: primary700,
    light: purple100,
    lighter: purple000,
    linkColor: blue500,
    main: primary500,
    text: white,
  },
}
