import Product from '../Models/Product';
import { Image } from 'react-native';
import shoe1 from '../assets/images/shoe1.png';
import hat1 from '../assets/images/hat1.png';
import jacket1 from '../assets/images/jacket1.png';
import jacket2 from '../assets/images/jacket2.png';
import jacket3 from '../assets/images/jacket3.png';
import jacket4 from '../assets/images/jacket4.png';
import sweater1 from '../assets/images/sweater1.png';
import sweater3 from '../assets/images/sweater3.png';
import shirt1 from '../assets/images/shirt1.png';
import shirt2 from '../assets/images/shirt2.png';

const PRODUCTS = [
  new Product(
    'p1',
    'u1',
    'Khaki Suede Polish Work Boots',
    Image.resolveAssetSource(shoe1).uri,
    'Drawing on both vintage boxing boot and roofer boot designs as inspiration, Yuketen’s Polish work boot is a unique combination of old world sportiness and refined, heritage construction. Each piece of Yuketen footwear is hand-crafted by highly skilled and experienced leather artisans who take great pride and fulfillment in their work.',
    149.99,
    4
  ),
  new Product(
    'p2',
    'u1',
    'Cotton Black Cap',
    Image.resolveAssetSource(hat1).uri,
    'Our PANGAIA hats are ready for any adventure, any day of the week. This Black cap is made from 100% Organic Cotton canvas, features our classic text print on the front and an adjustable buckle closure on the back. Kofi is wearing our baseball cap, sizing is adjustable',
    12.99,
    4.8
  ),
  new Product(
    'p3',
    'u2',
    'Camo Fang Backpack Jungle',
    Image.resolveAssetSource(jacket1).uri,
    '000D Nylon Cordura, Cow leather, EXCELLA® Zipper, Vegetable tanned leather (Tochigi leather)',
    39.99,
    3.9
  ),
  new Product(
    'p4',
    'u3',
    'Knit Sweater with Zips',
    Image.resolveAssetSource(sweater1).uri,
    "It's a limited edition. Women's Cozy Zip-Front Cardigan Sweater, Long Sleeve Zipper Basic Sweater Coat, Women's Open Cardigan, Cardigan Sweater, Knit Sweater",
    29.99,
    3.7
  ),
  new Product(
    'p5',
    'u3',
    'Golden Pilot Jacket',
    Image.resolveAssetSource(jacket4).uri,
    'Marv carries a great selection of aviator flight jackets, pilot sweaters and other apparel for sale at great prices! We offer ready-to-wear pilot pullover sweaters with epaulet holders and reinforced shoulder patches, vintage-style jackets for all ages, and fleece zip-ups for any aviation lover.',
    129.99,
    4.5
  ),
  new Product(
    'p6',
    'u1',
    'Long Linen-blend Shirt',
    Image.resolveAssetSource(shirt1).uri,
    'Long shirt in a woven linen and cotton blend. Collar, concealed buttons at front, and a pleat at back. Open chest pockets, heavily dropped shoulders, and long sleeves with button at cuffs. Horizontal seam at both front and back. Rounded hem, longer at back.',
    18.99,
    3.6
  ),
  new Product(
    'p7',
    'u1',
    'Cotton Band-collar Blouse',
    Image.resolveAssetSource(shirt2).uri,
    'An excellent choice for early to mid-18th century. Authentic cut with neck and sleeve gussets. This shirt has a 1\" band collar with a single button closure and 3/4\" cuffs on the sleeves. It can be worn with or without neckwear. Choose white cotton muslin for a dressier look, or our unbleached cotton muslin for working-class attire. Available in XS to XXXXL. These shirts are generously cut.',
    59.99,
    4.6
  ),
  new Product(
    'p8',
    'u1',
    'Spotted Patterned Sweater',
    Image.resolveAssetSource(sweater3).uri,
    'Beautiful Blue spotted pattern Cardigan Sweater It’s a beautiful dark blue knitted cardigan. Great fold cold weather. Wild fable Sweaters Cardigans',
    80.99,
    3.9
  ),
  new Product(
    'p9',
    'u1',
    'Parka and Quilted Liner Jacket',
    Image.resolveAssetSource(jacket2).uri,
    'UNISEX genuine parka liners from the 1980s-90s. Taken from genuine issue army jackets. These are made from nylon blend and have a warm quilted design. Wear as they are or under a jacket. Ties at the front or can be tied into a jacket. As this is a multi-list the trim can vary very slightly as you can see from the photos. All the jackets are purchased in the same batch from the same supplier however there may be minor differences due to the vintage nature of the garments.',
    49.99,
    4.9
  ),
  new Product(
    'p10',
    'u1',
    'Camo Fang Backpack Jungle',
    Image.resolveAssetSource(jacket3).uri,
    "000D Nylon Cordura, Cow leather, EXCELLA® Zipper, Vegetable tanned leather (Tochigi leather)",
    59.99,
    3.1
  )
];

export default PRODUCTS;
