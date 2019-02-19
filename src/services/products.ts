import { products } from './nedb'

interface IProduct {
  _id: string,
  name: string,
  description: string
  active: boolean
}

interface IProducts {
  products: [IProduct]
}

type Product = IProduct
type Products = IProducts

export default {

  async all(query = {}, projection = {}, sort = {}, skip = 0, limit = 100): Promise<Products> {
    return await products.find(query)
  },

  async getById(id: any): Promise<Product> {
    return await products.findOne({ _id: id })
  },

  async create(product: object): Promise<Product> {
    return await products.insert(product)
  },

  async update(id: any, product: object): Promise<Product> {
    const oldProduct = this.getById(id)
    return await products.update({ _id: id }, { ...oldProduct, ...product })
  },

  async deleteById(id: any): Promise<any> {
    return await products.remove({ _id: id })
  },

  async deleteAll() {
    return await products.remove({})
  },

}
