import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../router/AppRouter';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <AppRouter />
      <Footer />
    </Router>
  );
};

export default App;
