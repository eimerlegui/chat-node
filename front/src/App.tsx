import { RouterProvider } from 'react-router-dom';
import routes from './shared/routes';
import './App.css';

function App() {

	window.addEventListener('resize', updateVH);
	function updateVH() {
		document.documentElement.style.setProperty('--vh', `${window.visualViewport?.height}px`)
	};

	return (
		<RouterProvider router={ routes } />
	);
}

export default App
