import axios from "axios";
import { config } from "../../app/settings";

export function getTourCards() {
  return axios.get(`${config.serverURL}/getTourCards`);
}

export function getTour(tourId) {
  return axios.get(`${config.serverURL}/getTourWebModel?tourId=${tourId}`);
}
