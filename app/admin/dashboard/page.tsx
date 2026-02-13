'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, LogOut, Save, Plus, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
    const [isDark, setIsDark] = useState(true);
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
        // Check auth
        if (localStorage.getItem('admin_auth') !== 'true') {
            router.push('/admin');
        }
    }, [router]);

    if (!mounted) return null;

    const handleLogout = () => {
        localStorage.removeItem('admin_auth');
        router.push('/admin');
    };

    return (
        <div className={`min-h-screen ${isDark ? 'dark bg-black text-white' : 'bg-white text-black'} transition-colors duration-500`}>
            {/* Top Bar */}
            <nav className="glass sticky top-0 z-50 p-4 mb-8">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-black tracking-tighter">NICOLASA ADMIN</h1>
                    <div className="flex gap-4 items-center">
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="p-2 rounded-full hover:bg-white/10 transition-colors"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-bolivia-red text-white font-bold text-sm hover:scale-105 transition-all"
                        >
                            <LogOut size={16} /> Salir
                        </button>
                    </div>
                </div>
            </nav>

            <main className="container mx-auto px-4 space-y-12 pb-20">
                {/* Banner Section */}
                <section className="glass p-8 rounded-[40px] border-white/10">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-black">Pizarra del Día (Banner)</h2>
                        <button className="px-6 py-2 bg-nicolasa-orange text-white rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-nicolasa-orange/20">
                            <Save size={18} /> Guardar Cambios
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <label className="block text-sm font-bold opacity-60 uppercase tracking-widest text-white/60">Título</label>
                            <input
                                type="text"
                                defaultValue="¡PLATO ESTRELLA!"
                                className="w-full p-4 rounded-2xl glass-dark border border-white/10 focus:outline-none focus:border-nicolasa-orange/50 transition-colors"
                            />
                            <label className="block text-sm font-bold opacity-60 uppercase tracking-widest text-white/60">Contenido</label>
                            <textarea
                                defaultValue="Pique a lo Macho"
                                rows={3}
                                className="w-full p-4 rounded-2xl glass-dark border border-white/10 focus:outline-none focus:border-nicolasa-orange/50 transition-colors"
                            />
                        </div>
                        <div className="glass-dark rounded-[30px] flex items-center justify-center p-4">
                            <div className="text-center text-sm opacity-40">
                                <p>Vista previa de la animación de ReMotion</p>
                                <div className="aspect-video bg-black/40 mt-4 rounded-2xl border border-dashed border-white/20 flex items-center justify-center italic">
                                    Chalkboard Animation
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Products Section */}
                <section className="glass p-8 rounded-[40px] border-white/10">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-black">Gestión de Productos</h2>
                        <button className="px-6 py-2 border-2 border-nicolasa-orange text-nicolasa-orange rounded-full font-bold flex items-center gap-2 hover:bg-nicolasa-orange hover:text-white transition-all">
                            <Plus size={18} /> Agregar Plato
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="border-b border-white/10">
                                <tr>
                                    <th className="pb-4 pt-2 px-4 text-xs font-black uppercase opacity-40">Plato</th>
                                    <th className="pb-4 pt-2 px-4 text-xs font-black uppercase opacity-40">Precio</th>
                                    <th className="pb-4 pt-2 px-4 text-xs font-black uppercase opacity-40">Porción</th>
                                    <th className="pb-4 pt-2 px-4 text-xs font-black uppercase opacity-40">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-4 font-bold">Pique a lo Macho</td>
                                    <td className="py-4 px-4 text-nicolasa-orange font-black">$15.000</td>
                                    <td className="py-4 px-4 opacity-60 italic text-sm">Para 1 o 2 personas</td>
                                    <td className="py-4 px-4 flex gap-2">
                                        <button className="p-2 rounded-lg hover:bg-blue-500/20 text-blue-400 decoration-transparent">Editar</button>
                                        <button className="p-2 rounded-lg hover:bg-bolivia-red/20 text-bolivia-red"><Trash2 size={18} /></button>
                                    </td>
                                </tr>
                                {/* Repetir para más items... */}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}
