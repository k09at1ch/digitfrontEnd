import React, { useState, useEffect } from 'react';
import styles from './header.module.css';
import axios from 'axios';
import Notiflix from 'notiflix';

function Modal({ modalShown, setModalShown }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const date = new Date();
  const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory]=useState('')

  useEffect(() => {
    setIsLoading(true)
    setCategories([])
    const getCategories = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          'https://67bcacb0ed4861e07b3b83a0.mockapi.io/api/digit/category'
        );
          setCategories(res.data);
          console.log(res.data)
      } catch (error) {
        Notiflix.Notify.failure('Не вдалося завантажити категорії товарів');
      } finally {
        setIsLoading(false);
      }
    };
    getCategories();
  }, []);

  const submit = async event => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(
        'https://67bcacb0ed4861e07b3b83a0.mockapi.io/api/digit/digit',
        {
          productName: name,
          price: price,
            date: date.toISOString(),
          category: selectedCategory,
        }
      );
      console.log(res.data);
      Notiflix.Notify.success('Продукт успішно створено!');
      setModalShown(false);
    } catch (error) {
      console.error(error);
      Notiflix.Notify.failure('Помилка при створенні продукту');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={modalShown ? styles.modal : styles.modalHidden}>
      <button
        className={styles.closeButton}
        onClick={() => setModalShown(false)}
      >
        X
      </button>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Enter the name"
          onChange={event => setName(event.target.value)}
          value={name}
        />
        <input
          type="number"
          placeholder="Enter the price"
          className={styles.inputNumber}
          value={price}
          onChange={event => setPrice(event.target.value)}
        />
        <p></p>
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          <option value="" disabled>
            Select category
          </option>
          {categories.map(category => (
            <option key={category.id} value={category.category}>
              {category.category}
            </option>
          ))}
        </select>

        <p></p>
        <button
          type="submit"
          disabled={isLoading || selectedCategory === ''}
        >
          {isLoading ? 'Loading...' : 'Create post'}
        </button>
      </form>
    </div>
  );
}

export default Modal;
