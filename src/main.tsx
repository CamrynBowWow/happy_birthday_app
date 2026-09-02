import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import App from './App.tsx';
import GiftPage from './pages/GiftPage.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/gift' element={<GiftPage />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
