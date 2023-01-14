import { PATCH, POST, GET, DELETE } from "../constants";
import apiCall from "./apiCall";
const BASE = "/api/claim-access";
import { generateHeaders } from "./helpers";

export const getAllClaimAccess = () =>
  apiCall(`${BASE}/all`, generateHeaders(), GET);
export const getAllPendingClaimAccess = () =>
  apiCall(`${BASE}/pending`, generateHeaders(), GET);
export const getClaimAccess = () => apiCall(`${BASE}`, generateHeaders(), GET);
export const addClaimAccess = (body = null) =>
  apiCall(`${BASE}`, generateHeaders(), POST, body);
export const updateClaimAccess = (body = null, id = "") =>
  apiCall(`${BASE}/${id}`, generateHeaders(), PATCH, body);
export const deleteClaimAccess = (id = "") =>
  apiCall(`${BASE}/${id}`, generateHeaders(), DELETE);
