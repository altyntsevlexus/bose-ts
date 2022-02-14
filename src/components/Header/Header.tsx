import { Link, useLocation } from 'react-router-dom';
import styled from './Header.module.scss';
import arrow from '../../images/arrow.svg';
import logo from '../../images/logo.svg';
import cart from '../../images/cart.svg';

const Header = () => {
  const { pathname } = useLocation();

  const back = pathname.split('/').slice(0, -1).join('/');

  return (
    <header className={styled.header}>
      <div className="wrapper">
        <nav className={styled.header__flexbox}>
          {pathname === '/categories' ? (
            <img src={arrow} alt="back" className={styled.header__hidden} />
          ) : (
            <Link to={back}>
              <img src={arrow} alt="back" />
            </Link>
          )}

          <img src={logo} alt="logo" />
          <div className={styled.header__cart}>
            <img src={cart} alt="cart" />
            <div className={styled.header__counter}>
              <span>30</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
