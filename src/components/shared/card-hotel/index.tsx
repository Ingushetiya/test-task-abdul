import styles from './card-hotel.module.scss';
import FavoriteIcon from '../icons/favorite';
import cn from 'classnames';
import { useAppSelector } from '../../../hooks/app-use-selector';
import { useAppDispatch } from '../../../hooks/app-use-dispatch';
import { setFavorites } from '../../favorites/favorite-slice';
import { Rating } from '@mantine/core';
import { CardHotelProps } from './card-hotel.types';

export const CardHotel = ({
  id,
  leftIcon,
  className,
  fullName,
  price,
  raiting,
  ...rest
}: CardHotelProps) => {
  const dispatch = useAppDispatch();
  const favoriteHotels = useAppSelector((state) => state.favorite.favorites);
  const hotel = favoriteHotels.find((item) => item.id === id);

  const handleSaveInFavorites = () => {
    if (hotel) {
      const newFavoriteHotels = favoriteHotels.filter((item) => item.id !== id);
      dispatch(setFavorites(newFavoriteHotels));
    } else {
      const newFavoriteHotels = [{ id, fullName, price, raiting, ...rest }, ...favoriteHotels];
      dispatch(setFavorites(newFavoriteHotels));
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
            <Rating value={raiting} readOnly />
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
          <span className={styles.amount}>{price}₽</span>
        </div>
      </div>
    </div>
  );
};
