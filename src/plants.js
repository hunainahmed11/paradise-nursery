export const categories = ['Easy-care favorites', 'Tropical statement plants', 'Small-space greens'];
const entries = [
  ['snake-plant', 'Snake Plant', 22, 'Upright, sculptural leaves. Let the soil dry between waterings.', 0, 'Low light'],
  ['zz-plant', 'ZZ Plant', 28, 'Glossy green foliage with a wonderfully easygoing nature.', 0, 'Low light'],
  ['golden-pothos', 'Golden Pothos', 18, 'Golden-flecked trailing vines for shelves and hanging baskets.', 0, 'Indirect light'],
  ['spider-plant', 'Spider Plant', 16, 'Arching striped leaves that bring movement to a sunny corner.', 0, 'Indirect light'],
  ['jade-plant', 'Jade Plant', 24, 'A compact succulent with plump leaves and a tree-like silhouette.', 0, 'Bright light'],
  ['aloe-vera', 'Aloe Vera', 20, 'A sun-loving succulent with distinctive pointed leaves.', 0, 'Bright light'],
  ['monstera', 'Monstera Deliciosa', 42, 'Big, split leaves for an instant touch of the tropics.', 1, 'Indirect light'],
  ['fiddle-leaf', 'Fiddle Leaf Fig', 48, 'Broad, violin-shaped leaves make this a striking focal point.', 1, 'Bright light'],
  ['rubber-plant', 'Rubber Plant', 36, 'Rich, glossy leaves and an elegant upright shape.', 1, 'Indirect light'],
  ['bird-of-paradise', 'Bird of Paradise', 54, 'Tall stems and broad leaves with a dramatic tropical feel.', 1, 'Bright light'],
  ['areca-palm', 'Areca Palm', 38, 'Feathery fronds that soften a room with fresh greenery.', 1, 'Indirect light'],
  ['philodendron', 'Heartleaf Philodendron', 26, 'Heart-shaped foliage and graceful trailing stems.', 1, 'Indirect light'],
  ['peperomia', 'Peperomia Obtusifolia', 18, 'Rounded, waxy leaves in a neat little desktop companion.', 2, 'Indirect light'],
  ['pilea', 'Chinese Money Plant', 24, 'Playful coin-shaped leaves on delicate, arching stems.', 2, 'Indirect light'],
  ['haworthia', 'Zebra Haworthia', 14, 'A petite succulent with bold stripes and spiky charm.', 2, 'Bright light'],
  ['fittonia', 'Nerve Plant', 16, 'Intricately veined leaves; enjoys humidity and moist soil.', 2, 'Indirect light'],
  ['boston-fern', 'Boston Fern', 22, 'Soft, cascading fronds for a humid spot with filtered light.', 2, 'Indirect light'],
  ['echeveria', 'Echeveria', 15, 'A beautiful rosette of fleshy leaves, perfect for a sunny sill.', 2, 'Bright light'],
];
export const plants = entries.map(([id, name, price, description, category, light]) => ({ id, name, price, description, category: categories[category], light, image: `${import.meta.env.BASE_URL}images/${id}.svg` }));
export const money = amount => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
