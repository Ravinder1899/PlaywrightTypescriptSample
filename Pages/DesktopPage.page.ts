import { Page, expect } from "@playwright/test"
import Locators from "../Utils/Locators"
import TestData from "../TestData/TestData"
import HelperMethods from "../HelperClasses/HelperMethods"

export default class DesktopPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page
    }

    public async clickOnDigitalStormPerformancePc() {
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.digitalStormPerformancePc)
        await this.page.locator(Locators.digitalStormPerformancePc).click()

        await HelperMethods.waitForElementToBeVisible(this.page, Locators.productName)
        await expect(this.page.locator(Locators.productName)).toHaveText(TestData.digitalStormPcName)
    }
}