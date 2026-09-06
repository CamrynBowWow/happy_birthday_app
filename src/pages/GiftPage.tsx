import CustomConfetti from '../components/CustomConfetti';
import GiftBox from '../components/GiftBox';

export default function GiftPage() {
	return (
		<section className='min-h-screen flex flex-col items-center justify-center text-center relative'>
			{/* Custom pure React confetti */}
			<CustomConfetti key={0} count={450} />

			<h1 className='text-4xl font-extrabold text-pink-600 mb-4 motion-safe:animate-bounce'>
				Happy Birthday [Girlfriends name]?
			</h1>

			<p className='text-lg text-gray-700 max-w-md mb-8'>
				I hope you have a great day my love. May the rest of the day be amazing for you?
			</p>

			<GiftBox />
			{/* <div className='bg-white p-8 rounded-2xl shadow-xl border border-pink-100 max-w-sm w-full mb-6 flex flex-col items-center'>
				<div className='text-6xl mb-4'>🎁</div>
				<p className='font-semibold text-gray-800 text-xl'>Your Special Surprise</p>
			</div> */}
		</section>
	);
}
