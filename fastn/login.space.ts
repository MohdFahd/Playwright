import { expect } from "@playwright/test";
const waitFor = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function redirectToAppButtons(page) {
  // Navigate to the initial page
  await page.goto("https://fastn.ai/");

  // First popup: Perform login
  const loginPopupPromise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Login" }).click();
  const loginPopup = await loginPopupPromise;

  await performLogin(loginPopup);

  // Sign out
  await loginPopup.getByRole("button", { name: "Open user menu a" }).click();
  await loginPopup.getByTestId("sign-out").click();

  // Second popup: Start free trial and login
  const freeTrialPopupPromise = page.waitForEvent("popup");
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "START FREE TRIAL" })
    .click();
  const freeTrialPopup = await freeTrialPopupPromise;

  await performLogin(freeTrialPopup);

  // Navigate to project control plane after login
  await freeTrialPopup.getByTestId("project-controlplane").click();
  await waitFor(3000);
}

// Helper function to handle login
async function performLogin(popupPage) {
  await popupPage.getByPlaceholder("Email\n").click();
  await popupPage.getByPlaceholder("Email\n").fill("automation@fastn.ai");
  await popupPage.getByPlaceholder("Password").click();
  await popupPage.getByPlaceholder("Password").fill("automation");
  await popupPage.getByRole("button", { name: "Continue" }).click();
}
