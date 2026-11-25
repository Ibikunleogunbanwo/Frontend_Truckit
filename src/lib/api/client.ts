import createClient from "openapi-fetch";
import type { paths } from "./schema";
import { resolveApiBaseUrl } from "./config";
export const api = createClient<paths>({
  baseUrl: resolveApiBaseUrl({
    useMocks: process.env.NEXT_PUBLIC_USE_MOCKS,
    mockUrl: process.env.NEXT_PUBLIC_MOCK_API_BASE_URL,
    apiUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
});
