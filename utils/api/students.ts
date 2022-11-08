import { PATCH, POST } from "../constants";
import apiCall from "./apiCall";
const BASE = "/api/students";
import { generateHeaders, addConditionWithPagination } from "./helpers";

export const getPaginatedStudents = (conditions = "", page = 0, limit = "") =>
  apiCall(
    `${BASE}/paginated${addConditionWithPagination(conditions, page, limit)}`,
    generateHeaders()
  );
export const addStudents = (body = null) =>
  apiCall(`${BASE}`, generateHeaders(), POST, body);
export const updateStudent = (body = null, id = "") =>
  apiCall(`${BASE}/${id}`, generateHeaders(), PATCH, body);
