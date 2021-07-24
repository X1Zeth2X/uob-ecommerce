interface Product {
  name: string;
  image: string;
  price: number;
}

interface RootState {
  showCartDialog: boolean;
  showRightDrawer: boolean;
  selectedProduct: Product | null;
  filteredProducts: Product[];
  products: Product[];
  cart: Product[];
}

export { Product, RootState };
