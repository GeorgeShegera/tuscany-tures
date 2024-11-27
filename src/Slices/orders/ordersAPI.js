import axios from "axios";
import { config } from "../../app/settings";

export function getOrdersAsync(token) {
  return axios.get(
    `${config.serverURL}/getUserTickets?username=${token.userName}`,
    {
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    }
  );
}
