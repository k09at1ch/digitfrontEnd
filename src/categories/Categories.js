import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Notiflix from 'notiflix';
import style from "./categories.module.css"
import { ScaleLoader } from 'react-spinners';
function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading]=useState(true)
  useEffect(() => {
    aviableCategories();
    setLoading(true);
    setCategories([]);
  }, []);
  const aviableCategories = async () => {
    // try {
    //   const res = await axios.get(
    //     'https://67bcacb0ed4861e07b3b83a0.mockapi.io/api/digit/category'
    //   );
    //   setCategories(res.data);
    // } catch (err) {
    //   Notiflix.Notify.failure(`Помилка: ${err.message}`);
    // } finally {
    //   setLoading(false);
    // }
  };

  const eventListener = category => {
    console.log(category);
  };

  return (
    <div className={style.listBox}>
      <ul className={style.categoriesList}>
        <li className={style.h1}>Categories:</li>
        {loading ? (
          <ScaleLoader color="#00ff20" speedMultiplier="2" className={style.scaleLoader } />
        ) : (
          categories.map((category, index) => (
            <li key={index}>
              <button
                onClick={() => eventListener(category.category)}
                className={style.button}
              >
                <Link
                  to={`/categories/${category.category}`}
                  className={style.link}
                >
                  {category.category}
                </Link>
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Categories;
