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
    title: 'كمبيوتر محمول عالي الأداء',
    description: 'معالج من الجيل الأحدث، 16 جيجابايت رام، 512 جيجابايت SSD. مثالي للعمل واللعب.',
    price: '3500 ريال',
    discount: 'خصم 15%',
    storeName: 'إلكترونيات الخرمة',
    storeId: 'store-1',
    category: 'إلكترونيات',
    imageId: 'deal-1',
    status: 'approved',
    createdAt: new Date('2023-10-01'),
  },
  {
    id: '2',
    title: 'جاكيتات مجموعة الشتاء',
    description: 'جاكيتات أنيقة ودافئة لموسم البرد. متوفرة بجميع المقاسات.',
    price: '250 ريال',
    discount: 'خصم 30%',
    storeName: 'أزياء عصرية',
    storeId: 'store-2',
    category: 'أزياء',
    imageId: 'deal-2',
    status: 'approved',
    createdAt: new Date('2023-10-02'),
  },
  {
    id: '3',
    title: 'وجبة عشاء عائلية خاصة',
    description: 'وجبة كاملة لعائلة مكونة من أربعة أفراد. تشمل المقبلات والطبق الرئيسي والحلوى.',
    price: '180 ريال',
    discount: 'خصم 25%',
    storeName: 'المطعم الملكي',
    storeId: 'store-3',
    category: 'مطاعم',
    imageId: 'deal-3',
    status: 'approved',
    createdAt: new Date('2023-10-03'),
  },
  {
    id: '4',
    title: 'طاولة خشبية مصنوعة يدوياً',
    description: 'طاولة قهوة مصنوعة بحرفية لتكمل غرفة المعيشة الخاصة بك.',
    price: '400 ريال',
    discount: 'خصم 10%',
    storeName: 'أساسيات المنزل',
    storeId: 'store-4',
    category: 'المنزل والحديقة',
    imageId: 'deal-4',
    status: 'pending',
    createdAt: new Date('2023-10-04'),
  },
  {
    id: '5',
    title: 'صندوق خضروات عضوية',
    description: 'صندوق أسبوعي من الخضروات الطازجة والعضوية من المزارع المحلية.',
    price: '75 ريال',
    discount: 'اشترِ 1 واحصل على 1',
    storeName: 'البقالة الخضراء',
    storeId: 'store-1',
    category: 'بقالة',
    imageId: 'deal-5',
    status: 'approved',
    createdAt: new Date('2023-10-05'),
  },
  {
    id: '6',
    title: 'قص شعر وحلاقة للرجال',
    description: 'قص شعر احترافي وحلاقة كلاسيكية من حلاقينا الخبراء.',
    price: '50 ريال',
    discount: 'خصم 20%',
    storeName: 'حلاقة السادة',
    storeId: 'store-2',
    category: 'الصحة والجمال',
    imageId: 'deal-6',
    status: 'rejected',
    createdAt: new Date('2023-10-06'),
  },
   {
    id: '7',
    title: 'تغيير زيت سيارة ممتاز',
    description: 'خدمة تغيير زيت اصطناعي كامل لجميع موديلات السيارات. تشمل تغيير الفلتر.',
    price: '150 ريال',
    discount: 'خصم 50 ريال',
    storeName: 'مركز الخرمة للعناية بالسيارات',
    storeId: 'store-3',
    category: 'سيارات',
    imageId: 'deal-7',
    status: 'pending',
    createdAt: new Date('2023-10-07'),
  },
   {
    id: '8',
    title: 'عضوية فصل يوجا',
    description: 'وصول غير محدود لمدة شهر واحد لجميع فصول اليوجا والتأمل.',
    price: '300 ريال',
    discount: 'شهر مجاني',
    storeName: 'نادي زينيث الرياضي',
    storeId: 'store-4',
    category: 'رياضة',
    imageId: 'deal-8',
    status: 'approved',
    createdAt: new Date('2023-10-08'),
  },
];

const categories: Category[] = [
  { id: 'electronics', name: 'إلكترونيات', dealCount: 23 },
  { id: 'fashion', name: 'أزياء', dealCount: 45 },
  { id: 'restaurants', name: 'مطاعم', dealCount: 18 },
  { id: 'home-garden', name: 'المنزل والحديقة', dealCount: 12 },
  { id: 'groceries', name: 'بقالة', dealCount: 31 },
  { id: 'health-beauty', name: 'الصحة والجمال', dealCount: 28 },
  { id: 'automotive', name: 'سيارات', dealCount: 9 },
  { id: 'sports', name: 'رياضة', dealCount: 15 },
];

const users: User[] = [
    {
        id: 'user-1',
        name: 'المشرف',
        email: 'admin@overly.com',
        role: 'admin',
        createdAt: new Date('2023-01-01'),
        avatarId: 'user-avatar-1'
    },
    {
        id: 'user-2',
        name: 'صالح الغامدي',
        email: 'saleh.g@example.com',
        role: 'store_owner',
        storeName: 'إلكترونيات الخرمة',
        createdAt: new Date('2023-02-15'),
        avatarId: 'user-avatar-2'
    },
    {
        id: 'user-3',
        name: 'فاطمة الزهراني',
        email: 'fatima.z@example.com',
        role: 'store_owner',
        storeName: 'أزياء عصرية',
        createdAt: new Date('2023-03-10'),
        avatarId: 'user-avatar-3'
    },
    {
        id: 'user-4',
        name: 'أحمد المالكي',
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
