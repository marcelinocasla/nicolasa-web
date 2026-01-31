'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AdminLogin() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'Oyola26') {
            // En una app real usaríamos cookies o algo más persistente.
            // Para este MVP usaremos localStorage temporalmente.
            localStorage.setItem('admin_auth', 'true');
            router.push('/admin/dashboard');
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass p-8 rounded-[40px] shadow-2xl max-w-md w-full border-white/20"
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-black bg-gradient-bolivia bg-clip-text text-transparent">
                        NICOLASA ADMIN
                    </h1>
                    <p className="text-sm text-foreground/60">Ingresa la contraseña para gestionar el menú</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Contraseña"
                        className={`w-full p-4 rounded-2xl glass-dark border ${error ? 'border-bolivia-red' : 'border-white/10'
                            } focus:outline-none focus:ring-2 focus:ring-bolivia-yellow transition-all`}
                    />
                    {error && <p className="text-bolivia-red text-xs text-center font-bold">Contraseña incorrecta</p>}
                    <button
                        type="submit"
                        className="w-full py-4 bg-bolivia-red text-white rounded-2xl font-black hover:bg-bolivia-red/90 transition-all shadow-lg"
                    >
                        ENTRAR
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
