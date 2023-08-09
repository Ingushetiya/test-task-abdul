import React, { ReactNode } from 'react';
import styles from './cart-hotel.module.scss';
import RaitingIcon from '../icons/raiting';
import FavoriteIcon from '../icons/favorite';
import cn from 'classnames';
import { FilterHotel } from '../../search-hotels/types';
import { useAppSelector } from '../../../hooks/app-use-selector';
import { useAppDispatch } from '../../../hooks/app-use-dispatch';
import { toggleFavorite } from '../../favorites/favorite-slice';

interface Props extends FilterHotel {
  className?: string;
  leftIcon?: ReactNode;
}

export const CartHotel = ({ id, leftIcon, className, fullName, ...rest }: Props) => {
  const dispatch = useAppDispatch();
  const favoriteHotels = useAppSelector((state) => state.favorite.favorites);
  const hotel = favoriteHotels.find((item) => item.id === id);

  const handleSaveInFavorites = () => {
    if (hotel) {
      const newFavoriteHotels = favoriteHotels.filter((item) => item.id !== id);
      dispatch(toggleFavorite(newFavoriteHotels));
    } else {
      const newFavoriteHotels = [{ id, fullName, ...rest }, ...favoriteHotels];
      dispatch(toggleFavorite(newFavoriteHotels));
    }
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.mainInfo}>
        {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}
        <div className={styles.desc}>
          <span className={styles.mainInfoTitle}>{fullName}</span>
          <span className={styles.mainInfoDate}>7 июля 2020 - 1 день</span>
          <div className={styles.mainInfoRaitings}>
            <RaitingIcon />
          </div>
        </div>
      </div>
      <div className={styles.favoriteAndPrice}>
        <div
          className={cn(styles.favoriteDefault, { [styles.favorite]: !!hotel })}
          onClick={handleSaveInFavorites}>
          <FavoriteIcon />
        </div>
        <div className={styles.price}>
          <span className={styles.priceText}>Price:</span>
          <span className={styles.amount}>23924₽</span>
        </div>
      </div>
    </div>
  );
};
