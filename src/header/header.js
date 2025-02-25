import React from "react";
import styles from "./header.module.css"
import Modal  from "./Modal";
import { useState } from "react";
function Header() {
  
 const [modalShown, setModalShown] = useState(false);

    return (
      <div className={styles.header}>
        <ul className={`${styles.list} ${styles.listbox}`}>
          <ul className={styles.list}>
            <li>
              <button className={styles.button}>Wishlist</button>
            </li>
            <li>
              <button className={styles.button}>Cart</button>
            </li>
            <li className={styles.buttonMargin}>
              <button
                className={styles.button}
                onClick={e => {
                  setModalShown(true);
                }}
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
//dd
export default Header;