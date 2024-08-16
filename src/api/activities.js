import { Get, Post, Put, Delete } from "../baseApi";

export async function addActivitie(activitie) {
  const apiParam = {
    endpoint: "/api/activities",
    body: activitie
  }
  return Post(apiParam);
}

export async function getAllActivities() {
  const apiParam = {
    endpoint: "/api/activities",
    body: null
  }
  return Get(apiParam);
}

export async function getActivitieById(id) {
  const apiParam = {
    endpoint: "/api/activities/" + id,
    body: null
  }
  return Get(apiParam);
}

export async function updateActivitieById(id, activitie) {
  const apiParam = {
    endpoint: "/api/activities/" + id,
    body: activitie
  }
  return Put(apiParam);
}

export async function deleteActivitieById(id) {
  const apiParam = {
    endpoint: "/api/activities/" + id,
    body: null
  }
  return Delete(apiParam);
}

export default {
  addActivitie,
  getAllActivities,
  getActivitieById,
  updateActivitieById,
  deleteActivitieById
}