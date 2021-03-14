import mens from '../assets/images/categories/mens.png';
import womens from '../assets/images/categories/womens.png';
import jewellery from '../assets/images/categories/jewellery.png';
import electronics from '../assets/images/categories/electronics.png';
import accessories from '../assets/images/categories/accessories.png';

const topCategories = [
  {
    id: 2,
    name: "Men's Clothing",
    image: mens,
    url: '/search?c=2',
  },
  {
    id: 1,
    name: "Women's Clothing",
    image: womens,
    url: '/search?c=1',
  },
  {
    id: 4,
    name: 'Jewellery',
    image: jewellery,
    url: '/search?c=4',
  },
  {
    id: 3,
    name: 'Electronics',
    image: electronics,
    url: '/search?c=3',
  },
  {
    id: 5,
    name: 'Accessories',
    image: accessories,
    url: '/search?c=5',
  },
];
export default topCategories;
