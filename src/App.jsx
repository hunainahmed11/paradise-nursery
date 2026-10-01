import { useEffect, useState } from 'react';
import Navbar from './Navbar.jsx';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import './App.css';
const currentPage = () => ({ '#/plants': 'plants', '#/cart': 'cart' }[window.location.hash] || 'home');
export default function App() {
  const [page, setPage] = useState(currentPage);
  useEffect(() => {
    const navigate = () => { setPage(currentPage()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', navigate);
    return () => window.removeEventListener('hashchange', navigate);
  }, []);
  return <><div className="announcement">A little green goes a long way. Find your happy plant.</div><Navbar page={page} />
    <main id="main-content">{page === 'home' ? <>
      <section className="landing"><div className="hero-copy"><span className="eyebrow">WELCOME TO PARADISE NURSERY</span><h1>Grow your<br /><em>happy place.</em></h1><p>Thoughtfully chosen plants for everyday living.<br />Bring a little outside in.</p><a className="button cream" href="#/plants">Get Started <span aria-hidden="true">↗</span></a><span className="hero-note">YOUR NEXT CHAPTER STARTS WITH A LEAF</span></div><span className="hero-caption">A greener home. A slower moment.</span></section>
      <div className="values"><span>✧ &nbsp; 18 plants to fall in love with</span><span>✧ &nbsp; Greenery for every corner</span><span>✧ &nbsp; Room to grow, together</span></div><AboutUs />
    </> : page === 'plants' ? <ProductList /> : <CartItem />}</main>
    <footer><a className="footer-brand" href="#/">Paradise Nursery</a><span>A little green. A lot of joy.</span><span>Shopping application · Student project</span></footer></>;
}
