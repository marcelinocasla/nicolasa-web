'use client';

import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const DailyBannerComposition: React.FC<{ title: string; content: string }> = ({
    title,
    content
}) => {
    const frame = useCurrentFrame();
    const { fps, durationInFrames } = useVideoConfig();

    // Entrance animations
    const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' });
    const translateY = interpolate(frame, [0, 30], [50, 0], { extrapolateRight: 'clamp' });

    return (
        <AbsoluteFill className="bg-[#1a1a1a] flex items-center justify-center p-20 font-sans border-[10px] border-[#3d2b1f] rounded-[40px]">
            <div
                style={{
                    opacity,
                    transform: `translateY(${translateY}px)`,
                    textShadow: '2px 2px 10px rgba(0,0,0,0.5)'
                }}
                className="text-center w-full"
            >
                <h1 className="text-bolivia-yellow text-6xl font-black mb-8 uppercase tracking-widest italic">
                    {title}
                </h1>
                <div className="h-2 w-48 bg-bolivia-red mx-auto mb-12 rounded-full" />
                <p className="text-white text-8xl font-black leading-tight drop-shadow-2xl">
                    {content}
                </p>
                <div className="mt-12 text-bolivia-green text-4xl font-bold animate-pulse">
                    ¡LOS ESPERAMOS!
                </div>
            </div>

            {/* Texture Overlay (Simulated Chalkboard) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
        </AbsoluteFill>
    );
};
