export type AuthHeader = { Authorization: string };

export default function authHeader(): AuthHeader | Record<string, unknown> {
  const token = localStorage.getItem('accessToken');

  return token ? { Authorization: token } : {};
}
