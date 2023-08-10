import React from 'react';
import { ArrowForwardIcon } from '../shared/icons/arrowForwardIcon';
import { Carousel } from '@mantine/carousel';
import { SLIDER_IMAGE } from './sliderImage';
import { CardHotel } from '../shared/card-hotel';
import HouseIcon from '../shared/icons/house';
import styles from './main.module.scss';
import { useAppSelector } from '../../hooks/app-use-selector';

export const MainHotelFilter = () => {
  const hotels = useAppSelector((state) => state.filterHotel.filteredHotels);

  return (
    <div className={styles.wrapper}>
      <div className={styles.upMainPage}>
        <div className={styles.leftSection}>
          <span className={styles.hotelText}>Отели</span>
          <ArrowForwardIcon />
          <span className={styles.locationText}>Москва</span>
        </div>
        <div className="rightSection">
          <span className={styles.date}>07 июля 2020</span>
        </div>
      </div>
      <Carousel
        slideSize="30%"
        align="start"
        withControls={false}
        breakpoints={[
          { maxWidth: 'md', slideSize: '50%' },
          { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
        ]}>
        {SLIDER_IMAGE.map((item: string, index) => (
          <Carousel.Slide key={index}>
            <img src={item} alt="home" />
          </Carousel.Slide>
        ))}
      </Carousel>
      <span className={styles.favoriteHotelsText}>
        Добавлено в Избранное: <span className={styles.favoriteHotelsCount}>3</span> отеля
      </span>
      <div className={styles.cardHotel}>
        {hotels.map((hotel) => (
          <CardHotel {...hotel} key={hotel.id} leftIcon={<HouseIcon />} />
        ))}
      </div>
    </div>
  );
};
