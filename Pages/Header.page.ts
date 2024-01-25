import { Page, expect } from "@playwright/test"
import Locators from "../Utils/Locators"
import HelperMethods from "../HelperClasses/HelperMethods"

export default class Header {
    private page: Page;

    constructor(page: Page) {
        this.page = page
    }

    public async clickRegisterLink() {
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.registerHeaderLink)
        await this.page.locator(Locators.registerHeaderLink).click()
        expect(this.page.url()).toContain("/register")
    }

    public async clickLoginLinkAfterUserRegister() {
        try{
            await expect(this.page.locator(Locators.loginHeaderLink)).toBeVisible()
            await this.page.locator(Locators.loginHeaderLink).click()
            expect(this.page.url()).toContain("/login")
        } catch(error) {
            console.log(error)
        }
    }

    public async clickShoppingCartLink() {
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.shoppingCartLink)
        await this.page.locator(Locators.shoppingCartLink).click()
        expect(this.page.url()).toContain("/cart")
    }

    public async clickLogoutLink() {
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.logoutHeaderLink)
        await this.page.locator(Locators.logoutHeaderLink).click()
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.loginHeaderLink)
    }
}