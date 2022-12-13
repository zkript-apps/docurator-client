import { PATCH, POST, GET } from "../constants";
import apiCall from "./apiCall";
const BASE = "/api/form138";
import { generateHeaders } from "./helpers";

export const getForm138 = () => apiCall(`${BASE}`, generateHeaders(), GET);
export const addForm138 = (body = null) =>
  apiCall(`${BASE}`, generateHeaders(), POST, body);
export const updateForm138 = (body = null, id = "") =>
  apiCall(`${BASE}/${id}`, generateHeaders(), PATCH, body);
export const getAllForm138WithAccess = (body = null) =>
  apiCall(`${BASE}/with-access`, generateHeaders(), GET, body);
