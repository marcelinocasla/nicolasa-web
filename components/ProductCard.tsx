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
            className="glass-dark rounded-3xl overflow-hidden shadow-xl border border-white/10 group"
        >
            <div className="h-48 bg-gray-200 relative overflow-hidden">
                {/* Usamos un color de fondo para cuando no haya imagen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-bolivia-red/20 to-bolivia-green/20" />
                <div className="absolute inset-0 flex items-center justify-center text-white/50 text-4xl font-black italic">
                    NICOLASA
                </div>
            </div>
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <span className="text-bolivia-yellow font-black text-lg">
                        ${product.price.toLocaleString()}
                    </span>
                </div>
                <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
                    {product.description}
                </p>
                <div className="flex justify-between items-center text-xs font-medium uppercase tracking-wider text-foreground/40">
                    <span>{product.portion}</span>
                    <button className="text-bolivia-red font-bold hover:underline">
                        Pedir +
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
