interface Category {
  name: string,
}

export interface Product {
  _id: string,
  name: string,
  description: string,
  images: any,
  price: number,
  slug: string,
  categories: Category[],
}

export interface ProductData extends Product {
  price_id: string,
}
