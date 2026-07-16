const TOKEN_KEY = 'skyops_token';
const ROLE_KEY = 'skyops_role';

export const localTokenStorage = {
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },
  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
  },
  getRole() {
    return localStorage.getItem(ROLE_KEY);
  },
  setRole(role) {
    localStorage.setItem(ROLE_KEY, role);
  },
  clear() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ROLE_KEY);
  },
};