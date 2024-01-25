import { Page, expect } from "@playwright/test"
import Locators from "../Utils/Locators"
import TestData from "../TestData/TestData"

export default class RegisterPage {
    private page: Page;

    private userEmail: string

    constructor(page: Page, uniqueEmail: string) {
        this.page = page
        this.userEmail = uniqueEmail
    }

    public async userRegisterWithValidData() {
        await expect(this.page.locator(Locators.firstNameRegisterInputField)).toBeVisible()
        await this.page.locator(Locators.firstNameRegisterInputField).fill(TestData.firstName)
        await this.page.locator(Locators.lastNameRegisterInputField).fill(TestData.lastName)
        await this.page.locator(Locators.birthDateRegisterInputField).selectOption("1")
        await this.page.locator(Locators.birthMonthRegisterInputField).selectOption("January")
        await this.page.locator(Locators.birthYearRegisterInputField).selectOption("2000")
        await this.page.locator(Locators.emailRegisterInputField).fill(this.userEmail)
        await this.page.locator(Locators.passwordRegisterInputField).fill(TestData.password)
        await this.page.locator(Locators.confirmPasswordRegisterInputField).fill(TestData.password)
        await this.page.locator(Locators.registerButton).click()

        await expect(this.page.locator(Locators.registerSuccessMessage)).toBeVisible()
        await expect(this.page.locator(Locators.registerSuccessMessage)).toHaveText(TestData.registerSuccessMessage)
    }
}