import { Page, expect } from "@playwright/test"
import Locators from "../Utils/Locators"
import TestData from "../TestData/TestData"

export default class LoginPage {
    private page: Page;

    private userEmail: string

    constructor(page: Page, uniqueEmail: string) {
        this.page = page
        this.userEmail = uniqueEmail
    }

    public async userLoginWithValidCredentials() {
        await expect(this.page.locator(Locators.emailLoginInputField)).toBeVisible()
        await this.page.locator(Locators.emailLoginInputField).fill(this.userEmail)
        await this.page.locator(Locators.passwordLoginInputField).fill(TestData.password)
        await this.page.locator(Locators.loginButton).click()

        await expect(this.page.locator(Locators.logoutHeaderLink)).toBeVisible()
    }
}