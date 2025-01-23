import axios from "axios";
import { config } from "../../app/settings";

export function getOrdersAsync(token) {
  return axios.get(`${config.serverURL}/getUserTickets?userId=${token.id}`, {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });
}
