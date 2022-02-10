import styled from './Header.module.scss';
import arrow from '../../images/arrow.svg';
import logo from '../../images/logo.svg';
import cart from '../../images/cart.svg';

const Header = () => {
  return (
    <header className={styled.header}>
      <div className="wrapper">
        <div className={styled.header__flexbox}>
          <img src={arrow} alt="back" />
          <img src={logo} alt="logo" />
          <div className={styled.header__cart}>
            <img src={cart} alt="cart" />
            <div className={styled.header__counter}>
              <span>30</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
