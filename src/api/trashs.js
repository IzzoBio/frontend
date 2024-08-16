import { Get, Post, Put, Delete } from "./base.api";

export async function addTrash(trash) {
  const apiParam = {
    endpoint: "/api/trash",
    body: trash
  }
  return Post(apiParam);
}

export async function getAllTrashs() {
  const apiParam = {
    endpoint: "/api/trash",
    body: null
  }
  return Get(apiParam);
}

export async function getTrashById(id) {
  const apiParam = {
    endpoint: "/api/trash/" + id,
    body: null
  }
  return Get(apiParam);
}

export async function updateTrashById(id, trash) {
  const apiParam = {
    endpoint: "/api/trash/" + id,
    body: trash
  }
  return Put(apiParam);
}

export async function deleteTrashById(id) {
  const apiParam = {
    endpoint: "/api/trash/" + id,
    body: null
  }
  return Delete(apiParam);
}

export default {
  addTrash,
  getAllTrashs,
  getTrashById,
  updateTrashById,
  deleteTrashById
}