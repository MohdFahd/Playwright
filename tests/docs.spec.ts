import { expect, test } from "@playwright/test";
import { docs } from "../fastn/docs.space";

test("Test documentation page", async ({ page }) => {
  test.setTimeout(120000); // Set timeout to 2 minutes
  // Call the docs function, which navigates and returns the new popup page
  const docPage = await docs(page);

  // Verify the URL of the new blank page
  await expect(docPage).toHaveURL("https://fastn.ai/documentation"); // Adjust URL as needed
});
