import { PATCH, POST, GET } from "../constants";
import apiCall from "./apiCall";
const BASE = "/api/claim-access";
import { generateHeaders } from "./helpers";

export const getClaimAccess = () => apiCall(`${BASE}`, generateHeaders(), GET);
export const addClaimAccess = (body = null) =>
  apiCall(`${BASE}`, generateHeaders(), POST, body);
export const updateClaimAccess = (body = null, id = "") =>
  apiCall(`${BASE}/${id}`, generateHeaders(), PATCH, body);
