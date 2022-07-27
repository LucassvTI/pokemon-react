import axios from "axios";

export const request = axios.create({ baseURL: "https://pokeapi.co/api/v2" });