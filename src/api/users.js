import { Get, Post, Login, Put, Patch, Redirection } from "./base.api";

export function authUser(userInfo) {
  const apiParam = {
    endpoint: "/api/auth/login",
    body: userInfo
  }
  return Login(apiParam);
}

export function auth2UserGoogle() {
  const apiParam = {
    endpoint: "/api/auth/login/google",
    body: null
  }
  return Redirection(apiParam);
}

export async function addUser(userInfo) {
  const apiParam = {
    endpoint: "/api/users",
    body: userInfo
  }
  return Post(apiParam);
}

export async function getAllUsers() {
  const apiParam = {
    endpoint: "/api/users",
    body: null
  }
  return Get(apiParam);
}

export async function updateUser(name) {
  const apiParam = {
    endpoint: "/api/users",
    body: name
  }
  return Put(apiParam);
}

export async function verifyEmail(code) {
  const apiParam = {
    endpoint: "/api/users/verify-email?token=" + code,
    body: null
  }
  return Get(apiParam);
}

export async function forgotPassword(email) {
  const apiParam = {
    endpoint: "/api/users/forgot-password",
    body: email
  }
  return Post(apiParam);
}

/**Depends on forgot password function*/
export async function resetPassword(resetPassword) {
  const apiParam = {
    endpoint: "/api/users/reset-password",
    body: resetPassword
  }
  return Patch(apiParam);
}

export async function updatePassword(updatePassword) {
  const apiParam = {
    endpoint: "/api/users/password",
    body: updatePassword
  }
  return Patch(apiParam);
}

export default {
  authUser,
  auth2UserGoogle,
  addUser,
  getAllUsers,
  updateUser,
  forgotPassword,
  resetPassword,
  updatePassword
}