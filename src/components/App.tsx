import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../redux/store';
import AppRouter from '../router/AppRouter';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Header />
          <AppRouter />
          <Footer />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
