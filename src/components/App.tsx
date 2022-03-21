import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useEffect } from 'react';
import { persistor, store } from '../redux/store';
import AppRouter from '../router/AppRouter';
import Header from './Header';
import Footer from './Footer';
import { setUpInterceptors } from '../api';
import { userLogout } from '../redux/userSlice';

const App = () => {
  useEffect(() => {
    setUpInterceptors(store, userLogout);
  }, []);

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
