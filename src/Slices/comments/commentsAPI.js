import axios from "axios";
import { config } from "../../app/settings";

export function getComment(id) {
  return axios.get(`${config.serverURL}/getComment?tourId=${id}`);
}
