import { PATCH, POST, GET } from "../constants";
import apiCall from "./apiCall";
const BASE = "/api/students";
import { generateHeaders } from "./helpers";

export const getStudents = () => apiCall(`${BASE}`, generateHeaders(), GET);
export const getStudent = () =>
  apiCall(`${BASE}/information`, generateHeaders(), GET);
export const addStudents = (body = null) =>
  apiCall(`${BASE}`, generateHeaders(), POST, body);
export const updateStudent = (body = null, id = "") =>
  apiCall(`${BASE}/${id}`, generateHeaders(), PATCH, body);
export const claimStudentRecord = (body = null, lrn = "") =>
  apiCall(`${BASE}/claim-record/${lrn}`, generateHeaders(), PATCH, body);
