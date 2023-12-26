/** @format */

import { ATestimonialsProps } from './Parts/type';
import testi_1 from 'assets/images/testi/testi_4.jpg';
import testi_2 from 'assets/images/testi/testi_2.jpg';
import testi_5 from 'assets/images/testi/testi_5.jpg';
import testi_6 from 'assets/images/testi/testi_6.jpg';
import testi_7 from 'assets/images/testi/testi_7.jpg';
import testi_8 from 'assets/images/testi/testi_8.jpg';
import { TESTI_ClIENT1 } from 'utils/constatns';

export const mockTesti: Omit<ATestimonialsProps, 'widthItem'>[] = [
  {
    text: TESTI_ClIENT1,
    author: 'Екатерина Якуш',
    date: '21.23.1222',
    srcImg: testi_1,
  },
  {
    text: TESTI_ClIENT1,
    author: 'Иван Иванов',
    date: '21.23.1222',
    srcImg: testi_2,
  },
  {
    text: TESTI_ClIENT1,
    author: 'Иван Иванов',
    date: '21.23.1222',
    srcImg: testi_5,
  },
  {
    text: TESTI_ClIENT1,
    author: 'Иван Иванов',
    date: '21.23.1222',
    srcImg: testi_6,
  },
  {
    text: TESTI_ClIENT1,
    author: 'Иван Иванов',
    date: '21.23.1222',
    srcImg: testi_7,
  },
  {
    text: TESTI_ClIENT1,
    author: 'Иван Иванов',
    date: '21.23.1222',
    srcImg: testi_8,
  },
];

export const delaySlide = 5000;
export const gap = 120;
export const SIZE_ITEM_PHONE = 295;
export const SIZE_ITEM_DESKTOP = 430;
