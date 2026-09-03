import { useState } from 'react';
import CustomConfetti from '../components/CustomConfetti';

export default function GiftPage() {
	const [confettiKey, setConfettiKey] = useState(0);

	const triggerMoreConfetti = () => {
		setConfettiKey((prev) => prev + 1);
	};

	return (
		<section className='min-h-screen flex flex-col items-center justify-center bg-pink-50 p-6 text-center relative'>
			{/* Custom pure React confetti */}
			<CustomConfetti key={confettiKey} count={450} />

			<h1 className='text-4xl font-extrabold text-pink-600 mb-4 animate-bounce'>
				🎉 Happy Birthday / Special Day! 🎉
			</h1>

			<p className='text-lg text-gray-700 max-w-md mb-8'>
				Here is your special gift! Hope you have an incredible day filled with joy!
			</p>

			<div className='bg-white p-8 rounded-2xl shadow-xl border border-pink-100 max-w-sm w-full mb-6 flex flex-col items-center'>
				<div className='text-6xl mb-4'>🎁</div>
				<p className='font-semibold text-gray-800 text-xl'>Your Special Surprise</p>
			</div>

			<div className='flex gap-4'>
				<button
					onClick={triggerMoreConfetti}
					className='px-6 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition cursor-pointer'
				>
					More Confetti! 🎉
				</button>
			</div>
		</section>
	);
}
