import { PATCH, POST, PUT } from "../constants";
import apiCall from "./apiCall";
const BASE = "/api/users";
import { generateHeaders } from "./helpers";

export const addUser = (body = null) =>
  apiCall(`${BASE}`, generateHeaders(), POST, body);
export const verifyAuth = (token = null) =>
  apiCall(`${BASE}/verifyAuth?token=${token}`);
export const authenticateUser = (body = null) =>
  apiCall(`${BASE}/auth`, generateHeaders(), POST, body);
export const createAccount = (body = null) =>
  apiCall(`${BASE}/create-account`, generateHeaders(), POST, body);
export const updateUser = (body = null, id = "") =>
  apiCall(`${BASE}/${id}`, generateHeaders(), PATCH, body);
export const updateUserPassword = (body = null, id = "") =>
  apiCall(`${BASE}/change-password/${id}`, generateHeaders(), PATCH, body);
