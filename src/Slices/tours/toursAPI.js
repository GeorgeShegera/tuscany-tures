import axios from "axios";
import { config } from "../../app/settings";

export function getPopularTourCards(count) {
  return axios.get(`${config.serverURL}/getPopularTourCards/${count}`);
}

export function getTour(tourId) {
  return axios.get(`${config.serverURL}/getTourWebModel?tourId=${tourId}`);
}

export function getTourCards(pagPage, cardsCount) {
  return axios.get(`${config.serverURL}getTourCards/${pagPage}/${cardsCount}`);
}
