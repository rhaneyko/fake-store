export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  count: number;
  size: string;
  category: string;
}

interface CartProduct {
  id: number;
  title: string;
  size: string;
  color?: string;
  price: number;
  count: number;
  image: string;
}
