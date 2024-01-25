import { Page, expect } from "@playwright/test"
import Locators from "../Utils/Locators"
import TestData from "../TestData/TestData"
import HelperMethods from "../HelperClasses/HelperMethods"

export default class CheckoutPage {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    public async fillBillingAddressDetails() {
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.countryDropdown)
        await this.page.locator(Locators.countryDropdown).selectOption(TestData.country)
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.cityInputField)
        await this.page.fill(Locators.cityInputField, TestData.city)
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.addressInputField)
        await this.page.fill(Locators.addressInputField, TestData.address)
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.zidCodeInputField)
        await this.page.fill(Locators.zidCodeInputField, TestData.zipCode)
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.phoneNumberInputField)
        await this.page.fill(Locators.phoneNumberInputField, TestData.phoneNumber)

        await HelperMethods.waitForElementToBeVisible(this.page, Locators.newAddressContinueBtn)
        await this.page.click(Locators.newAddressContinueBtn)
    }

    public async selectNextDayShippingMethod() {
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.nextDayShippingRadioButton)
        await this.page.click(Locators.nextDayShippingRadioButton)

        await HelperMethods.waitForElementToBeVisible(this.page, Locators.shippingMethodContinueBtn)
        await this.page.click(Locators.shippingMethodContinueBtn)
    }

    public async selectCreditCardPaymentMethod() {
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.creditCardPaymentMethodOption)
        await this.page.click(Locators.creditCardPaymentMethodOption)

        await HelperMethods.waitForElementToBeVisible(this.page, Locators.paymentMethodContinueBtn)
        await this.page.click(Locators.paymentMethodContinueBtn)
    }

    public async fillCreditCardDetails() {
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.cardHolderNameInputField)
        await this.page.fill(Locators.cardHolderNameInputField, TestData.cardHolderName)
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.cardNumberInputField)
        await this.page.fill(Locators.cardNumberInputField, TestData.cardNumber)
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.cardExpireMonthDropdown)
        await this.page.selectOption(Locators.cardExpireMonthDropdown, "08")
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.cardExpireYearDropdown)
        await this.page.selectOption(Locators.cardExpireYearDropdown, "2030")
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.cardCodeInputField)
        await this.page.fill(Locators.cardCodeInputField, TestData.cardCode)

        await HelperMethods.waitForElementToBeVisible(this.page, Locators.paymentInfoContinueBtn)
        await this.page.click(Locators.paymentInfoContinueBtn)
    }

    public async completeCheckoutProcess() {
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.confirmOrderContinueBtn)
        await this.page.click(Locators.confirmOrderContinueBtn)

        await HelperMethods.waitForElementToBeVisible(this.page, Locators.orderCompleteSuccessMessage)
        await expect(this.page.locator(Locators.orderCompleteSuccessMessage)).toHaveText("Your order has been successfully processed!")

        await HelperMethods.waitForElementToBeVisible(this.page, Locators.orderCompleteContinueBtn)
        await this.page.click(Locators.orderCompleteContinueBtn)
    }
}