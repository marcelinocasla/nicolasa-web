'use client';

import { motion } from 'framer-motion';

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    portion: string;
    image_url: string;
}

export default function ProductCard({ product }: { product: Product }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="glass-dark rounded-3xl overflow-hidden shadow-xl border border-white/10 group bg-black"
        >
            <div className="h-48 bg-gray-900 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                {/* Usamos un color de fondo para cuando no haya imagen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-nicolasa-orange/20 to-black" />
                <div className="absolute inset-0 flex items-center justify-center text-white/50 text-4xl font-black italic opacity-50">
                    NICOLASA
                </div>
                {/* Image tag would go here */}
                {product.image_url && (
                    <img src={product.image_url} alt={product.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                )}
            </div>
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-nicolasa-orange transition-colors">{product.name}</h3>
                    <span className="text-nicolasa-orange font-black text-lg">
                        ${product.price.toLocaleString()}
                    </span>
                </div>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {product.description}
                </p>
                <div className="flex justify-between items-center text-xs font-medium uppercase tracking-wider text-gray-500">
                    <span>{product.portion}</span>
                    <button className="text-nicolasa-orange font-bold hover:text-white transition-colors bg-nicolasa-orange/10 px-3 py-1 rounded-full">
                        Pedir +
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
