import { Page, expect } from "@playwright/test"
import Locators from "../Utils/Locators"
import TestData from "../TestData/TestData"

export default class CheckoutPage {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    public async fillBillingAddressDetails() {
        await expect(this.page.locator(Locators.countryDropdown)).toBeVisible()
        await this.page.locator(Locators.countryDropdown).selectOption(TestData.country)
        await this.page.fill(Locators.cityInputField, TestData.city)
        await this.page.fill(Locators.addressInputField, TestData.address)
        await this.page.fill(Locators.zidCodeInputField, TestData.zipCode)
        await this.page.fill(Locators.phoneNumberInputField, TestData.phoneNumber)

        await expect(this.page.locator(Locators.newAddressContinueBtn)).toBeVisible()
        await this.page.click(Locators.newAddressContinueBtn)
    }

    public async selectNextDayShippingMethod() {
        await expect(this.page.locator(Locators.nextDayShippingRadioButton)).toBeVisible()
        await this.page.click(Locators.nextDayShippingRadioButton)

        await expect(this.page.locator(Locators.shippingMethodContinueBtn)).toBeVisible()
        await this.page.click(Locators.shippingMethodContinueBtn)
    }

    public async selectCreditCardPaymentMethod() {
        await expect(this.page.locator(Locators.creditCardPaymentMethodOption)).toBeVisible()
        await this.page.click(Locators.creditCardPaymentMethodOption)

        await expect(this.page.locator(Locators.paymentMethodContinueBtn)).toBeVisible()
        await this.page.click(Locators.paymentMethodContinueBtn)
    }

    public async fillCreditCardDetails() {
        await expect(this.page.locator(Locators.cardHolderNameInputField)).toBeVisible()
        await this.page.fill(Locators.cardHolderNameInputField, TestData.cardHolderName)
        await this.page.fill(Locators.cardNumberInputField, TestData.cardNumber)
        await this.page.selectOption(Locators.cardExpireMonthDropdown, "08")
        await this.page.selectOption(Locators.cardExpireYearDropdown, "2030")
        await this.page.fill(Locators.cardCodeInputField, TestData.cardCode)

        await expect(this.page.locator(Locators.paymentInfoContinueBtn)).toBeVisible()
        await this.page.click(Locators.paymentInfoContinueBtn)
    }

    public async completeCheckoutProcess() {
        await expect(this.page.locator(Locators.confirmOrderContinueBtn)).toBeVisible()
        await this.page.click(Locators.confirmOrderContinueBtn)

        await expect(this.page.locator(Locators.orderCompleteSuccessMessage)).toBeVisible()
        await expect(this.page.locator(Locators.orderCompleteSuccessMessage)).toHaveText("Your order has been successfully processed!")

        await expect(this.page.locator(Locators.orderCompleteContinueBtn)).toBeVisible()
        await this.page.click(Locators.orderCompleteContinueBtn)
    }
}