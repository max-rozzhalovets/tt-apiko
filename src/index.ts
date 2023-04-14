import { getNormalizedDate } from "./utils/getNormalizedDate.js";
import { fetchNewOrders } from "./utils/fetchNewOrders.js";
import { Response } from "./types/Response.js";

setInterval(async() => {
  try {
    const date = getNormalizedDate();

    const response: Response = await fetchNewOrders(date);
  
    response.orders.map(({ id, shipping }) => {
      console.log('id: ', id);
      console.log('shipping adress: ', shipping.address1)
    })
  } catch (error) {
    console.log(error);
  }
}, 1000 * 60 * 60);
