// types/product.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew: boolean;
  category?: string;
  description?: string;
  rating?: number;
  discount?: number;
}

export interface CarouselProps {
  title: string;
  products: Product[];
  showViewAllButton?: boolean;
  viewAllButtonText?: string;
  onViewAllClick?: () => void;
  className?: string;
  cardClassName?: string;
  showDots?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export interface ProductCardProps {
  product: Product;
  className?: string;
  onAddToCart?: (product: Product) => void;
  onProductClick?: (product: Product) => void;
  showAddToCartButton?: boolean;
  badgeColor?: string;
}