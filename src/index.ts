import dotenv from 'dotenv';
import { getNormalizedDate } from "./utils/getNormalizedDate.js";
import { fetchNewOrders } from "./utils/fetchNewOrders.js";
import { Response } from "./types/Response.js";

dotenv.config();
const timeInterval: number = Number(process.env.TIME_INTERVAL) || 1000 * 60 * 60;

//1000 * 60 * 60 = 1 hour 

setInterval(async() => {
  try {
    const date = getNormalizedDate(timeInterval);

    const response: Response = await fetchNewOrders(date);
  
    response.orders.map(({ id, shipping }) => {
      console.log('id: ', id);
      console.log('shipping adress: ', shipping.address1)
    })
  } catch (error) {
    console.log(error);
  }
}, timeInterval);
