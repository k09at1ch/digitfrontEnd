import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Notiflix from 'notiflix';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    aviableCategories();
  }, []);

  const aviableCategories = async () => {
    try {
      const res = await axios.get(
        'https://67bcacb0ed4861e07b3b83a0.mockapi.io/api/digit/category'
      );
      setCategories(res.data);
    } catch (err) {
      Notiflix.Notify.failure(`Помилка: ${err.message}`);
    }
  };

  const eventListener = category => {
    console.log(category);
  };

  return (
    <div>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <button onClick={() => eventListener(category.category)}>
              <Link to={`/categories/${category.category}`}>{category.category}</Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
