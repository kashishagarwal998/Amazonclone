
import React, { useState, useEffect } from 'react';
import Items from './Items';

const CardSection = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();

        const randomOrder = shuffleArray(data.products || []);
        setItems(randomOrder);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="px-8 py-10 text-center text-gray-600">
        Loading products...
      </div>
    );
  }

  return (
    <div className="px-8 py-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold mb-8 text-center text-gray-800">
        Featured Products
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <Items key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
 