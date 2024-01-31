import { client } from "@/app/lib/sanity";
import { Product, ProductData } from "@/types/types";
;


export const getData = async (): Promise<Product[]> => {
  const query = `
*[_type == 'product' && references(*[_type == 'category' && name == 'popular']._id, categories) ]{
_id,
  name,
  description,
  images,
  price,
  price_id,
  "slug": slug.current,
  "categories": categories[]->{
    name
  }
}
  `;
  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    throw error;
  }
};



export const getProductData = async (slug: string): Promise<ProductData | null> => {
  if (!slug) {
    return null; 
  }

  const query = `*[ _type == 'product' && slug.current == '${slug}' ][0]{
      _id,
      images,
      price,
      price_id,
      name,
      description,
      "slug": slug.current,
      "categories": categories->{name}
    }
  `;


    const data = await client.fetch(query);
    return data;

};

