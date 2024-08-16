import { Get, Post, Put, Delete } from "./base.api";

export async function addSuggestion(suggestion) {
  const apiParam = {
    endpoint: "/api/suggestion",
    body: suggestion
  }
  return Post(apiParam);
}

export async function getAllSuggestions() {
  const apiParam = {
    endpoint: "/api/suggestion",
    body: null
  }
  return Get(apiParam);
}

export async function getSuggestionById(id) {
  const apiParam = {
    endpoint: "/api/suggestion/" + id,
    body: null
  }
  return Get(apiParam);
}

export async function updateSuggestionById(id, suggestion) {
  const apiParam = {
    endpoint: "/api/suggestion/" + id,
    body: suggestion
  }
  return Put(apiParam);
}

export async function deleteSuggestionById(id) {
  const apiParam = {
    endpoint: "/api/suggestion/" + id,
    body: null
  }
  return Delete(apiParam);
}

export default {
  addSuggestion,
  getAllSuggestions,
  getSuggestionById,
  updateSuggestionById,
  deleteSuggestionById
}