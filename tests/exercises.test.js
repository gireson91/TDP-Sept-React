require("chromedriver");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("selenium tests", function () {
    this.timeout(30_000);

    it("should show 26 miles as 41.6kms", async () => {
        const driver = await new Builder().forBrowser("chrome").build();
        try {
            await driver.get("http://localhost:3000/testing/ex1");
            const search = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div:nth-child(2) > input"));
            await search.sendKeys("26");
            const result = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div.mt-4.input-group > input"));
            expect(await result.getAttribute("value")).to.equal("41.6");
        } finally {
            await driver.quit();
        }
    })
    it("should show 64 kms as 40 miles", async () => {
        const driver = await new Builder().forBrowser("chrome").build();
        try {
            await driver.get("http://localhost:3000/testing/ex1");
            const search = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div.mt-4.input-group > input"));
            await search.sendKeys("64");
            const result = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div:nth-child(2) > input"));
            expect(await result.getAttribute("value")).to.equal("40");
        } finally {
            await driver.quit();
        }
    })
    it("should show 64 kms as 40 miles", async () => {
        const driver = await new Builder().forBrowser("chrome").build();
        try {
            await driver.get("http://localhost:3000/testing/ex2");
            for (let i=0; i<5; i++){
                await (await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(4)"))).click(); 
            }
            const result = await driver.findElement(By.css("#root > div > div.container > div.input-group > input"));
            expect(await result.getAttribute("value")).to.equal("5");
        } finally {
            //await driver.quit();
        }
    })
})