import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import routes from './routes';

export default function App() {
	return (
		<>
			<Header />
			{routes}
			<Footer />
		</>
	);
}
