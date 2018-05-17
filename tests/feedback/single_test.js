module.exports = {
  'Base test of feedback page' : function (browser) {
    browser
      .url('https://feedback.gopuff.com/feedback/happy/a/index.html')
      .waitForElementVisible('body', 4000)
      .click("div.gp_star")
      .click('div.gp_button')
      .waitForElementNotPresent('div.gp_button', 3000)
      .waitForElementPresent('div.thanksPage', 3000)
      .end();
  }
};

