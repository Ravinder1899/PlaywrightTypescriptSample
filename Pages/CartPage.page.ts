import { Page, expect } from "@playwright/test"
import Locators from "../Utils/Locators"
import HelperMethods from "../HelperClasses/HelperMethods"

export default class CartPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page
    }

    public async checkTermsAndConditionCheckbox() {
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.termsAndConditionCheckbox)
        await this.page.locator(Locators.termsAndConditionCheckbox).click()
    }

    public async clickCheckoutButton() {
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.checkoutButton)
        await this.page.locator(Locators.checkoutButton).click()
    }
}