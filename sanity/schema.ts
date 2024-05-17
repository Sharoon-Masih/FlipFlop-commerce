import { type SchemaTypeDefinition } from 'sanity'
import product from './schemas/product'
import category from './schemas/category'
import HeroImg from './schemas/heroImages'
import saleStatus from './schemas/saleStatus'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category,HeroImg,saleStatus],
}
