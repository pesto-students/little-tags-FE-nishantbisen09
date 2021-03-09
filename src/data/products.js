import hoodie from '../assets/images/products/hoodie.webp';
import headphone from '../assets/images/products/headphone.webp';
import longCoat from '../assets/images/products/long-coat.webp';

const products = [
  {
    id: 'B087640TMW',
    title: 'Classic Hoodie',
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    sizes: ['XS', 'L', 'XL'],
    category: 'Mens',
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
    category: 'Womens',
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
    category: 'Womens',
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
  {
    id: 'B01N2K15U7',
    title: 'Printed, Geometric Print Kanjivaram Poly Silk Saree  (Multicolor, Purple, Yellow)',
    description:
      'Saree Fabric : Poly Silk, Saree Blouse Fabric : Poly Silk, Saree Work : Printed, Saree Blouse Work :Printed great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    sizes: ['X', 'XS', 'L'],
    category: "Women's Sarees",
    featured: false,
    fastDelivery: true,
    bestSeller: false,
    price: {
      currency: 'INR',
      current_price: 349,
      discounted: true,
      savings_amount: 1194,
    },
    reviews: { rating: 4.7, total_reviews: 15209 },
    thumbnail:
      'https://rukminim1.flixcart.com/image/781/937/jm573ww0/lehenga-choli/4/w/n/free-mdl19-define-jewellery-original-imaf948fythg85yp.jpeg?q=50',
    gallery: [
      'https://rukminim1.flixcart.com/image/880/1056/k6fd47k0pkrrdj/sari/n/j/u/green-beige-red-yellow-1363sj505-1399sj503-siril-original-imafntm5uvc8jyg2.jpeg?q=50',
      'https://rukminim1.flixcart.com/image/880/1056/k51cpe80pkrrdj/sari/w/c/z/free-multicolor-1363sj501-siril-1363sj505-original-imafntm5dhaqgvb4.jpeg?q=50',
    ],
    url: `${process.env.REACT_APP_FRONT_END_URL}/product-detail/B01N2K15U7`,
  },
];

export default products;
