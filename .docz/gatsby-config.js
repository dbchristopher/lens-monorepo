const {merge} = require('lodash/fp');

let custom;
try {
	custom = require('./gatsby-config.custom');
} catch (err) {
	custom = {};
}

const config = {
	siteMetadata: {
		title: 'Looker Lens Root',
		description: 'My awesome app using docz'
	},
	plugins: [
		{
			resolve: 'gatsby-theme-docz',
			options: {
				themeConfig: {},
				themesDir: 'src',
				docgenConfig: {},
				menu: [],
				mdPlugins: [],
				hastPlugins: [],
				ignore: [],
				typescript: false,
				ts: false,
				propsParser: true,
				'props-parser': true,
				debug: false,
				native: false,
				openBrowser: false,
				o: false,
				open: false,
				'open-browser': false,
				root: '/Users/danielchristopher/Looker/lens-monorepo/.docz',
				base: '/',
				source: './',
				src: './',
				files: '**/*.{md,markdown,mdx}',
				public: '/public',
				dest: '.docz/dist',
				d: '.docz/dist',
				editBranch: 'master',
				eb: 'master',
				'edit-branch': 'master',
				config: '',
				title: 'Looker Lens Root',
				description: 'My awesome app using docz',
				host: 'localhost',
				port: 3000,
				p: 3000,
				separator: '-',
				paths: {
					root: '/Users/danielchristopher/Looker/lens-monorepo',
					templates:
						'/Users/danielchristopher/Looker/lens-monorepo/node_modules/docz-core/dist/templates',
					packageJson:
						'/Users/danielchristopher/Looker/lens-monorepo/package.json',
					docz: '/Users/danielchristopher/Looker/lens-monorepo/.docz',
					cache:
						'/Users/danielchristopher/Looker/lens-monorepo/.docz/.cache',
					app:
						'/Users/danielchristopher/Looker/lens-monorepo/.docz/app',
					appPublic:
						'/Users/danielchristopher/Looker/lens-monorepo/.docz/public',
					appNodeModules:
						'/Users/danielchristopher/Looker/lens-monorepo/node_modules',
					appPackageJson:
						'/Users/danielchristopher/Looker/lens-monorepo/package.json',
					appYarnLock:
						'/Users/danielchristopher/Looker/lens-monorepo/node_modules/docz-core/yarn.lock',
					ownNodeModules:
						'/Users/danielchristopher/Looker/lens-monorepo/node_modules/docz-core/node_modules',
					gatsbyConfig:
						'/Users/danielchristopher/Looker/lens-monorepo/gatsby-config.js',
					gatsbyBrowser:
						'/Users/danielchristopher/Looker/lens-monorepo/gatsby-browser.js',
					gatsbyNode:
						'/Users/danielchristopher/Looker/lens-monorepo/gatsby-node.js',
					gatsbySSR:
						'/Users/danielchristopher/Looker/lens-monorepo/gatsby-ssr.js',
					importsJs:
						'/Users/danielchristopher/Looker/lens-monorepo/.docz/app/imports.js',
					rootJs:
						'/Users/danielchristopher/Looker/lens-monorepo/.docz/app/root.jsx',
					indexJs:
						'/Users/danielchristopher/Looker/lens-monorepo/.docz/app/index.jsx',
					indexHtml:
						'/Users/danielchristopher/Looker/lens-monorepo/.docz/app/index.html',
					db:
						'/Users/danielchristopher/Looker/lens-monorepo/.docz/app/db.json'
				}
			}
		}
	]
};

module.exports = merge(config, custom);
