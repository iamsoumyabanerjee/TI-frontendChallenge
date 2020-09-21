const local = {
  productSearchUrl: 'https://eve.theiconic.com.au/catalog/products'
}

const development = {
  productSearchUrl: 'https://eve.theiconic.com.au/catalog/products'
}

const staging = {
  productSearchUrl: 'https://eve.theiconic.com.au/catalog/products'
}

const production = {
  productSearchUrl: 'https://eve.theiconic.com.au/catalog/products'
}

const config = {
  local,
  development,
  staging,
  production
}

export default function baseConfig(env = 'production') {
  return config[env]
}