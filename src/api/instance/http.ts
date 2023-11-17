import axios from "axios";

const baseURL: string = "https://api.vitsell.ir/api/";
const timeout: number = 60000;
const token: string =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnZpdHNlbGwuaXJcL2FwaVwvc3RvcmVVc2VyXC9hdXRoXC9jaGVja1ZlcmlmeUNvZGUiLCJpYXQiOjE3MDAxNzIxNTQsIm5iZiI6MTcwMDE3MjE1NCwianRpIjoiU29iNXk1eXVXRm55Q1NnciIsInN1YiI6MiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsInVzZXJfaWQiOjJ9.jS0-NfpOkJ4_FSmyOikq-WsyUwXgGpQ8cCfbPZnj8d8";

const headers: Object = {
  access_token: `Bearer ${token}`,
};
export const http = axios.create({
  baseURL,
  timeout,
  headers,
});
