import { expect, test } from "@playwright/test";
import { redirectToAppButtons } from "../fastn/login.space";

test("Test StartFreeTrial & login Button that navigates to fastn.ai", async ({
  page,
}) => {
  test.setTimeout(120000); // Set timeout to 2 minutes
  await redirectToAppButtons(page);
  await expect(page).toHaveURL("https://fastn.ai/");
});
