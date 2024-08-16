import axios from "axios";
import Cookies from "js-cookie";

const baseURL = import.meta.env.VITE_BASE_URL;

const setTokenInCookie = (token) => {
  Cookies.set("token", token, { expires: 7 });
};

const getTokenFromCookie = () => {
  return Cookies.get("token");
};

export async function Login({ endpoint, body }) {
  Cookies.set("token", null);
  try {
    const { data } = await axios.post(`${baseURL}${endpoint}`, body);

    setTokenInCookie(data.token);

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function Redirection({ endpoint }) {
  try {
    window.location.href = baseURL + endpoint;
  } catch (error) {
    console.log(error);
  }
}

export async function Post({ endpoint, body }) {
  try {
    const token = getTokenFromCookie();
    var auth = `Bearer ${token}`;
    if (!token) auth = null;

    const config = {
      headers: {
        Authorization: auth,
      },
      body: body,
    };

    const { data } = await axios.post(`${baseURL}${endpoint}`, body, config);

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function Get({ endpoint, body }) {
  try {
    const token = getTokenFromCookie();
    var auth = `Bearer ${token}`;
    if (!token) auth = null;

    const config = {
      headers: {
        Authorization: auth,
      },
      body: body,
    };

    const { data } = await axios.get(`${baseURL}${endpoint}`, config);

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function Put({ endpoint, body }) {
  try {
    const token = getTokenFromCookie();
    var auth = `Bearer ${token}`;
    if (!token) auth = null;

    const config = {
      headers: {
        Authorization: auth,
      },
      body: body,
    };

    const { data } = await axios.put(`${baseURL}${endpoint}`, body, config);

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function Patch({ endpoint, body }) {
  try {
    const token = getTokenFromCookie();
    var auth = `Bearer ${token}`;
    if (!token) auth = null;

    const config = {
      headers: {
        Authorization: auth,
      },
      body: body,
    };

    const { data } = await axios.put(`${baseURL}${endpoint}`, body, config);

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function Delete({ endpoint, body }) {
  try {
    const token = getTokenFromCookie();
    var auth = `Bearer ${token}`;
    if (!token) auth = null;

    const config = {
      headers: {
        Authorization: auth,
      },
      body: body,
    };

    const { data } = await axios.delete(`${baseURL}${endpoint}`, config);

    return data;
  } catch (error) {
    console.log(error);
  }
}