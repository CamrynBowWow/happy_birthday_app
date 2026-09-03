import { useState } from 'react';

interface Particle {
	id: number;
	left: string;
	color: string;
	size: string;
	duration: string;
	delay: string;
	shape: 'circle' | 'square';
}

const COLORS = ['#f43f5e', '#ec4899', '#8b5cf6', '#3b82f6', '#10b981', '#eab308', '#f97316'];

function generateParticles(count: number): Particle[] {
	return Array.from({ length: count }).map((_, index) => ({
		id: index,
		left: `${Math.random() * 100}%`,
		color: COLORS[Math.floor(Math.random() * COLORS.length)],
		size: `${Math.random() * 5 + 3}px`,
		duration: `${Math.random() * 4.5 + 2}s`,
		delay: `${Math.random() * 4}s`,
		shape: 'square',
	}));
}

export default function CustomConfetti({ count = 80 }: { count?: number }) {
	const [particles] = useState<Particle[]>(() => generateParticles(count));

	return (
		<div className='fixed inset-0 pointer-events-none overflow-hidden z-50'>
			{particles.map((p) => (
				<div
					key={p.id}
					className='absolute animate-confetti'
					style={{
						left: p.left,
						top: '-20px',
						width: p.size,
						height: p.size,
						backgroundColor: p.color,
						borderRadius: p.shape === 'circle' ? '50%' : '2px',
						animationDuration: p.duration,
						animationDelay: p.delay,
					}}
				/>
			))}
		</div>
	);
}
