import React, { useState } from 'react';
import styles from './favorite.module.scss';
import { Select } from '@mantine/core';
import { CardHotel } from '../shared/card-hotel';
import { useAppSelector } from '../../hooks/app-use-selector';
import { getSortData } from './favorites-utils';
import { useAppDispatch } from '../../hooks/app-use-dispatch';
import { setFavorites } from './favorite-slice';

export const Favorites = () => {
  const dispatch = useAppDispatch();
  const [price, setPrice] = useState('');
  const [raiting, setRaiting] = useState('');
  const favorites = useAppSelector((state) => state.favorite.favorites);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Избранное</h2>
      <div className={styles.sortWrapper}>
        <Select
          placeholder="Рейтинг"
          value={raiting}
          onChange={(value: string) => {
            setRaiting(value);
            dispatch(setFavorites(getSortData(favorites, 'raiting')));
          }}
          className={styles.selectRaiting}
          data={['Рейтинг']}
        />
        <Select
          placeholder="Цена"
          value={price}
          onChange={(value: string) => {
            setPrice(value);
            console.log(value);
            dispatch(setFavorites(getSortData(favorites, 'price')));
          }}
          className={styles.selectRaiting}
          data={['Цена']}
        />
      </div>

      <div className={styles.favoritesCards}>
        {favorites.map((favorite, i) => {
          return <CardHotel {...favorite} className={styles.favoriteCard} key={i} />;
        })}
      </div>
    </div>
  );
};
