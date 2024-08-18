import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  page.setDefaultTimeout(60000); // 30 seconds
  await page.goto("about:blank");
  await page.goto("https://app.qa.fastn.ai/");
  await page.goto(
    "https://auth.qa.fastn.ai/realms/fastn/protocol/openid-connect/auth?client_id=fastn-app&redirect_uri=https%3A%2F%2Fapp.qa.fastn.ai%2Flogin%3Freturn_to%3D%252F&response_type=code&scope=openid&state=bff9a6946d9f42c4aeea26f6834c602e&code_challenge=siqv1cH-tU0fockMaZxKH4lg_zooHvMTMhxCeJfl7_8&code_challenge_method=S256&response_mode=query"
  );
  await page.getByPlaceholder("Email\n").click();
  await page.getByPlaceholder("Email\n").fill("");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByTestId("project-test").click();
  await page.getByRole("button", { name: "Not now" }).click();
});
