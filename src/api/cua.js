import { Get, Post, Put, Delete } from "./base.api";

export async function addCua(cua) {
  const apiParam = {
    endpoint: "/api/cuas",
    body: cua
  }
  return Post(apiParam);
}

export async function getAllCuas() {
  const apiParam = {
    endpoint: "/api/cuas",
    body: null
  }
  return Get(apiParam);
}

export async function getCuaById(id) {
  const apiParam = {
    endpoint: "/api/cuas/" + id,
    body: null
  }
  return Get(apiParam);
}

export async function updateCuaById(id, cua) {
  const apiParam = {
    endpoint: "/api/cuas/" + id,
    body: cua
  }
  return Put(apiParam);
}

export async function deleteCuaById(id) {
  const apiParam = {
    endpoint: "/api/cuas/" + id,
    body: null
  }
  return Delete(apiParam);
}

export default {
  addCua,
  getAllCuas,
  getCuaById,
  updateCuaById,
  deleteCuaById
}