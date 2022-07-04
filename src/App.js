import Header from './components/Header/Header';
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
