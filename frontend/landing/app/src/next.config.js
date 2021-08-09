const withPlugins = require('next-compose-plugins')
const { withWorkspaces } = require('@atls/next-config-with-pnp-workspaces')
const { withImportantThing } = require('./with-important-thing')

module.exports = withPlugins([
  withWorkspaces,
  withImportantThing('This is very important function!'),
])
