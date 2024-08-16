import { Get, Post, Put, Delete } from "./base.api";

export async function addActualitie(actualitie) {
  const apiParam = {
    endpoint: "/api/actualities",
    body: actualitie
  }
  return Post(apiParam);
}

export async function getAllActualities() {
  const apiParam = {
    endpoint: "/actualities",
    body: null
  }
  return Get(apiParam);
}

export async function getActualitieById(id) {
  const apiParam = {
    endpoint: "/api/actualities/" + id,
    body: null
  }
  return Get(apiParam);
}

export async function updateActualitieById(id, actualitie) {
  const apiParam = {
    endpoint: "/api/actualities/" + id,
    body: actualitie
  }
  return Put(apiParam);
}

export async function deleteActualitieById(id) {
  const apiParam = {
    endpoint: "/api/actualities/" + id,
    body: null
  }
  return Delete(apiParam);
}

export default {
  addActualitie,
  getAllActualities,
  getActualitieById,
  updateActualitieById,
  deleteActualitieById
}