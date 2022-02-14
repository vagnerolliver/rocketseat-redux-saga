import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { addProductToCart } from '../store/modules/cart/actions'
import { Product } from '../store/modules/cart/types'
import api from '../services/api'

export function Catalog() {
  const [catalog, setCatalog] = useState<Product[]>([])
  const dispatch = useDispatch()
   
  useEffect(() => {
    api.get('products')
      .then(({ data }) => {
        setCatalog(data)
      })
  })

  const handleAddProductToCart = useCallback((product: Product) => {
    dispatch(addProductToCart(product)) //
  }, [])  

  return (
    <main style={{ maxWidth: '300px' }}>
      <h1>Catalog</h1>
      {catalog.map(product => (
        <article 
          key={product.id} 
          style={{ 
            marginBottom: '1rem', 
            display: 'flex', 
            justifyContent: 'space-between'
          }}
        >
          <div>
            <strong>{product.title}</strong> {" - "}
            <strong>{product.price}</strong> {" "}
          </div>
          <button 
            type="button" 
            onClick={() => handleAddProductToCart(product)}
          >
            Comprar
          </button>
        </article>
      ))}
    </main>
  )
}