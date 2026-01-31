'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories, products } from '@/lib/mock-data';
import ProductCard from './ProductCard';

export default function MenuList() {
    const [activeCategory, setActiveCategory] = useState(categories[0].slug);

    const filteredProducts = products.filter(p => {
        const category = categories.find(c => c.id === p.category_id);
        return category?.slug === activeCategory;
    });

    return (
        <div className="container mx-auto px-4 py-20" id="menu">
            <div className="flex flex-col items-center mb-12">
                <h2 className="text-4xl font-black mb-8">Nuestros Sabores</h2>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 glass p-2 rounded-full mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.slug)}
                            className={`px-6 py-2 rounded-full font-bold transition-all ${activeCategory === cat.slug
                                    ? 'bg-bolivia-red text-white shadow-lg'
                                    : 'hover:bg-white/10'
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-20 glass rounded-3xl">
                    <p className="text-foreground/60 italic">Cargando más platos deliciosos...</p>
                </div>
            )}
        </div>
    );
}
