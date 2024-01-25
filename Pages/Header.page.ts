import { Page, expect } from "@playwright/test"
import Locators from "../Utils/Locators"

export default class Header {
    private page: Page;

    constructor(page: Page) {
        this.page = page
    }

    public async clickRegisterLink() {
        await expect(this.page.locator(Locators.registerHeaderLink)).toBeVisible()
        await this.page.locator(Locators.registerHeaderLink).click()
        expect(this.page.url()).toContain("/register")
    }

    public async clickLoginLink() {
        await expect(this.page.locator(Locators.loginHeaderLink)).toBeVisible()
        await this.page.locator(Locators.loginHeaderLink).click()
        expect(this.page.url()).toContain("/login")
    }

    public async clickShoppingCartLink() {
        await expect(this.page.locator(Locators.shoppingCartLink)).toBeVisible()
        await this.page.locator(Locators.shoppingCartLink).click()
        expect(this.page.url()).toContain("/cart")
    }

    public async clickLogoutLink() {
        await expect(this.page.locator(Locators.logoutHeaderLink)).toBeVisible()
        await this.page.locator(Locators.logoutHeaderLink).click()
        await expect(this.page.locator(Locators.loginHeaderLink)).toBeVisible()
    }
}