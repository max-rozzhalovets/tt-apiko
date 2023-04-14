import { Order } from "./Order";

export interface Response {
  status: string,
  execution_time: string,
  total_records: number,
  records_returned: number,
  offset: number,
  limit: number,
  orders: Order[] 
}
