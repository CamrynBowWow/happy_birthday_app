import { useEffect, useRef } from 'react';

interface ArcConfettiProps {
	trigger: boolean;
}

interface Particle {
	x: number;
	y: number;
	vx: number;
	vy: number;
	color: string;
	size: number;
	rotation: number;
	vRot: number;
	opacity: number;
}

const CONFETTI_COLORS = [
	'#f43f5e',
	'#ec4899',
	'#d946ef',
	'#a855f7',
	'#8b5cf6',
	'#6366f1',
	'#3b82f6',
	'#10b981',
	'#f59e0b',
	'#fbbf24',
];

export default function GiftBoxConfetti({ trigger }: ArcConfettiProps) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		if (!trigger) return;

		let animationFrameId: number;

		// Assigned at declaration using 'const'
		const timeoutId = setTimeout(() => {
			const canvas = canvasRef.current;
			if (!canvas) return;

			const ctx = canvas.getContext('2d');
			if (!ctx) return;

			const width = canvas.width;
			const height = canvas.height;

			const originX = width / 2;
			const originY = height - 20;

			const particles: Particle[] = [];
			const particleCount = 120;

			for (let i = 0; i < particleCount; i++) {
				const angle = (Math.PI / 180) * (-150 + Math.random() * 120);
				const speed = 3 + Math.random() * 5;

				particles.push({
					x: originX,
					y: originY,
					vx: Math.cos(angle) * speed,
					vy: Math.sin(angle) * speed,
					color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
					size: 5 + Math.random() * 6,
					rotation: Math.random() * Math.PI * 2,
					vRot: (Math.random() - 0.5) * 0.15,
					opacity: 1,
				});
			}

			const animate = () => {
				ctx.clearRect(0, 0, width, height);

				let activeParticles = 0;

				for (const p of particles) {
					if (p.opacity <= 0) continue;

					activeParticles++;

					p.x += p.vx;
					p.y += p.vy;
					p.vy += 0.12;
					p.vx *= 0.985;
					p.rotation += p.vRot;
					p.opacity -= 0.005;

					ctx.save();
					ctx.translate(p.x, p.y);
					ctx.rotate(p.rotation);
					ctx.globalAlpha = Math.max(0, p.opacity);
					ctx.fillStyle = p.color;
					ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
					ctx.restore();
				}

				if (activeParticles > 0) {
					animationFrameId = requestAnimationFrame(animate);
				}
			};

			animate();
		}, 1800);

		return () => {
			clearTimeout(timeoutId);
			if (animationFrameId) cancelAnimationFrame(animationFrameId);
		};
	}, [trigger]);

	return (
		<canvas
			ref={canvasRef}
			width={600}
			height={290}
			className='pointer-events-none absolute -top-64 z-30'
		/>
	);
}
