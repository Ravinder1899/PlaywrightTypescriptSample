import { Page, expect } from "@playwright/test"
import Locators from "../Utils/Locators"

export default class HomePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page
    }

    public async clickDesktopComputerDropdownOption() {
        await expect(this.page.locator(Locators.computerDropdown)).toBeVisible()
        await this.page.locator(Locators.computerDropdown).hover()
        await expect(this.page.locator(Locators.desktopComputerOption)).toBeVisible()
        await this.page.locator(Locators.desktopComputerOption).click()

        expect(this.page.url()).toContain("/desktops")
    }
}