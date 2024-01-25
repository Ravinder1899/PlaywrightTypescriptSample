import { Page, expect } from "@playwright/test"
import Locators from "../Utils/Locators"
import TestData from "../TestData/TestData"

export default class DesktopPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page
    }

    public async clickOnDigitalStormPerformancePc() {
        await expect(this.page.locator(Locators.digitalStormPerformancePc)).toBeVisible()
        await this.page.locator(Locators.digitalStormPerformancePc).click()

        await expect(this.page.locator(Locators.productName)).toHaveText(TestData.digitalStormPcName)
    }
}