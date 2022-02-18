import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from "react";

import { addProductToCartRequest } from '../store/modules/cart/actions'
import { Product } from "../store/modules/cart/types";
import { State } from '../store';

interface CatalogItemProps {
  product: Product
}

export function CatalogItem({ product }: CatalogItemProps) {
  const dispatch = useDispatch()

  const hasFailedStockCheck = useSelector<State, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id)
  })

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product))  
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

      { hasFailedStockCheck && <span style={{ color: 'red' }}>Falta de estoque</span> }
    </article>
  )
}