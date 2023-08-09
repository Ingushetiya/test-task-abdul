import { SearchHotels } from '../../search-hotels';
import { Favorites } from '../../favorites';
import { MainHotelFilter } from '../../filtered-hotels';

import styles from './main.module.scss';
import { Header } from '../../header';

export const Main = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.filtersAndFavorite}>
            <SearchHotels />
            <Favorites />
          </div>

          <div className={styles.hotels}>
            <MainHotelFilter />
          </div>
        </div>
      </div>
    </>
  );
};
