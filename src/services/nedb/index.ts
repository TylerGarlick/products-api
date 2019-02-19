import Db from 'nedb-promise'

export const products = Db({
  filename: 'db/products.json',
  autoload: true
})

export const categories = Db({
  filename: 'db/categories.json',
  autoload: true

})
