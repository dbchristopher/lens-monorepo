const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/danielchristopher/Looker/lens-monorepo/.docz/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/danielchristopher/Looker/lens-monorepo/.docz/src/pages/404.js"))),
  "component---packages-styleguide-index-mdx": hot(preferDefault(require("/Users/danielchristopher/Looker/lens-monorepo/packages/styleguide/index.mdx"))),
  "component---packages-styleguide-components-table-header-cell-mdx": hot(preferDefault(require("/Users/danielchristopher/Looker/lens-monorepo/packages/styleguide/components/TableHeaderCell.mdx"))),
  "component---packages-styleguide-design-tokens-colors-mdx": hot(preferDefault(require("/Users/danielchristopher/Looker/lens-monorepo/packages/styleguide/design-tokens/colors.mdx"))),
  "component---packages-styleguide-components-link-mdx": hot(preferDefault(require("/Users/danielchristopher/Looker/lens-monorepo/packages/styleguide/components/Link.mdx")))
}

