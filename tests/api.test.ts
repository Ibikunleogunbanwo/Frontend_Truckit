import { describe, expect, it } from "vitest";
import { resolveApiBaseUrl } from "@/lib/api/config";
describe("API environment selection", () => {
  it("uses Prism only when explicitly enabled", () => {
    expect(
      resolveApiBaseUrl({
        useMocks: "true",
        mockUrl: "http://localhost:4010",
        apiUrl: "https://api.example/api/v1",
      }),
    ).toBe("http://localhost:4010");
    expect(
      resolveApiBaseUrl({
        useMocks: "false",
        apiUrl: "https://api.example/api/v1",
      }),
    ).toBe("https://api.example/api/v1");
  });
  it("does not silently enable mocks when configuration is absent", () => {
    expect(resolveApiBaseUrl({})).toBe("http://localhost:8000/api/v1");
  });
});
