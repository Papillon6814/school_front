const WithSass = require('@zeit/next-sass');
const WithImages = require('next-images');

module.exports = WithImages(WithSass({
  cssModules: true
}))