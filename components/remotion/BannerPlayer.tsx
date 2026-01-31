'use client';

import { Player } from '@remotion/player';
import { DailyBannerComposition } from './DailyBannerComposition';

export default function BannerPlayer({
    title = "Sugerencia del Día",
    content = "Sopa de Maní"
}: {
    title?: string;
    content?: string
}) {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="glass p-4 rounded-[50px] overflow-hidden shadow-2xl border-white/10">
                <Player
                    component={DailyBannerComposition}
                    durationInFrames={120}
                    compositionWidth={1920}
                    compositionHeight={1080}
                    fps={30}
                    style={{
                        width: '100%',
                        aspectRatio: '16/9',
                        borderRadius: '40px',
                    }}
                    inputProps={{
                        title,
                        content
                    }}
                    acknowledgeRemotionLicense
                    controls
                    autoPlay
                    loop
                />
            </div>
        </div>
    );
}
