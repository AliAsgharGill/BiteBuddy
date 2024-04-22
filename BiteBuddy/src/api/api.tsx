import axios from "axios";

const baseURL = "http://localhost:3000";
// const baseURL = "http://localhost:3000/restaurants";

export const fetchRestaurants = async () => {
  const { data } = await axios.get(`${baseURL}/restaurants`);
  return data;
};

export const fetchUsers = async() => {
  const { data } = await axios.get(`${baseURL}/users`);
  return data;
};
