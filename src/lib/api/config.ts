type ApiEnvironment = { useMocks?: string; mockUrl?: string; apiUrl?: string };
export function resolveApiBaseUrl({
  useMocks,
  mockUrl,
  apiUrl,
}: ApiEnvironment) {
  return useMocks === "true"
    ? mockUrl || "http://localhost:4010"
    : apiUrl || "http://localhost:8000/api/v1";
}
