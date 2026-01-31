export const categories = [
    { id: '1', name: 'Platos Especiales', slug: 'especiales' },
    { id: '2', name: 'Sopas y Caldos', slug: 'sopas' },
    { id: '3', name: 'Platos Fritos', slug: 'fritos' },
    { id: '4', name: 'Bebidas', slug: 'bebidas' },
];

export const products = [
    {
        id: 'p1',
        name: 'Pique a lo Macho',
        description: 'Bocado de carne de res, salchichas, papas fritas, cebolla, tomate, morrón, huevo y queso.',
        price: 15000,
        portion: 'Para 1 o 2 personas',
        category_id: '1',
        image_url: '/pique-macho.png', // Placeholder
    },
    {
        id: 'p2',
        name: 'Sopa de Maní',
        description: 'La clásica sopa boliviana cremosa con fideos y papas hilo.',
        price: 7000,
        portion: '1 persona',
        category_id: '2',
        image_url: '/sopa-mani.png', // Placeholder
    },
    // ... more items can be added
];
