import { PATCH, POST, GET } from "../constants";
import apiCall from "./apiCall";
const BASE = "/api/good-moral-certificates";
import { generateHeaders } from "./helpers";

export const getGoodMoralCertificates = () =>
  apiCall(`${BASE}`, generateHeaders(), GET);
export const addGoodMoralCertificates = (body = null) =>
  apiCall(`${BASE}`, generateHeaders(), POST, body);
export const updateGoodMoralCertificates = (body = null, id = "") =>
  apiCall(`${BASE}/${id}`, generateHeaders(), PATCH, body);
