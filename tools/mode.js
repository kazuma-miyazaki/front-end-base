const DEVELOPMENT_OPTION = 'development';



const PRODUCTION_OPTION  = 'production';



let development          = process.env.NODE_ENV === DEVELOPMENT_OPTION



let production           = process.env.NODE_ENV === PRODUCTION_OPTION



let is                   = development || production
  ? process.env.NODE_ENV
  : development = true && DEVELOPMENT_OPTION



module.exports = { development, production, is };