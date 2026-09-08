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

			const randomTop = Math.floor(Math.random() * 75 + 15) + '%';
			const randomLeft = Math.floor(Math.random() * 75 + 15) + '%';

			if (!buttonState && yesButtonRef.current) {
				const rect = yesButtonRef.current.getBoundingClientRect();

				const startTop = `${rect.top + rect.height / 2}px`;
				const startLeft = `${rect.left + rect.width / 2}px`;

				setButtonState({ top: startTop, left: startLeft, animate: false });

				setTimeout(() => {
					setButtonState({ top: randomTop, left: randomLeft, animate: true });
				}, 5);
			} else {
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
						<Button
							ref={yesButtonRef}
							onClick={handleYesClick}
							onMouseEnter={moveButton}
							style={
								buttonState
									? {
											top: buttonState.top,
											left: buttonState.left,
											transition: buttonState.animate ? undefined : 'none',
										}
									: undefined
							}
							className={twMerge(
								'bg-rose-500 transition-all duration-700 ease-in-out z-50 hover:bg-rose-200 hover:outline-rose-500 hover:text-black',
								buttonState && 'fixed -translate-x-1/2 -translate-y-1/2',
							)}
						>
							yes
						</Button>

						{
							<Button
								onClick={() => setHideNoButton(true)}
								className={twMerge(
									'transition-all duration-500 ease-out bg-indigo-500 hover:bg-rose-200 hover:outline-indigo-500 hover:text-black',
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
