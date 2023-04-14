import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();
const id = process.env.ORDERDESK_STORE_ID || '';
const apiKey = process.env.ORDERDESK_API_KEY || '';
const URL = 'https://app.orderdesk.me/api/v2/orders'

export const fetchNewOrders = async(date: string) => {
  const urlWithParam = URL + '?search_start_date=' + date;

  try {
    const response = await fetch(urlWithParam, {
      method: 'GET',
      headers: {
        'ORDERDESK-STORE-ID': id,
        'ORDERDESK-API-KEY': apiKey,
        'Content-Type': 'application/json', 
      }
    })

    return response.json();
  } catch(error) {
    return error;
  }
};
