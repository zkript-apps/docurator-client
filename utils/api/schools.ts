import { PATCH, POST, GET } from "../constants";
import apiCall from "./apiCall";
const BASE = "/api/schools";
import { generateHeaders } from "./helpers";

export const getSchools = () => apiCall(`${BASE}`, generateHeaders(), GET);
export const addSchools = (body = null) =>
  apiCall(`${BASE}`, generateHeaders(), POST, body);
export const updateSchool = (body = null, id = "") =>
  apiCall(`${BASE}/${id}`, generateHeaders(), PATCH, body);
