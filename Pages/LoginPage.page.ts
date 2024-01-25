import { Page, expect } from "@playwright/test"
import Locators from "../Utils/Locators"
import TestData from "../TestData/TestData"
import HelperMethods from "../HelperClasses/HelperMethods"

export default class LoginPage {
    private page: Page;

    private userEmail: string

    constructor(page: Page, uniqueEmail: string) {
        this.page = page
        this.userEmail = uniqueEmail
    }

    public async userLoginWithValidCredentials() {
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.emailLoginInputField)
        await this.page.locator(Locators.emailLoginInputField).fill(this.userEmail)
        await this.page.locator(Locators.passwordLoginInputField).fill(TestData.password)
        await this.page.locator(Locators.loginButton).click()

        await HelperMethods.waitForElementToBeVisible(this.page, Locators.logoutHeaderLink)
    }
}