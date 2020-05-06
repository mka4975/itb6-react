// eslint-disable-next-line no-undef
module.exports = {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  "Paginate through list": function (browser) {
    browser
      .url("http://localhost:8080")
      .waitForElementVisible("body")
      .assert.titleContains("Testing")
      .assert.containsText("span", "Testing Assignment")
      .waitForElementVisible("table")
      .assert.containsText("table", "Person 0")
      .assert.containsText("table", "Person 9")
      .assert.not.containsText("table", "Person 10")
      .click("button:last-child")
      .assert.containsText("table", "Person 10")
      .assert.containsText("table", "Person 19")
      .assert.not.containsText("table", "Person 9")
      .assert.not.containsText("table", "Person 20")
      .click("button:first-child")
      .assert.containsText("table", "Person 0")
      .assert.containsText("table", "Person 9")
      .assert.not.containsText("table", "Person 10")
      .end();
  },
};
