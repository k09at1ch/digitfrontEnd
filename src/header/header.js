import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import Modal from './Modal';
import logo from '../images/logo192.png';

function Header() {
  const [modalShown, setModalShown] = useState(false);

  return (
    <div className={styles.header}>
      <ul className={`${styles.list} ${styles.listbox}`}>
        <ul className={styles.list}>
          <li>
            <Link to="/digitfrontEnd" className={styles.logoButton}>
              <img alt="Logo" src={logo} className={styles.logo} />
            </Link>
          </li>
          <li>
            <Link to="/wishlist" className={styles.button}>
              Wishlist
            </Link>
          </li>
          <li>
            <Link to="/cart" className={styles.button}>
              Cart
            </Link>
          </li>
          <li className={styles.buttonMargin}>
            <button
              className={styles.button}
              onClick={() => setModalShown(true)}
            >
              New product
            </button>
          </li>
        </ul>
        <ul className={styles.list}>
          <li>
            <button className={styles.button}>Login</button>
          </li>
          <li>
            <button className={styles.button}>Register</button>
          </li>
        </ul>
      </ul>
      <Modal modalShown={modalShown} setModalShown={setModalShown} />
    </div>
  );
}

export default Header;
