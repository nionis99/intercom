export default function authHeader() {
  const token = localStorage.getItem('accessToken');

  return token ? { Authorization: token } : {};
}
