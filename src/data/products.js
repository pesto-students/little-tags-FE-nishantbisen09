import hoodie from '../assets/images/products/hoodie.png';
import headphone from '../assets/images/products/headphone.png';
import longCoat from '../assets/images/products/long-coat.png';
import getRandomArbitraryNumber from '../utility';
import { SIZES } from '../utility/appConstants';

const products = [
  {
    id: 1,
    title: 'Classic Hoodie',
    price: 4097,
    image: hoodie,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    rating: getRandomArbitraryNumber(1, 5),
    sizes: SIZES,
  },
  {
    id: 2,
    title: 'Headphones',
    price: 599,
    rating: getRandomArbitraryNumber(1, 5),
    sizes: SIZES,
    image: headphone,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
  },
  {
    id: 3,
    title: 'Long Coat',
    price: 599,
    rating: getRandomArbitraryNumber(1, 5),
    sizes: SIZES,
    image: longCoat,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
  },
];

export default products;
