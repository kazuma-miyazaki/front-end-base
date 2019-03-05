module.exports = {
  mode           : process.env.NODE_ENV,
  developmentMode: process.env.NODE_ENV === 'development',
  productionMode : process.env.NODE_ENV === 'production'
}