import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import styled from './Header.module.scss';
import arrow from '../../images/arrow.svg';
import logo from '../../images/logo.svg';
import cart from '../../images/cart.svg';

const Header = () => {
  const { pathname } = useLocation();
  const cartLength = useAppSelector((state) =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0),
  );
  const back = pathname.split('/').slice(0, -1).join('/');

  return (
    <header className={styled.header}>
      <div className="wrapper">
        <nav className={styled.header__flexbox}>
          {pathname === '/login' ? (
            <img src={arrow} alt="back" className={styled.header__hidden} />
          ) : (
            <Link to={back}>
              <img src={arrow} alt="back" />
            </Link>
          )}
          <Link to="/categories">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/cart">
            <div className={styled.header__cart}>
              <img src={cart} alt="cart" />

              {cartLength > 0 && (
                <span className={styled.header__counter}>{cartLength}</span>
              )}
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
