import { useState } from 'react';
import GiftBoxConfetti from './GiftBoxConfetti';

export default function GiftBox() {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};
	// Other test one code for opening lid
	// -translate-y-12 -translate-x-54 -rotate-145  opacity-0 duration-2000
	return (
		<div
			onClick={handleOpen}
			className='flex flex-col items-center justify-center cursor-pointer group relative py-10 select-none'
		>
			<div className='relative flex flex-col items-center'>
				<GiftBoxConfetti trigger={isOpen} />

				{/* Top Div: The Lid (with top ribbon accent) */}
				<div
					className={`w-44 h-6 bg-red-600 shadow-md z-20 relative flex justify-center items-center transition-all  ease-in-out ${
						isOpen
							? '-translate-y-20 -translate-x-46 -rotate-125 opacity-0 duration-2000'
							: 'group-hover:-translate-y-0.5 group-hover:duration-500 duration-500'
					}`}
				>
					{/* Lid Vertical Ribbon */}
					<div className='w-5 h-full bg-amber-400 shadow-inner' />
				</div>

				{/* Bottom Div: The Square Base Box */}
				<div className='w-42 h-36 bg-red-600 rounded-b-sm shadow-2xl relative overflow-hidden flex items-center justify-center z-10'>
					{/* Vertical Ribbon (Top to Bottom) */}
					<div className='absolute top-0 bottom-0 w-5 bg-amber-400 shadow-sm z-10' />

					{/* Horizontal Ribbon (Left to Right) */}
					<div className='absolute left-0 right-0 h-5 bg-amber-400 shadow-sm z-10' />
				</div>
			</div>
		</div>
	);
}
