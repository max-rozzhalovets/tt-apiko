export interface OrderItem {
  id: string,
  name: string,
  price: number,
  quantity: number,
  weight: number,
  code: string,
  delivery_type: string,
  category_code: string,
  fulfillment_method: string,
  variation_list: [],
  metadata: [] | object,
  }
