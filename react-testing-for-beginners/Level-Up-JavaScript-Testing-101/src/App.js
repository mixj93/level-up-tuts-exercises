import { add } from './add'

export const total = (subTotal, shipping) => `$${add(subTotal, shipping)}`
