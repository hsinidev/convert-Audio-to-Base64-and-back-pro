
import React, { useMemo } from 'react';

const Star: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
    <div className="absolute rounded-full bg-white animate-[twinkle_var(--duration)_ease-in-out_infinite_alternate]" style={style}></div>
);

const GalaxyBackground: React.FC = () => {
    const stars = useMemo(() => {
        return Array.from({ length: 150 }).map((_, i) => {
            const size = Math.random() * 2.5 + 1;
            const duration = Math.random() * 5 + 3;
            const style = {
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                '--duration': `${duration}s`,
                animationDelay: `${Math.random() * -duration}s`,
            } as React.CSSProperties;
            return <Star key={i} style={style} />;
        });
    }, []);

    return (
        <div className="fixed inset-0 -z-10 bg-gradient-to-tr from-[#020024] via-[#090979] to-[#00d4ff] bg-[length:200%_200%] animate-[gradient-pan_20s_ease_infinite] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-cyan-900/30 mix-blend-soft-light opacity-50 animate-[gradient-pan_25s_ease_infinite_reverse]"></div>
            {stars}
        </div>
    );
};

export default GalaxyBackground;
