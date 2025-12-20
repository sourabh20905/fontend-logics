import { Role } from "./roles";

export function login(role: Role) {
  document.cookie = `role=${role}; path=/`;
}

export function logout() {
  document.cookie = "role=; Max-Age=0; path=/";
}

export function getRoleFromCookie(cookie = "") {
  const match = cookie.match(/role=([^;]+)/);
  return match?.[1] ?? null;
}
