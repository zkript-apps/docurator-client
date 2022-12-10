import { PATCH, POST, GET } from "../constants";
import apiCall from "./apiCall";
const BASE = "/api/birth-certificates";
import { generateHeaders } from "./helpers";

export const getBirthCertificates = () =>
  apiCall(`${BASE}`, generateHeaders(), GET);
export const addBirthCertificates = (body = null) =>
  apiCall(`${BASE}`, generateHeaders(), POST, body);
export const updateBirthCertificates = (body = null, id = "") =>
  apiCall(`${BASE}/${id}`, generateHeaders(), PATCH, body);
export const getBirthCertificatesWithAccess = () =>
  apiCall(`${BASE}/with-access`, generateHeaders(), GET);
