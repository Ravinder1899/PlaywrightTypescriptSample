import { Page, expect } from "@playwright/test"
import Locators from "../Utils/Locators"

export default class CartPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page
    }

    public async checkTermsAndConditionCheckbox() {
        await expect(this.page.locator(Locators.termsAndConditionCheckbox)).toBeVisible()
        await this.page.locator(Locators.termsAndConditionCheckbox).click()
    }

    public async clickCheckoutButton() {
        await expect(this.page.locator(Locators.checkoutButton)).toBeVisible()
        await this.page.locator(Locators.checkoutButton).click()
    }
}