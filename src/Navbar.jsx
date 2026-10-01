import { useSelector } from 'react-redux';
import { selectCartCount } from './CartSlice.jsx';
export default function Navbar({ page }) {
  const count = useSelector(selectCartCount);
  return <header className="site-header"><a className="brand" href="#/" aria-label="Paradise Nursery home"><span className="brand-mark" aria-hidden="true">❧</span><span>paradise<span className="brand-small">N U R S E R Y</span></span></a>
    <nav aria-label="Main navigation">
      <a href="#/" aria-current={page === 'home' ? 'page' : undefined}>Home</a>
      <a href="#/plants" aria-current={page === 'plants' ? 'page' : undefined}>Plants</a>
      <a className="cart-link" href="#/cart" aria-current={page === 'cart' ? 'page' : undefined} aria-label={`Cart, ${count} items`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M3 4h2l2 12h12l2-9H6M9 20h.01M18 20h.01" strokeLinecap="round" /></svg>
        <span>Cart</span><span className="cart-count" aria-live="polite">{count}</span>
      </a>
    </nav>
  </header>;
}
