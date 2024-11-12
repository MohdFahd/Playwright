import { expect, test } from "@playwright/test";
import { redirectToAppButtons } from "../fastn/login.space";

test("Test StartFreeTrial & login Button that navigates to fastn.ai", async ({
  page,
}) => {
  test.setTimeout(60000);
  await redirectToAppButtons(page);
  await expect(page).toHaveURL("https://fastn.ai/");
});
