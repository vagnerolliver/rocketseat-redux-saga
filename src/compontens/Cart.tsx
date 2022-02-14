import { useSelector } from "react-redux"

import { CartItem } from "../store/modules/cart/types"
import { State } from "../store"
 
export function Cart() {
  const cart = useSelector<State, CartItem[]>(state => state.cart.items)
  console.log(cart)
  
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(item => (
          <tr key={item.product.title}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td className="quantity">{item.quantity}</td>
            <td>{(item.product.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <style>{`
      table, th, td {
        border: 1px solid;
      }
      th, td {
        padding: 0.5rem
      }
      .quantity {
        text-align: center
      }
    `}
    </style>
    </>
  )
}