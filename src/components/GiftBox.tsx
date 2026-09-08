import GiftBoxConfetti from './GiftBoxConfetti';

type GiftBoxProps = {
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
};

export default function GiftBox({ isOpen, setIsOpen }: GiftBoxProps) {
	const handleOpen = () => {
		setIsOpen(true);
	};

	return (
		<div onClick={handleOpen} className='gift-box-container group'>
			<div className='gift-box-child'>
				<GiftBoxConfetti trigger={isOpen} />

				<div className={`gift-box-lid ${isOpen ? 'gift-box-lid-open' : 'gift-box-lid-closed'}`}>
					<div className='gift-box-lid-ribbon' />
				</div>

				<div className='gift-box-base-box-container'>
					<div className='gift-box-base-box-vertical-ribbon gift-box-base-box-ribbon' />

					<div className='gift-box-base-box-horizontal-ribbon gift-box-base-box-ribbon' />
				</div>
			</div>
		</div>
	);
}
