import { Page, expect } from "@playwright/test"
import Locators from "../Utils/Locators"
import HelperMethods from "../HelperClasses/HelperMethods"

export default class ProductDescriptionPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page
    }

    public async clickAddToCartButton() {
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.addToCartButton)
        await this.page.waitForTimeout(3000)
        await this.page.click(Locators.addToCartButton)
    }
}