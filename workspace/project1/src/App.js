import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/header';
import './styles/App.scss';
import './styles/header.scss';
import Home from './components/Home';
import './styles/home.scss';
import Footer from './components/Footer';
import './styles/Footer.scss';
import Contact from './components/Contact';
import './styles/Contact.scss';
import Services from './components/Services';
import './styles/mediaquery.scss';

function App() {
	return (
		<Router>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/contact" element={<Contact></Contact>}></Route>
				<Route path="/services" element={<Services></Services>}></Route>
			</Routes>
			<Footer></Footer>
		</Router>
	);
}

export default App;
