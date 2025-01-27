const { Builder, By, Key, until } = require('selenium-webdriver');

describe('Sign Up Form', () => {
  let driver;
  let baseUrl;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
    baseUrl = 'http://localhost:3000/signup'; // Replace with the actual URL of your application
  });

  afterAll(async () => {
    await driver.quit();
  });

  // Function to find element by class name and send keys
  const findElementByClassAndSendKeys = async (className, text) => {
    const element = await driver.findElement(By.className(className));
    await element.sendKeys(text);
  };

  // Test successful registration with valid data
  it('should register a new user with valid data', async () => {
    await driver.get(baseUrl);

    await findElementByClassAndSendKeys('firstName', 'John');
    await findElementByClassAndSendKeys('lastName', 'Doe');
    await findElementByClassAndSendKeys('email', 'johndoe@example.com');
    await findElementByClassAndSendKeys('contact', '1234567890');
    await findElementByClassAndSendKeys('password', 'password123');
    await findElementByClassAndSendKeys('confirmPassword', 'password123');

    const submitButton = await driver.findElement(By.className('submitu'));
    await submitButton.click();

    const registrationSuccessMessage = await driver.wait(until.elementLocated(By.className('message')), 5000);
    const messageText = await registrationSuccessMessage.getText();
    expect(messageText).toContain('Registration successful!');
  });

  // Test with missing first name
  it('should show error for missing first name', async () => {
    await driver.get(baseUrl);

    await findElementByClassAndSendKeys('lastName', 'Doe');
    await findElementByClassAndSendKeys('email', 'johndoe@example.com');
    await findElementByClassAndSendKeys('contact', '1234567890');
    await findElementByClassAndSendKeys('password', 'password123');
    await findElementByClassAndSendKeys('confirmPassword', 'password123');

    const submitButton = await driver.findElement(By.className('submitu'));
    await submitButton.click();

    const firstNameError = await driver.wait(until.elementLocated(By.cssSelector('.inputufn .error')), 5000);
    const firstNameErrorMessage = await firstNameError.getText();
    expect(firstNameErrorMessage).toContain('First name is required.');
  });

  // Add more test cases here following the same pattern

});