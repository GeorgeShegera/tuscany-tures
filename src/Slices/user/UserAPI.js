import axios from "axios";
import { config } from "../../app/settings";

export async function postAccount(username, password, email) {
  const response = await axios.post("https://localhost:7049/regUser", {
    userName: username,
    password: password,
    email: email,
  });
}

export async function loginApiAsync(login, password) {
  const response = await axios.get(
    `${config.serverURL}/login?login=${login}&password=${password}`
  );
  return response.data;
}
