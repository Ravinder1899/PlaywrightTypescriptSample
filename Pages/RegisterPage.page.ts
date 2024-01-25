import { Page, expect } from "@playwright/test"
import Locators from "../Utils/Locators"
import TestData from "../TestData/TestData"
import HelperMethods from "../HelperClasses/HelperMethods"

export default class RegisterPage {
    private page: Page;

    private userEmail: string

    constructor(page: Page, uniqueEmail: string) {
        this.page = page
        this.userEmail = uniqueEmail
    }

    public async userRegisterWithValidData() {
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.firstNameRegisterInputField)
        await this.page.locator(Locators.firstNameRegisterInputField).fill(TestData.firstName)
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.lastNameRegisterInputField)
        await this.page.locator(Locators.lastNameRegisterInputField).fill(TestData.lastName)
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.birthDateRegisterInputField)
        await this.page.locator(Locators.birthDateRegisterInputField).selectOption("1")
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.birthMonthRegisterInputField)
        await this.page.locator(Locators.birthMonthRegisterInputField).selectOption("January")
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.birthYearRegisterInputField)
        await this.page.locator(Locators.birthYearRegisterInputField).selectOption("2000")
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.emailRegisterInputField)
        await this.page.locator(Locators.emailRegisterInputField).fill(this.userEmail)
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.passwordRegisterInputField)
        await this.page.locator(Locators.passwordRegisterInputField).fill(TestData.password)
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.confirmPasswordRegisterInputField)
        await this.page.locator(Locators.confirmPasswordRegisterInputField).fill(TestData.password)
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.registerButton)
        await this.page.locator(Locators.registerButton).click()

        await HelperMethods.waitForElementToBeVisible(this.page, Locators.registerSuccessMessage)
        await expect(this.page.locator(Locators.registerSuccessMessage)).toHaveText(TestData.registerSuccessMessage)
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.registerContinueButton)
        await this.page.locator(Locators.registerContinueButton).click()
    }
}