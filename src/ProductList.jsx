import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectItems } from './CartSlice.jsx';
import { categories, plants, money } from './plants.js';
export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const [filter, setFilter] = useState('All plants');
  const [notice, setNotice] = useState('');
  return <div className="page-shell"><div className="collection-heading"><div><span className="eyebrow">THE GREEN COLLECTION</span><h1>Find your new <em>leaf.</em></h1><p>Good company comes in all shapes and shades of green.</p></div><span className="collection-number">18 plants.<br />Endless possibilities.</span></div>
    <div className="filters" aria-label="Filter plants by category">{['All plants', ...categories].map(category => <button key={category} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}</div>
    <p className="sr-only" role="status">{notice}</p>
    {categories.filter(category => filter === 'All plants' || filter === category).map((category) => <section className="plant-section" key={category} aria-labelledby={`category-${categories.indexOf(category)}`}><div className="section-heading"><h2 id={`category-${categories.indexOf(category)}`}>{category}</h2><span>06 PLANTS</span></div><div className="product-grid">{plants.filter(plant => plant.category === category).map(plant => {
      const added = items.some(item => item.id === plant.id);
      return <article className="product-card" key={plant.id}><div className="plant-image"><span className="light-tag">☼ {plant.light}</span><img src={plant.image} alt={`${plant.name} in a nursery pot`} loading="lazy" width="360" height="360" /></div><div className="product-info"><div className="product-title"><h3>{plant.name}</h3><span>{money(plant.price)}</span></div><p>{plant.description}</p><button className="add-button" disabled={added} onClick={() => { dispatch(addItem(plant)); setNotice(`${plant.name} added to your cart.`); }}>{added ? '✓ Added to Cart' : 'Add to Cart'}<span aria-hidden="true">{added ? '' : '+'}</span></button></div></article>;
    })}</div></section>)}
  </div>;
}
