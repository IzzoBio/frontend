import { Get, Post, Put, Delete } from "./base.api";

export async function addRequestCUA(requestCUA) {
  const apiParam = {
    endpoint: "/api/requestCUAs",
    body: requestCUA
  }
  return Post(apiParam);
}

export async function getAllRequestCUAs() {
  const apiParam = {
    endpoint: "/api/requestCUAs",
    body: null
  }
  return Get(apiParam);
}

export async function getRequestCUAById(id) {
  const apiParam = {
    endpoint: "/api/requestCUAs/" + id,
    body: null
  }
  return Get(apiParam);
}

export async function updateRequestCUAById(id, requestCUA) {
  const apiParam = {
    endpoint: "/api/requestCUAs/" + id,
    body: requestCUA
  }
  return Put(apiParam);
}

export async function deleteRequestCUAById(id) {
  const apiParam = {
    endpoint: "/api/requestCUAs/" + id,
    body: null
  }
  return Delete(apiParam);
}
export default {
  addRequestCUA,
  getAllRequestCUAs,
  getRequestCUAById,
  updateRequestCUAById,
  deleteRequestCUAById
}