import test, { Browser, BrowserContext, Page, expect } from "@playwright/test"
import { chromium } from "@playwright/test"
import TestData from "../TestData/TestData"
import Locators from "../Utils/Locators"
import EnvironmentVariables from "../Utils/EnvironmentVariables"
import CommonMethods from "../HelperMethods/CommonMethods"
import Header from "../Pages/Header.page"
import RegisterPage from "../Pages/RegisterPage.page"
import LoginPage from "../Pages/LoginPage.page"
import HomePage from "../Pages/HomePage.page"
import DesktopPage from "../Pages/DesktopPage.page"
import ProductDescriptionPage from "../Pages/ProductDescriptionPage.page"
import CartPage from "../Pages/CartPage.page"
import CheckoutPage from "../Pages/CheckoutPage.page"

let header: Header;
let registerPage: RegisterPage;
let loginPage: LoginPage
let homePage: HomePage
let desktopPage: DesktopPage
let productDescriptionPage: ProductDescriptionPage
let cartPage: CartPage
let checkoutPage: CheckoutPage

test.describe('Smoke Suite', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    let userEmail: string;

    test.beforeEach(async () => {
        browser = await chromium.launch({
            headless: false
        })
        context = await browser.newContext()
        page = await context.newPage()
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto(EnvironmentVariables.webAppUrl)
        userEmail = TestData.email.replace('{uniqueValue}', CommonMethods.uniqueValue)

        header = new Header(page)
        registerPage = new RegisterPage(page, userEmail)
        loginPage = new LoginPage(page, userEmail)
        homePage = new HomePage(page)
        desktopPage = new DesktopPage(page)
        productDescriptionPage = new ProductDescriptionPage(page)
        cartPage = new CartPage(page)
        checkoutPage = new CheckoutPage(page)
    })

    test.afterEach(async () => {
        browser.close()
    })

    test('Verify user is able to register, login, add product to cart and complete the checkout process', async () => {
        await header.clickRegisterLink()
        await registerPage.userRegisterWithValidData()
        await header.clickLoginLink()
        await loginPage.userLoginWithValidCredentials()
        await homePage.clickDesktopComputerDropdownOption()
        await desktopPage.clickOnDigitalStormPerformancePc()
        await productDescriptionPage.addproductToCart()
        await header.clickShoppingCartLink()
        await expect(page.locator(Locators.productNameAddedInCart)).toHaveText(TestData.digitalStormPcName)
        await cartPage.checkTermsAndConditionCheckbox()
        await cartPage.clickCheckoutButton()
        await checkoutPage.fillBillingAddressDetails()
        await checkoutPage.selectNextDayShippingMethod()
        await checkoutPage.selectCreditCardPaymentMethod()
        await checkoutPage.fillCreditCardDetails()
        await checkoutPage.completeCheckoutProcess()
        await header.clickLogoutLink()
    })
})