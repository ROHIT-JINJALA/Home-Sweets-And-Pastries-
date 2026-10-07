// ── Cake Menu Data ──────────────────────────────────────────────────────────
export const cakes = [
  {
    id: 'red-velvet',
    name: 'Red Velvet',
    badge: 'Classic',
    badgeColor: 'bg-rose-200 text-rose-800',
    description: 'Classic red velvet sponge with rich, velvety cream cheese frosting — a timeless indulgence.',
    tag: '🍓 Cream Cheese Frosting',
    image: '/cake_red_velvet.jpg',
  },
  {
    id: 'snickers',
    name: 'Snickers-Inspired',
    badge: '🔥 Popular',
    badgeColor: 'bg-amber-200 text-amber-900',
    description: 'Chocolate sponge with cream cheese frosting, caramelized peanuts & luscious caramel — pure decadence.',
    tag: '🥜 Caramel · Peanuts',
    image: '/cake_snickers.jpg',
  },
  {
    id: 'bounty',
    name: 'Bounty-Inspired',
    badge: 'Tropical',
    badgeColor: 'bg-emerald-100 text-emerald-800',
    description: 'Chocolate sponge, rich ganache & creamy white chocolate coconut filling — a tropical dream.',
    tag: '🥥 White Choc · Coconut',
    image: '/cake_bounty.jpg',
  },
  {
    id: 'raffaello',
    name: 'Raffaello-Inspired',
    badge: 'Elegant',
    badgeColor: 'bg-sky-100 text-sky-800',
    description: 'Vanilla sponge, white chocolate coconut cream, caramelized almonds — delicate and utterly refined.',
    tag: '🌿 Almond · Coconut',
    image: '/cake_raffaello.jpg',
  },
  {
    id: 'ferrero',
    name: 'Ferrero-Inspired',
    badge: '⭐ Fan Fav',
    badgeColor: 'bg-amber-200 text-amber-900',
    description: 'Chocolate sponge, cream cheese frosting, silky ganache & caramelized whole hazelnuts — luxuriously rich.',
    tag: '🌰 Hazelnut · Ganache',
    image: '/cake_ferrero.jpg',
  },
  {
    id: 'banana-caramel',
    name: 'Banana Caramel',
    badge: 'Comfort',
    badgeColor: 'bg-yellow-100 text-yellow-800',
    description: 'Vanilla sponge, cream cheese frosting, gooey caramel & fresh banana pieces — warm, cosy perfection.',
    tag: '🍌 Banana · Caramel',
    image: '/cake_banana_caramel.jpg',
  },
  {
    id: 'bento',
    name: 'Bento Cake',
    badge: 'Mini Gift',
    badgeColor: 'bg-pink-100 text-pink-800',
    description: 'Adorable mini cakes (~450–500g) served in a signature box with fork & matches. Any flavour, custom message.',
    tag: '🎁 Custom msg · Any flavour',
    image: '/bento_cake_small.jpg',
  },
  {
    id: 'artisan-treats',
    name: 'Artisan Treats & Pops',
    badge: 'Special',
    badgeColor: 'bg-purple-100 text-purple-800',
    description: 'Handcrafted cakesicles, elegant cake pops, marshmallow flowers & sweet sets — perfect for celebrations and dessert tables.',
    tag: '🌸 Pops · Cakesicles · Gifts',
    image: '/image_copy_5.png',
  },
];

// ── Cake Size Guide ──────────────────────────────────────────────────────────
export const sizes = [
  { emoji: '🧁', name: 'Bento', weight: '~450–500g' },
  { emoji: '🍰', name: 'Classic', weight: '1 kg' },
  { emoji: '🎂', name: 'Medium', weight: '1.5 kg' },
  { emoji: '👑', name: 'Grand', weight: '2+ kg' },
];

