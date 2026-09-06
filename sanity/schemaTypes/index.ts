import { type SchemaTypeDefinition } from 'sanity'
import { materialTesting } from './materialTesting'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    materialTesting,
  ],
}
