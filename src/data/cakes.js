// src/data/cakes.js

export const stats = [
  { icon: 'bi-cupcake', value: '100+', label: 'Happy Customers' },
  { icon: 'bi-gift', value: '50+', label: 'Delicious Cakes' },
  { icon: 'bi-shield-check', value: '100%', label: 'Fresh & Quality' }
]

export const cakeCategories = [
  {
    priceGroup: '$5',
    title: 'Budget Friendly Cakes',
    cakes: [
      { id: 1, code: 'C001', name: 'Chocolate Slice', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80' },
      { id: 2, code: 'C002', name: 'Vanilla Cupcake', image: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=600&auto=format&fit=crop&q=80' },
      { id: 3, code: 'C003', name: 'Strawberry Mini', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop&q=80' }
    ]
  },
  {
    priceGroup: '$10',
    title: 'Classic Flavors',
    cakes: [
      { id: 4, code: 'C004', name: 'Red Velvet', image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=600&auto=format&fit=crop&q=80' },
      { id: 5, code: 'C005', name: 'Lemon Blueberry', image: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=600&auto=format&fit=crop&q=80' },
      { id: 6, code: 'C006', name: 'Coffee Walnut', image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&auto=format&fit=crop&q=80' }
    ]
  },
  {
    priceGroup: '$15',
    title: 'Premium Selection',
    cakes: [
      { id: 7, code: 'C007', name: 'Pink Rose Cake', image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&auto=format&fit=crop&q=80' },
      { id: 8, code: 'C008', name: 'Matcha Cream', image: 'https://images.unsplash.com/photo-1515037893149-de7f840978e2?w=600&auto=format&fit=crop&q=80' },
      { id: 9, code: 'C009', name: 'Mango Delight', image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&auto=format&fit=crop&q=80' }
    ]
  },
  {
    priceGroup: '$20',
    title: 'Luxury Cakes',
    cakes: [
      { id: 10, code: 'C010', name: 'Gold Leaf Cake', image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&auto=format&fit=crop&q=80' },
      { id: 11, code: 'C011', name: 'Chocolate Truffle', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80' },
      { id: 12, code: 'C012', name: 'Rainbow Cake', image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=600&auto=format&fit=crop&q=80' }
    ]
  }
]