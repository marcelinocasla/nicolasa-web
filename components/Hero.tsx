'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-bolivia-red/20 via-bolivia-yellow/10 to-bolivia-green/20 -z-10" />

            <div className="container mx-auto px-4 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="glass p-12 rounded-3xl max-w-3xl mx-auto shadow-2xl border-white/20"
                >
                    <motion.h1
                        className="text-6xl md:text-8xl font-black mb-6 tracking-tight bg-gradient-bolivia bg-clip-text text-transparent"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                    >
                        NICOLASA
                    </motion.h1>
                    <p className="text-xl md:text-2xl font-light text-foreground/80 mb-8">
                        El sabor auténtico de Bolivia en el corazón de Villa Celina.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button className="px-8 py-4 bg-bolivia-red text-white rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
                            Ver Menú
                        </button>
                        <button className="px-8 py-4 glass text-foreground rounded-full font-bold hover:bg-white/10 transition-colors shadow-lg">
                            Nosotros
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Animated Shapes */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-24 -left-24 w-96 h-96 bg-bolivia-yellow/20 rounded-full blur-3xl -z-10"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -90, 0],
                    opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-24 -right-24 w-96 h-96 bg-bolivia-green/20 rounded-full blur-3xl -z-10"
            />
        </section>
    );
}
