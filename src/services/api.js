const API_BASE = "http://localhost:8080";

export const login = async (data) => {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.text();
};

export const register = async (data) => {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.text();
};

export const getGifts = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_BASE}/gifts`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  return res.json();
};

export const addGift = async (gift) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_BASE}/gifts/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(gift),
  });

  return res.json();
};