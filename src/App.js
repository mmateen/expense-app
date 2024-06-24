import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import OnBoarding from './pages/OnBoarding';
import Signup from './pages/Signup';
import 'tailwindcss/tailwind.css';

function App() {
	return (
		<div className=''>
			<div className="app-container p-5 h-screen">
				<div className="w-full max-w-lg mx-auto shadow-xs flex justify-center items-center p-5 h-fit absolute inset-y-1/2 left-2/4 -translate-x-[50%] -translate-y-[50%]">
					<div className='h-full w-full'>
						<Router>
							<Routes>
								<Route path='/' Component={OnBoarding}/>
								<Route path='/signup' Component={Signup}/>
							</Routes>
						</Router>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
