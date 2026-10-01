import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeItem, selectItems, selectCartCount, selectCartTotal } from './CartSlice.jsx';
import { money } from './plants.js';
export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const count = useSelector(selectCartCount);
  const total = useSelector(selectCartTotal);
  const [checkout, setCheckout] = useState(false);
  return <div className="page-shell cart-page"><span className="eyebrow">A LITTLE GREEN, ON ITS WAY</span><h1>Your growing <em>collection.</em></h1><p>{count} {count === 1 ? 'plant' : 'plants'} in your cart</p>
    {items.length === 0 ? <section className="empty-cart"><span aria-hidden="true">❧</span><h2>Room for something green.</h2><p>Your cart is empty. Let’s find your first plant.</p><a href="#/plants" className="button">Continue Shopping <span aria-hidden="true">→</span></a></section> : <div className="cart-layout"><section aria-label="Cart items"><div className="cart-items">{items.map(item => <article key={item.id} className="cart-item"><img src={item.image} alt={item.name} width="120" height="120" /><div className="cart-item-info"><h2>{item.name}</h2><p>{money(item.price)} each</p><div className="item-actions"><div className="quantity"><button onClick={() => dispatch(decreaseQuantity(item.id))} aria-label={`Decrease quantity of ${item.name}`}>−</button><span aria-label={`Quantity of ${item.name}`} aria-live="polite">{item.quantity}</span><button onClick={() => dispatch(increaseQuantity(item.id))} aria-label={`Increase quantity of ${item.name}`}>+</button></div><button className="delete-button" onClick={() => dispatch(removeItem(item.id))} aria-label={`Delete ${item.name} from cart`}>Delete</button></div></div><strong className="line-total">{money(item.price * item.quantity)}</strong></article>)}</div><a className="continue-link" href="#/plants">← Continue Shopping</a></section><aside className="order-summary"><h2>Order summary</h2><div><span>Plants ({count})</span><span>{money(total)}</span></div><div className="order-total"><strong>Total</strong><strong aria-live="polite">{money(total)}</strong></div><p>All prices in USD. This is a demo shopping cart; no payment will be taken.</p><button className="button" onClick={() => setCheckout(true)}>Checkout <span aria-hidden="true">→</span></button>{checkout && <p className="checkout-message" role="status">Coming Soon! Online checkout is growing. Thank you for visiting Paradise Nursery.</p>}<span className="summary-note">Good things take a little growing.</span></aside></div>}
  </div>;
}
