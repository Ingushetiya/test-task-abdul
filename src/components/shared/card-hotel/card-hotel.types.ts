import { ReactNode } from 'react';
import { FilterHotel } from '../../search-hotels/types';

export interface CardHotelProps extends FilterHotel {
  className?: string;
  leftIcon?: ReactNode;
}
