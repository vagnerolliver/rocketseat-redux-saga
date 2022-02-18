import { Reducer } from 'redux'
import produce from 'immer'

import { ActionTypes, CartState } from './types';

const INITIAL_STATE: CartState = {
  items: [],
  failedStockCheck: []
}

const cart: Reducer<CartState> = (state = INITIAL_STATE, action) => {

  return produce(state, draft => {
    switch(action.type) {
      case ActionTypes.addProductToCartSucces: {
        const { product } = action.payload
        
        const productInCartIndex = draft.items.findIndex(item => 
          item.product.id === product.id
        )

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++
        } else {
          draft.items.push({
            product,
            quantity: 1
          })
        }

        break
      
        // return { 
        //   ...state,
        //   items: [
        //     ...state.items,
        //     {
        //       product,
        //       quantity: 1
        //     }
        //   ]
        // } 
      }

      case ActionTypes.addProductToCartFailure: {
        draft.failedStockCheck.push(action.payload.productId)
        break;
      }
  
      default: {
        return draft
      }
  
    }
  })
}

export default cart