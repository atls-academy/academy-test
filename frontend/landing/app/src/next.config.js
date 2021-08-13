const withPlugins = require('next-compose-plugins')
const { withWorkspaces } = require('@atls/next-config-with-pnp-workspaces')
const { withAliases } = require('./with-important-thing')

module.exports = withPlugins([
  withWorkspaces,
  withAliases(['react-intl', '@emotion/react', '@emotion/styled'], require),
])
