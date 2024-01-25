import { Page, expect } from "@playwright/test"
import Locators from "../Utils/Locators"
import HelperMethods from "../HelperClasses/HelperMethods"

export default class HomePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page
    }

    public async clickDesktopComputerDropdownOption() {
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.computerDropdown)
        await this.page.locator(Locators.computerDropdown).hover()
        await HelperMethods.waitForElementToBeVisible(this.page, Locators.desktopComputerOption)
        await this.page.locator(Locators.desktopComputerOption).click()

        expect(this.page.url()).toContain("/desktops")
    }
}