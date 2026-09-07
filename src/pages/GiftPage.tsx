import { useState } from 'react';
import CustomConfetti from '../components/CustomConfetti';
import GiftBox from '../components/GiftBox';
import { twMerge } from 'tailwind-merge';
import HeaderOneTag from '../components/HeaderOneTag';
import Paragraph from '../components/Paragraph';

export default function GiftPage() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<main className='gift-page-main-layout'>
			<CustomConfetti key={0} count={450} />
			<section className='gift-page-section-container'>
				<div className='gift-page-header-parent-container'>
					<div className='gift-page-header-child-container'>
						{!isOpen && (
							<HeaderOneTag
								className={twMerge(
									'gift-page-header-h1-style motion-safe:animate-bounce',
									isOpen && 'opacity-0',
								)}
							>
								Happy Birthday Maryam Umairah!
							</HeaderOneTag>
						)}
						<HeaderOneTag
							className={twMerge(
								'gift-page-header-h1-style opacity-0 transition-all ease-in-out delay-300 duration-1500',
								isOpen && 'opacity-100',
							)}
						>
							I love you lots my beautiful wife!
						</HeaderOneTag>
					</div>

					<Paragraph className={twMerge('gift-page-header-p-style', isOpen && 'opacity-0')}>
						I hope you have a great day my love. May the rest of the day be amazing for you?
					</Paragraph>
				</div>

				<div>
					<GiftBox isOpen={isOpen} setIsOpen={setIsOpen} />

					<Paragraph
						className={twMerge(
							'gift-page-click-notification motion-safe:animate-pulse',
							isOpen && 'opacity-0 motion-safe:animate-none',
						)}
					>
						Click The Present!
					</Paragraph>
				</div>
			</section>
		</main>
	);
}
