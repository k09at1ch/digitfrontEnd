import React from "react";
import Header from '../header/header';
import Categories from '../categories/Categories.js';
import Main from "main/Main";
import styles from "./home.module.css"
function Home() {
    return (
      <div>
        <Header />
        <div className={styles.list}>
          <Categories />
          <Main />
        </div>
      </div>
    );
}

export default Home