import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("showcase supports form feedback, dialogs, tabs and shell switching", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Ready for the next move." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Preview move details" }).click();
  await expect(
    page.getByRole("dialog", { name: "Move details" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Done", exact: true }).click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await page.getByRole("button", { name: "Check preview" }).click();
  await expect(page.getByLabel("Email address")).toHaveAttribute(
    "aria-invalid",
    "true",
  );
  await page.getByLabel("Email address").fill("customer@example.com");
  await page.getByRole("button", { name: "Check preview" }).click();
  await expect(page.getByRole("status")).toContainText(
    "No move request was sent.",
  );
  await page.getByRole("tab", { name: "Empty state" }).click();
  await expect(
    page.getByRole("heading", { name: "No upcoming moves" }),
  ).toBeVisible();
  await page.getByLabel("Preview shell").selectOption("service_center");
  if (await page.getByRole("button", { name: "Menu", exact: true }).isVisible())
    await page.getByRole("button", { name: "Menu", exact: true }).click();
  await expect(
    page.getByRole("navigation", { name: "Service center navigation" }),
  ).toBeVisible();
});

test("is accessible and does not overflow the viewport", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(results.violations).toEqual([]);
  await page.getByRole("button", { name: "Preview move details" }).click();
  const dialogResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(dialogResults.violations).toEqual([]);
});

test("contract-backed Prism mock responds to the defined health operation", async ({
  request,
}) => {
  const response = await request.get("http://127.0.0.1:4010/health");
  expect(response.status()).toBe(200);
  expect(await response.json()).toEqual({ status: "ok" });
});
