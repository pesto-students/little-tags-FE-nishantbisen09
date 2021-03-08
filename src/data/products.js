import hoodie from '../assets/images/products/hoodie.png';
import headphone from '../assets/images/products/headphone.png';
import longCoat from '../assets/images/products/long-coat.png';

const products = [
  {
    id: 'B087640TMW',
    title: 'Classic Hoodie',
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    sizes: ['XS', 'L', 'XL'],
    category: 'Winter wear',
    price: {
      currency: 'INR',
      current_price: 799,
      discounted: true,
      savings_amount: 1194,
    },
    reviews: { rating: 3.7, total_reviews: 15209 },
    gallery: [hoodie],
    featured: true,
    url: `${process.env.REACT_APP_FRONT_END_URL}/product-detail/B087640TMW`,
  },
  {
    id: 'B087626TMW',
    title: 'Headphones',
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    sizes: ['L', 'XL'],
    category: 'Electronics',
    price: {
      currency: 'INR',
      current_price: 578,
      discounted: true,
      savings_amount: 1194,
    },
    reviews: { rating: 3.7, total_reviews: 15209 },
    gallery: [headphone],
    featured: true,
    url: `${process.env.REACT_APP_FRONT_END_URL}/product-detail/B087626TMW`,
  },
  {
    id: 'B087625TMW',
    title: 'Long Coat',
    price: {
      currency: 'INR',
      current_price: 1599,
      discounted: true,
      savings_amount: 1194,
    },
    reviews: { rating: 3.7, total_reviews: 15209 },
    sizes: ['XS', 'S', 'M', 'L'],
    gallery: [longCoat],
    featured: true,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    url: `${process.env.REACT_APP_FRONT_END_URL}/product-detail/B087625TMW`,
  },
  {
    id: 'B087623TMW',
    title: 'Embroidered Kanjivaram Georgette Saree  (Dark Blue)',
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    sizes: ['XS', 'S', 'M'],
    category: 'Sarees',
    featured: false,
    price: {
      before_price: 0,
      currency: 'INR',
      current_price: 2500,
      discounted: true,
      savings_amount: 62.9,
      savings_percent: 10,
    },
    reviews: { rating: 4.6, total_reviews: 520 },
    sponsored: false,
    thumbnail:
      'https://rukminim1.flixcart.com/image/781/937/jz1l7rk0/sari/b/k/b/free-k-s-009-kapuriya-fab-original-imafdzu7ej6srht6.jpeg?q=50',
    gallery: [
      'https://rukminim1.flixcart.com/image/781/937/jz1l7rk0/sari/b/k/b/free-k-s-009-kapuriya-fab-original-imafdzu7ej6srht6.jpeg?q=50',
      'https://rukminim1.flixcart.com/image/781/937/k3vwxow0/sari/r/y/m/free-arvy-kuki-fashion-original-imafdzu8vh3dgvpn.jpeg?q=50',
    ],
    url: `${process.env.REACT_APP_FRONT_END_URL}/product-detail/B087623TMW`,
  },
  {
    id: 'B01N2K14U7',
    title: 'Embroidered Semi Stitched Lehenga Choli  (Pink, Blue)',
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    sizes: ['X', 'XS'],
    category: "Women's Lehenga Cholis",
    featured: false,
    fastDelivery: true,
    bestSeller: false,
    price: {
      currency: 'INR',
      current_price: 3200,
      discounted: true,
      savings_amount: 1194,
    },
    reviews: { rating: 3.7, total_reviews: 15209 },
    thumbnail:
      'https://rukminim1.flixcart.com/image/781/937/jm573ww0/lehenga-choli/4/w/n/free-mdl19-define-jewellery-original-imaf948fythg85yp.jpeg?q=50',
    gallery: [
      'https://rukminim1.flixcart.com/image/781/937/jm573ww0/lehenga-choli/4/w/n/free-mdl19-define-jewellery-original-imaf948fythg85yp.jpeg?q=50',
      'https://rukminim1.flixcart.com/image/781/937/jm573ww0/lehenga-choli/4/w/n/free-mdl19-define-jewellery-original-imaf948fgv5jhpkg.jpeg?q=50',
    ],
    url: `${process.env.REACT_APP_FRONT_END_URL}/product-detail/B01N2K14U7`,
  },
];

export default products;
