export default class Locators {
    // Header elements
    public static registerHeaderLink: string = 'xpath=//a[@class="ico-register"]'
    public static loginHeaderLink: string = 'xpath=//a[@class="ico-login"]'
    public static logoutHeaderLink: string = 'xpath=//a[@class="ico-logout"]'
    public static shoppingCartLink: string = 'xpath=//a[@class="ico-cart"]'

    //Register page elemens=ts
    public static firstNameRegisterInputField: string = 'xpath=//input[@name="FirstName"]'
    public static lastNameRegisterInputField: string = 'xpath=//input[@name="LastName"]'
    public static emailRegisterInputField: string = 'xpath=//input[@name="Email"]'
    public static passwordRegisterInputField: string = 'xpath=//input[@name="Password"]'
    public static confirmPasswordRegisterInputField: string = 'xpath=//input[@name="ConfirmPassword"]'
    public static birthDateRegisterInputField: string = 'xpath=//select[@name="DateOfBirthDay"]'
    public static birthMonthRegisterInputField: string = 'xpath=//select[@name="DateOfBirthMonth"]'
    public static birthYearRegisterInputField: string = 'xpath=//select[@name="DateOfBirthYear"]'
    public static registerButton: string = 'xpath=//button[@id="register-button"]'
    public static registerSuccessMessage: string = 'xpath=//div[@class="result"]'

    //Login page elements
    public static emailLoginInputField: string = 'xpath=//input[@class="email"]'
    public static passwordLoginInputField: string = 'xpath=//input[@class="password"]'
    public static loginButton: string = 'xpath=//button[contains(@class,"login-button")]'

    //Home page elements
    public static computerDropdown: string = 'xpath=(//ul[contains(@class,"top-menu")]//a[text()="Computers "])[1]'
    public static desktopComputerOption: string = 'xpath=(//ul[@class="sublist first-level"])[1]//a[text()="Desktops "]'

    // Desktop page elements
    public static digitalStormPerformancePc: string = 'xpath=//div[@class="item-grid"]//a[contains(text(),"Digital Storm")]'

    // Product description page elements
    public static productName: string = 'xpath=//div[@class="product-name"]/h1'
    public static addToCartButton: string = 'xpath=(//button[contains(@class,"add-to-cart-button")])[1]'
    public static productAddSuccessNotificationBar = 'xapth=//p[@class="content"]'

    // Shopping cart page elements
    public static productNameAddedInCart: string = 'xpath=//a[@class="product-name"]'
    public static termsAndConditionCheckbox: string = 'xpath=//input[@name="termsofservice"]'
    public static checkoutButton: string = 'xpath=//button[@name="checkout"]'

    // Checkout Page elements
    public static countryDropdown: string = 'xpath=//select[@name="BillingNewAddress.CountryId"]'
    public static cityInputField: string = 'xpath=//input[@name="BillingNewAddress.City"]'
    public static addressInputField: string = 'xpath=//input[@name="BillingNewAddress.Address1"]'
    public static zidCodeInputField: string = 'xpath=//input[@name="BillingNewAddress.ZipPostalCode"]'
    public static phoneNumberInputField: string = 'xpath=//input[@name="BillingNewAddress.PhoneNumber"]'
    public static newAddressContinueBtn: string = 'xpath=(//button[contains(@class,"new-address-next-step-button")])[1]'
    public static nextDayShippingRadioButton: string = 'xpath=//input[contains(@value,"Next Day Air")]'
    public static shippingMethodContinueBtn: string = 'xpath=//button[contains(@class,"shipping-method-next-step-button")]'
    public static creditCardPaymentMethodOption: string = 'xpath=//label[contains(text(),"Credit")]//preceding::input[1]'
    public static paymentMethodContinueBtn: string = 'xpath=//button[contains(@class,"payment-method-next-step-button")]'
    public static cardHolderNameInputField: string = 'xpath=//input[@name="CardholderName"]'
    public static cardNumberInputField: string = 'xpath=//input[@name="CardNumber"]'
    public static cardExpireMonthDropdown: string = 'xpath=//select[@name="ExpireMonth"]'
    public static cardExpireYearDropdown: string = 'xpath=//select[@name="ExpireYear"]'
    public static cardCodeInputField: string = 'xpath=//input[@name="CardCode"]'
    public static paymentInfoContinueBtn: string = 'xpath=//button[contains(@class,"payment-info-next-step-button")]'
    public static confirmOrderContinueBtn: string = 'xpath=//button[contains(@class,"confirm-order-next-step-button")]'
    public static orderCompleteSuccessMessage: string = 'xpath=(//div[contains(@class,"order-completed")]//strong)[1]'
    public static orderCompleteContinueBtn: string = 'xpath=//button[contains(@class,"order-completed-continue-button")]'
}