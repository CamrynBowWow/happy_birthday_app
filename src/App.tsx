import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import Button from './components/Button';
import HeaderOneTag from './components/HeaderOneTag';
import Paragraph from './components/Paragraph';
import Card from './components/Card';

function App() {
	const navigate = useNavigate();
	const [isFinish, setIsFinished] = useState(false);
	const [movedCount, setMovedCount] = useState(0);
	const [hideNoButton, setHideNoButton] = useState(false);

	const [buttonPos, setButtonPos] = useState<{ top: string; left: string } | null>(null);

	const handleYesClick = () => {
		if (isFinish) {
			navigate('/gift');
		}
	};

	const moveButton = () => {
		if (movedCount < 4) {
			const nextCount = movedCount + 1;
			setMovedCount(nextCount);

			// Generate random offsets keeping the button inside screen bounds
			const randomTop = Math.floor(Math.random() * 70 + 15) + '%';
			const randomLeft = Math.floor(Math.random() * 70 + 15) + '%';

			setButtonPos({ top: randomTop, left: randomLeft });
		}

		if (movedCount >= 4) {
			setIsFinished(true);
		}
	};

	return (
		<main className='main-layout'>
			<section className='main-section-container'>
				<HeaderOneTag className='header-tag-one-style'>
					I heard it's someone special day
				</HeaderOneTag>
				<Card className='card-style'>
					<Paragraph className='paragraph-style'>
						Click yes if you want to receive your gift
					</Paragraph>
					<div className='flex gap-10'>
						<Button
							onClick={handleYesClick}
							onMouseEnter={moveButton}
							style={buttonPos ? { top: buttonPos.top, left: buttonPos.left } : undefined}
							className={twMerge(
								'bg-rose-500 transition-all duration-700 ease-in-out z-50',
								buttonPos && 'fixed -translate-x-1/2 -translate-y-1/2',
							)}
						>
							yes
						</Button>

						{
							<Button
								onClick={() => setHideNoButton(true)}
								className={twMerge(
									'transition-opacity duration-300 ease-out',
									hideNoButton && 'opacity-0 pointer-events-none',
								)}
							>
								no
							</Button>
						}
					</div>
				</Card>
			</section>
		</main>
	);
}

export default App;
