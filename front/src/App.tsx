import { RouterProvider } from 'react-router-dom';
import routes from './shared/routes';
import './App.css';

function App() {
	return (
		<RouterProvider router={ routes } />
	);
}

export default App
