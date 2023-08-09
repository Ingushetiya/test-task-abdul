import React from 'react';
import styles from './favorite.module.scss';
import { Select } from '@mantine/core';
import { CartHotel } from '../shared/cart-hotel';
import { useAppSelector } from '../../hooks/app-use-selector';
import { sortData } from './favorites-utils';

export const Favorites = () => {
  const favorites = useAppSelector((state) => state.favorite.favorites);
  const arr = [
    { rating: 4.5, price: 100 },
    { rating: 3.8, price: 150 },
    { rating: 4.2, price: 120 },
    // ...другие объекты
  ];
  console.log(sortData(arr, 'rating'));

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Избранное</h2>
      <div className={styles.sortWrapper}>
        <Select placeholder="Рейтинг" className={styles.selectRaiting} data={['Рейтинг']} />
        <Select placeholder="Цена" className={styles.selectRaiting} data={['Цена']} />
      </div>

      <div className={styles.favoritesCarts}>
        {favorites.map((favorite, i) => {
          return <CartHotel {...favorite} className={styles.favoriteCard} key={i} />;
        })}
      </div>
    </div>
  );
};