// ── Gallery Images ───────────────────────────────────────────────────────────
export const galleryImages = [
  { src: '/image_copy.png',    alt: 'White berry wreath cake',            caption: 'Berry Elegance Cake' },
  { src: '/image_copy_19.png', alt: 'Cream pavlova with berries',         caption: 'Berry Pavlova' },
  { src: '/image_copy_17.png', alt: 'Vintage white cake with cherries',   caption: 'Cherry Blossom Cake' },
  { src: '/image_copy_13.png', alt: 'Blue pink teddy bear cake',          caption: 'Teddy Bear Dream Cake' },
  { src: '/image_copy_14.png', alt: 'Vintage birthday layer cake',        caption: 'Vintage Birthday Cake' },
  { src: '/image_copy_16.png', alt: 'Blue train tier birthday cake',      caption: 'Little Train Cake' },
  { src: '/image_copy_12.png', alt: 'Farm theme birthday cake',           caption: 'Farm Theme Cake' },
  { src: '/image_copy_15.png', alt: 'Sage green duck first birthday',     caption: 'First Birthday Duck Cake' },
  { src: '/image_copy_18.png', alt: 'Blue macaron bee birthday cake',     caption: 'Honey Bee Party Cake' },
  { src: '/image_copy_5.png',  alt: 'Artisan decorated cakesicles',       caption: 'Artisan Cakesicles' },
  { src: '/image_copy_6.png',  alt: 'Elegant heart cake pops',            caption: 'Elegant Cake Pops' },
  { src: '/image_copy_7.png',  alt: 'Jungle animal cakesicles box',       caption: 'Jungle Safari Cakesicles' },
  { src: '/image_copy_8.png',  alt: 'Safari macaron tower',               caption: 'Safari Macaron Tower' },
  { src: '/image_copy_9.png',  alt: 'Animal print cake pops',             caption: 'Animal Print Cake Pops' },
  { src: '/image_copy_10.png', alt: 'Blue train themed cakesicles',       caption: 'Train Cakesicles Set' },
  { src: '/image_copy_11.png', alt: 'Safari brownie collection',          caption: 'Safari Brownie Set' },
  { src: '/image_copy_2.png',  alt: 'Bento cake – Keep Calm and Believe', caption: 'Bento — Keep Calm' },
  { src: '/image_copy_4.png',  alt: 'Happy Birthday bento cake',          caption: 'Bento Birthday Cake' },
];

// ── Reviews ──────────────────────────────────────────────────────────────────
export const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    label: 'Birthday Party Order',
    initial: 'S',
    avatarBg: 'bg-blush',
    text: '"The Snickers cake was absolutely out of this world! The caramel was perfectly gooey and the peanuts gave such a great crunch. Everyone at the party was asking where it came from!"',
  },
  {
    id: 2,
    name: 'Maria K.',
    label: 'Anniversary Cake',
    initial: 'M',
    avatarBg: 'bg-rose-200',
    text: '"I ordered the Raffaello cake for our anniversary and it was breathtaking — visually and in taste. The coconut-almond combination was so elegant. Badya is incredibly talented and responsive!"',
  },
  {
    id: 3,
    name: 'Jessica T.',
    label: 'Bento Cake Gift',
    initial: 'J',
    avatarBg: 'bg-amber-200',
    text: '"The bento cake I ordered for my friend was the cutest thing ever! Came beautifully packaged with a fork and sparkler. The Red Velvet flavour was moist and creamy. 100% recommend!"',
  },
  {
    id: 4,
    name: 'Anna B.',
    label: 'Kids Birthday Cake',
    initial: 'A',
    avatarBg: 'bg-emerald-100',
    text: '"We ordered a custom jungle themed cake for our son\'s 2nd birthday and it exceeded expectations! The animals were so detailed and the cake inside was delicious. Badya went above and beyond!"',
  },
  {
    id: 5,
    name: 'Laura P.',
    label: 'Corporate Event Cake',
    initial: 'L',
    avatarBg: 'bg-yellow-100',
    text: '"The Ferrero-inspired cake was a dream! Rich chocolate ganache, crunchy hazelnuts — even better than the actual chocolate! My guests were so impressed. Ordering again for Christmas!"',
  },
  {
    id: 6,
    name: 'Natalie F.',
    label: 'Marshmallow Bouquet Gift',
    initial: 'N',
    avatarBg: 'bg-pink-100',
    text: '"The marshmallow flower bouquet was stunning — like a real flower arrangement but edible! Everyone couldn\'t believe it was marshmallow. Such a unique and memorable gift. Home Sweets is truly special."',
  },
];

// ── Why Choose Us ────────────────────────────────────────────────────────────
export const whyItems = [
  {
    id: 'fresh',
    icon: '🌿',
    title: 'Made Fresh Daily',
    desc: 'No pre-made layers, no shortcuts. Every sponge is baked to order so you receive the freshest possible cake.',
  },
  {
    id: 'custom',
    icon: '🎨',
    title: 'Custom Designs',
    desc: 'From minimalist elegance to elaborate sculpted themes — we bring your cake vision to life exactly as you imagined.',
  },
  {
    id: 'premium',
    icon: '✨',
    title: 'Premium Ingredients',
    desc: 'Imported Belgian chocolate, real butter, fresh cream cheese, and quality nuts — because great cakes start with great ingredients.',
  },
  {
    id: 'delivery',
    icon: '🚚',
    title: 'Local Delivery & Pickup',
    desc: 'Convenient delivery across Saint John, NB, or collect in-store. Your cake arrives safely packaged and beautiful.',
  },
];
