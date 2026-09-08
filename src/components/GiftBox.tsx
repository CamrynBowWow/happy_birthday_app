import GiftBoxConfetti from './GiftBoxConfetti';

type GiftBoxProps = {
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
};

export default function GiftBox({ isOpen, setIsOpen }: GiftBoxProps) {
	const handleOpen = () => {
		setIsOpen(true);
	};
	// Other test one code for opening lid
	// -translate-y-12 -translate-x-54 -rotate-145  opacity-0 duration-2000
	return (
		<div onClick={handleOpen} className='gift-box-container group'>
			<div className='gift-box-child'>
				<GiftBoxConfetti trigger={isOpen} />

				{/* Top Div: The Lid (with top ribbon accent) */}
				<div className={`gift-box-lid ${isOpen ? 'gift-box-lid-open' : 'gift-box-lid-closed'}`}>
					{/* Lid Vertical Ribbon */}
					<div className='gift-box-lid-ribbon' />
				</div>

				{/* Bottom Div: The Square Base Box */}
				<div className='gift-box-base-box-container'>
					{/* Vertical Ribbon (Top to Bottom) */}
					<div className='gift-box-base-box-vertical-ribbon gift-box-base-box-ribbon' />

					{/* Horizontal Ribbon (Left to Right) */}
					<div className='gift-box-base-box-horizontal-ribbon gift-box-base-box-ribbon' />
				</div>
			</div>
		</div>
	);
}
