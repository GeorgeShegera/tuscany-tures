import axios from "axios";

export async function postAccount(username, password, email) {
  const response = await axios.post("https://localhost:7049/regUser", {
    userName: username,
    password: password,
    email: email,
  });
  return console.log(response);
}
