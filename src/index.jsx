import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from "react-router-dom"

/*Pages*/
import Accueil from './pages/Accueil'
import Booki from './pages/projets/Booki'
import OhMyFood from './pages/projets/OhMyFood'
import LaPanthere from './pages/projets/LaPanthere'
import Kanap from './pages/projets/Kanap'
import Piiquante from './pages/projets/Piiquante'
import Kasa from './pages/projets/Kasa'
import Universeva from './pages/projets/Universeva'
import BetWise from './pages/projets/BetWise'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Router base='/'>
			<Routes>
				<Route path='/' element={<Accueil/>}/>
				<Route path='/booki' element={<Booki/>}/>
				<Route path='/ohmyfood' element={<OhMyFood/>}/>
				<Route path='/la_panthere' element={<LaPanthere/>}/>
				<Route path='/kanap' element={<Kanap/>}/>
				<Route path='/piiquante' element={<Piiquante/>}/>
				<Route path='/kasa' element={<Kasa/>}/>
				<Route path='/universeva' element={<Universeva/>}/>
				<Route path='/betwise' element={<BetWise/>}/>
			</Routes>
		</Router>	
	</React.StrictMode>
)

