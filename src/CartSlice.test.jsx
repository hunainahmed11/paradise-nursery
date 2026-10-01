import { describe, expect, it } from 'vitest';
import reducer, { addItem, increaseQuantity, decreaseQuantity, removeItem, selectCartCount, selectCartTotal } from './CartSlice.jsx';
import { plants, categories } from './plants.js';
describe('assignment catalog', () => {
    it('has three categories with six uniquely identified plants in each', () => {
        expect(categories).toHaveLength(3);
        expect(new Set(plants.map(p => p.id)).size).toBe(18);
        for (const category of categories) expect(plants.filter(p => p.category === category)).toHaveLength(6);
        for (const plant of plants) { expect(plant.price).toBeGreaterThan(0); expect(plant.image).toMatch(/\.svg$/); expect(plant.description).toBeTruthy(); }
    });
});
describe('shopping cart', () => {
    it('updates quantities, unit count, and totals through a complete shopping flow', () => {
        let cart = reducer(undefined, addItem(plants[0]));
        cart = reducer(cart, addItem(plants[1]));
        cart = reducer(cart, increaseQuantity(plants[0].id));
        expect(selectCartCount({ cart })).toBe(3);
        expect(selectCartTotal({ cart })).toBe(72);
        cart = reducer(cart, decreaseQuantity(plants[0].id));
        expect(selectCartTotal({ cart })).toBe(50);
        cart = reducer(cart, removeItem(plants[1].id));
        expect(selectCartTotal({ cart })).toBe(22);
        cart = reducer(cart, decreaseQuantity(plants[0].id));
        expect(cart.items).toEqual([]);
        expect(selectCartCount({ cart })).toBe(0);
        expect(selectCartTotal({ cart })).toBe(0);
    });
    it('merges duplicate additions and allows adding a removed plant again', () => {
        let cart = reducer(undefined, addItem(plants[0]));
        cart = reducer(cart, addItem(plants[0]));
        expect(cart.items).toHaveLength(1);
        expect(cart.items[0].quantity).toBe(2);
        cart = reducer(cart, removeItem(plants[0].id));
        cart = reducer(cart, addItem(plants[0]));
        expect(cart.items[0].quantity).toBe(1);
    });
    it('ignores quantity updates for missing products', () => {
        let cart = reducer(undefined, increaseQuantity('missing'));
        cart = reducer(cart, decreaseQuantity('missing'));
        expect(cart.items).toEqual([]);
    });
});
