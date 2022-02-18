import { all, call, select, takeLatest, put } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'

import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './actions'
import api from '../../../services/api'
import { State } from '../..'
import { ActionTypes } from './types'

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>

interface StockResponse {
  id: number
  quantity: number
}

function* checkProductStock(action: CheckProductStockRequest) {
  const { product } = action.payload

  const currentQuantity: number = yield select((state: State) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
  })

  const availableStockResponse: AxiosResponse<StockResponse> = yield call(api.get, `stock/${product.id}`)

  if(availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product))
  } else {
    yield put(addProductToCartFailure(product.id))
  }
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest,checkProductStock )
])