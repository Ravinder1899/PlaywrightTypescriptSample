import { Page, expect } from "@playwright/test"

export default class HelperMethods {
    public static async waitForElementToBeVisible(page: Page, element: string) {
        try {
            await page.waitForSelector(element, { state: 'visible', timeout: 60000 });
        } catch (error) {
            console.log(error)
        }
    }
}