import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {BrowserRouter as Router, 
	 	Route, 
		Routes,
	} from 'react-router-dom'



function App() {

  	const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
	const [alert, setalert] = useState(null)
	
	const showAlert = (message, type) => {
		setalert({
			message: message,
			type: type
		})
		setTimeout(() => {
			setalert(null)
		}, 2000);
	}

  	const toggleMode = () => {
		if (mode === "light"){
			setMode('dark')
			showAlert('Dark mode enabled', 'success')
			document.body.style.backgroundColor = '#212529'
		}
		else{
			setMode('light')
			showAlert('Light mode enabled', 'success')
			document.body.style.backgroundColor = '#ffff'
		}
	
	}

	
	return (
		<><Router>
			<Navbar titleProp="TEXT UTILS" about="About Us" mode={mode} changeMode={toggleMode}/>
			<Alert mode={mode} alert={alert}/>

			<Routes>
				<Route exact path='/' element={<TextForms headLabel="Enter the text to analyze" mode={mode} showAlert={showAlert}/>} />		
				
				<Route exact path='/about' element={<About mode={mode}/>} />
					  
			</Routes>
			
		</Router>
		</>  
		);
}

export default App;
