import { PATCH, POST, GET } from "../constants";
import apiCall from "./apiCall";
const BASE = "/api/form137";
import { generateHeaders } from "./helpers";

export const getForm137 = () => apiCall(`${BASE}`, generateHeaders(), GET);
export const addForm137 = (body = null) =>
  apiCall(`${BASE}`, generateHeaders(), POST, body);
export const updateForm137 = (body = null, id = "") =>
  apiCall(`${BASE}/${id}`, generateHeaders(), PATCH, body);
