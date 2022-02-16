import {  useEffect, useState } from 'react'
 
import { Product } from '../store/modules/cart/types'
import { CatalogItem } from './CatalogItem'
import api from '../services/api'

export function Catalog() {
  const [catalog, setCatalog] = useState<Product[]>([])
   
  useEffect(() => {
    api.get('products')
      .then(({ data }) => {
        setCatalog(data)
      })
  })


  return (
    <main style={{ maxWidth: '300px' }}>
      <h1>Catalog</h1>
      {catalog.map(product => (
        <CatalogItem key={product.id} product={product}/>
      ))}
    </main>
  )
}