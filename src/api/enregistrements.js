import { Get, Post, Put, Delete } from "./base.api";

export async function addEnregistrement(enregistrement) {
  const apiParam = {
    endpoint: "/api/enregistrements",
    body: enregistrement
  }
  return Post(apiParam);
}

export async function getAllEnregistrements() {
  const apiParam = {
    endpoint: "/api/enregistrements",
    body: null
  }
  return Get(apiParam);
}

export async function getEnregistrementById(id) {
  const apiParam = {
    endpoint: "/api/enregistrements/" + id,
    body: null
  }
  return Get(apiParam);
}

export async function updateEnregistrementById(id, enregistrement) {
  const apiParam = {
    endpoint: "/api/enregistrements/" + id,
    body: enregistrement
  }
  return Put(apiParam);
}

export async function deleteEnregistrementById(id) {
  const apiParam = {
    endpoint: "/api/enregistrements/" + id,
    body: null
  }
  return Delete(apiParam);
}

export default {
  addEnregistrement,
  getAllEnregistrements,
  getEnregistrementById,
  updateEnregistrementById,
  deleteEnregistrementById
}