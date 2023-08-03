const assert = require("chai").assert;
const app = require("../../assert");

//Asserting
describe("Test", function () {
  it("app should return test message", function () {
    assert.equal(app(), "Welcome to Qa Testing Automation");
  });
});
