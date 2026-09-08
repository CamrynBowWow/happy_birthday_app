import { useRef, useState } from 'react';
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
	const [maxMoves] = useState(() => Math.floor(Math.random() * 12) + 4);

	const [buttonState, setButtonState] = useState<{
		top: string;
		left: string;
		animate: boolean;
	} | null>(null);
	const yesButtonRef = useRef<HTMLButtonElement | null>(null);

	const handleYesClick = () => {
		if (isFinish) {
			navigate('/gift');
		}
	};

	const moveButton = () => {
		if (movedCount < maxMoves) {
			const nextCount = movedCount + 1;
			setMovedCount(nextCount);

			// Generate random offsets keeping the button inside screen bounds
			const randomTop = Math.floor(Math.random() * 75 + 15) + '%';
			const randomLeft = Math.floor(Math.random() * 75 + 15) + '%';

			if (!buttonState && yesButtonRef.current) {
				//  Get exact current pixel position before it changes to fixed
				const rect = yesButtonRef.current.getBoundingClientRect();

				// We use center coordinates because of the -translate-x-1/2 -translate-y-1/2 classes
				const startTop = `${rect.top + rect.height / 2}px`;
				const startLeft = `${rect.left + rect.width / 2}px`;

				// Lock the button exactly where it is, and DISABLE animation so it doesn't glitch/disappear
				setButtonState({ top: startTop, left: startLeft, animate: false });

				// Give the browser 50ms to paint the locked position, then move it and ENABLE animation
				setTimeout(() => {
					setButtonState({ top: randomTop, left: randomLeft, animate: true });
				}, 50);
			} else {
				// Subsequent moves are already fixed, just animate to the new random position
				setButtonState({ top: randomTop, left: randomLeft, animate: true });
			}
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
						{/* <Button
							onClick={handleYesClick}
							onMouseEnter={moveButton}
							style={buttonPos ? { top: buttonPos.top, left: buttonPos.left } : undefined}
							className={twMerge(
								'bg-rose-500 transition-all duration-700 ease-in-out z-50',
								buttonPos && 'fixed -translate-x-1/2 -translate-y-1/2',
							)}
						>
							yes
						</Button> */}
						<Button
							ref={yesButtonRef}
							onClick={handleYesClick}
							onMouseEnter={moveButton}
							style={
								buttonState
									? {
											top: buttonState.top,
											left: buttonState.left,
											// Temporarily override Tailwind's transition when locking initial position
											transition: buttonState.animate ? undefined : 'none',
										}
									: undefined
							}
							className={twMerge(
								'bg-rose-500 transition-all duration-700 ease-in-out z-50',
								buttonState && 'fixed -translate-x-1/2 -translate-y-1/2',
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
