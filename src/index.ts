import { json } from 'micro'
import micro from 'micro'
import { router, get, post, put, patch, del } from 'microrouter'

import { products } from './services'





export default router(

  get('/', async (req, res) => {
    return await products.all()
  }),

  post('/', async (req, res) => {
    const product = await json(req)

    return await products.create(product)
  }),

  put('/:id', async (req, res) => {
    const { id } = req.params
    const productToUpdate = await json(req)

    return await products.update(id, productToUpdate)
  }),

  patch('/:id', async(req, res) => {
    const { id } = req.params
    const productToUpdate = await json(req)

    return await products.update(id, productToUpdate)
  }),

  del('/:id', async (req, res) => {
    const { id } = req.params
    return await products.deleteById(id)
  })
)
