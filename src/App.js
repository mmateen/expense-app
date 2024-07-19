import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import OnBoarding from './pages/OnBoarding';
import Signup from './pages/Signup';
import Login from './pages/Login';
import 'tailwindcss/tailwind.css';

function App() {
	return (
		<div className=''>
			<div class="wave"></div>
			<div class="wave"></div>
			<div class="wave"></div>
			<div className="app-container p-5 h-screen">
				<div className="w-full max-w-lg mx-auto shadow-xs flex justify-center items-center p-5 h-fit absolute inset-y-1/2 left-2/4 -translate-x-[50%] -translate-y-[50%] bg-white rounded-lg">
					<div className='h-fit w-full'>
						<Router>
							<Routes>
								<Route path='/' Component={OnBoarding}/>
								<Route path='/signup' Component={Signup}/>
								<Route path='/login' Component={Login}/>
							</Routes>
						</Router>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
