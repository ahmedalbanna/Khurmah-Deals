export type Deal = {
  id: string;
  title: string;
  description: string;
  price: string;
  discount: string;
  storeName: string;
  storeId: string;
  category: string;
  imageId: string;
  status: 'approved' | 'pending' | 'rejected';
  createdAt: Date;
};

export type Category = {
  id: string;
  name: string;
  dealCount: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'store_owner' | 'customer';
  storeName?: string;
  createdAt: Date;
  avatarId: string;
};

const deals: Deal[] = [
  {
    id: '1',
    title: 'High-Performance Laptop',
    description: 'Latest generation processor, 16GB RAM, 512GB SSD. Perfect for work and play.',
    price: 'SAR 3500',
    discount: '15% OFF',
    storeName: 'Khurmah Electronics',
    storeId: 'store-1',
    category: 'Electronics',
    imageId: 'deal-1',
    status: 'approved',
    createdAt: new Date('2023-10-01'),
  },
  {
    id: '2',
    title: 'Winter Collection Jackets',
    description: 'Stylish and warm jackets for the cold season. Available in all sizes.',
    price: 'SAR 250',
    discount: '30% OFF',
    storeName: 'Modern Apparel',
    storeId: 'store-2',
    category: 'Fashion',
    imageId: 'deal-2',
    status: 'approved',
    createdAt: new Date('2023-10-02'),
  },
  {
    id: '3',
    title: 'Family Dinner Special',
    description: 'A full course meal for a family of four. Includes appetizers, main course, and dessert.',
    price: 'SAR 180',
    discount: '25% OFF',
    storeName: 'The Royal Dine',
    storeId: 'store-3',
    category: 'Restaurants',
    imageId: 'deal-3',
    status: 'approved',
    createdAt: new Date('2023-10-03'),
  },
  {
    id: '4',
    title: 'Handcrafted Wooden Table',
    description: 'Beautifully crafted coffee table to complement your living room.',
    price: 'SAR 400',
    discount: '10% OFF',
    storeName: 'Home Essentials',
    storeId: 'store-4',
    category: 'Home & Garden',
    imageId: 'deal-4',
    status: 'pending',
    createdAt: new Date('2023-10-04'),
  },
  {
    id: '5',
    title: 'Organic Vegetables Box',
    description: 'A weekly box of fresh, organic vegetables sourced from local farms.',
    price: 'SAR 75',
    discount: 'Buy 1 Get 1',
    storeName: 'Green Grocers',
    storeId: 'store-1',
    category: 'Groceries',
    imageId: 'deal-5',
    status: 'approved',
    createdAt: new Date('2023-10-05'),
  },
  {
    id: '6',
    title: 'Men\'s Haircut & Shave',
    description: 'Professional haircut and classic shave from our expert barbers.',
    price: 'SAR 50',
    discount: '20% OFF',
    storeName: 'Gentlemen\'s Cut',
    storeId: 'store-2',
    category: 'Health & Beauty',
    imageId: 'deal-6',
    status: 'rejected',
    createdAt: new Date('2023-10-06'),
  },
   {
    id: '7',
    title: 'Premium Car Oil Change',
    description: 'Full synthetic oil change service for all car models. Includes filter change.',
    price: 'SAR 150',
    discount: 'SAR 50 OFF',
    storeName: 'Khurmah Auto Care',
    storeId: 'store-3',
    category: 'Automotive',
    imageId: 'deal-7',
    status: 'pending',
    createdAt: new Date('2023-10-07'),
  },
   {
    id: '8',
    title: 'Yoga Class Membership',
    description: 'One month unlimited access to all yoga and meditation classes.',
    price: 'SAR 300',
    discount: '1 Month Free',
    storeName: 'Zenith Sports Club',
    storeId: 'store-4',
    category: 'Sports',
    imageId: 'deal-8',
    status: 'approved',
    createdAt: new Date('2023-10-08'),
  },
];

const categories: Category[] = [
  { id: 'electronics', name: 'Electronics', dealCount: 23 },
  { id: 'fashion', name: 'Fashion', dealCount: 45 },
  { id: 'restaurants', name: 'Restaurants', dealCount: 18 },
  { id: 'home-garden', name: 'Home & Garden', dealCount: 12 },
  { id: 'groceries', name: 'Groceries', dealCount: 31 },
  { id: 'health-beauty', name: 'Health & Beauty', dealCount: 28 },
  { id: 'automotive', name: 'Automotive', dealCount: 9 },
  { id: 'sports', name: 'Sports', dealCount: 15 },
];

const users: User[] = [
    {
        id: 'user-1',
        name: 'Admin User',
        email: 'admin@overly.com',
        role: 'admin',
        createdAt: new Date('2023-01-01'),
        avatarId: 'user-avatar-1'
    },
    {
        id: 'user-2',
        name: 'Saleh Al-Ghamdi',
        email: 'saleh.g@example.com',
        role: 'store_owner',
        storeName: 'Khurmah Electronics',
        createdAt: new Date('2023-02-15'),
        avatarId: 'user-avatar-2'
    },
    {
        id: 'user-3',
        name: 'Fatima Al-Zahrani',
        email: 'fatima.z@example.com',
        role: 'store_owner',
        storeName: 'Modern Apparel',
        createdAt: new Date('2023-03-10'),
        avatarId: 'user-avatar-3'
    },
    {
        id: 'user-4',
        name: 'Ahmed Al-Malki',
        email: 'ahmed.malki@email.com',
        role: 'customer',
        createdAt: new Date('2023-05-20'),
        avatarId: 'user-avatar-1'
    }
];

export const getDeals = () => deals.filter(d => d.status === 'approved');
export const getAllDealsForAdmin = () => deals;
export const getDealsByStore = (storeId: string) => deals.filter(d => d.storeId === storeId);
export const getDealById = (id: string) => deals.find(d => d.id === id);
export const getCategories = () => categories;
export const getUsers = () => users;
