import { Page, expect } from "@playwright/test"
import Locators from "../Utils/Locators"

export default class ProductDescriptionPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page
    }

    public async addproductToCart() {
        await expect(this.page.locator(Locators.addToCartButton)).toBeVisible()
        await this.page.click(Locators.addToCartButton)
    }
}