'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-nicolasa-orange/10 via-black to-black -z-10" />

            <div className="container mx-auto px-4 text-center z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    {/* Logo */}
                    <img
                        src="https://i.imgur.com/MiArO01.jpeg"
                        alt="Nicolasa Logo"
                        className="w-48 md:w-64 h-auto rounded-full shadow-2xl border-4 border-nicolasa-orange/20"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass p-8 md:p-12 rounded-[40px] max-w-3xl mx-auto shadow-2xl border-white/5 bg-black/40 backdrop-blur-xl"
                >
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
                        SABOR <span className="text-nicolasa-orange">AUTÉNTICO</span>
                    </h1>
                    <p className="text-lg md:text-xl font-medium text-white/80 mb-8 max-w-xl mx-auto">
                        La verdadera tradición boliviana en Villa Celina.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-nicolasa-orange text-white rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-nicolasa-orange/20">
                            Ver Menú Completo
                        </button>
                        <button className="px-8 py-4 glass text-white rounded-full font-bold hover:bg-white/10 transition-colors">
                            Nuestra Historia
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Animated Shapes */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 center w-full h-[50vh] bg-nicolasa-orange/20 blur-[120px] -z-10"
            />
        </section>
    );
}
