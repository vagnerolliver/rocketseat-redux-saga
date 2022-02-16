import { useDispatch } from 'react-redux'
import { useCallback } from "react";

import { addProductToCart } from '../store/modules/cart/actions'
import { Product } from "../store/modules/cart/types";

interface CatalogItemProps {
  product: Product
}

export function CatalogItem({ product }: CatalogItemProps) {
  const dispatch = useDispatch()

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product))  
  }, [dispatch, product])  

  return (
    <article 
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

      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
    </article>
  )
}