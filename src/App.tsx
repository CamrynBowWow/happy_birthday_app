import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

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
		<section className='max-w-7xl'>
			<h1>I heard it's someone special day</h1>
			<div>
				<p>Press yes if you want to receive your gift</p>
				<div>
					<button
						onClick={handleYesClick}
						onMouseEnter={moveButton}
						style={buttonPos ? { top: buttonPos.top, left: buttonPos.left } : undefined}
						className={twMerge(
							'px-6 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 cursor-pointer transition-all duration-700 ease-in-out z-50',
							buttonPos && 'fixed -translate-x-1/2 -translate-y-1/2',
						)}
					>
						yes
					</button>

					{!hideNoButton && <button onClick={() => setHideNoButton(true)}>no</button>}
				</div>
			</div>
		</section>
	);
}

export default App;
