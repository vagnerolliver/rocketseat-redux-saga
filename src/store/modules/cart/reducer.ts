import { Reducer } from 'redux'

import { CartState } from './types';

const INITIAL_STATE:CartState = {
  items: []
}

const cart: Reducer<CartState> = () => {
  return INITIAL_STATE
}

export default cart