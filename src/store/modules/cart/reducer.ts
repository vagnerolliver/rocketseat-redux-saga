import { Reducer } from 'redux'

import { CartState } from './types';

const INITIAL_STATE:CartState = {
  items: []
}

const cart: Reducer<CartState> = (state, action) => {
  console.log('state', state)
  console.log('action', action)
  return INITIAL_STATE
}

export default cart