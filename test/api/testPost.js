const request = require("supertest");
const baseUrl = require("../../env");

describe("Post Request", () => {
  it("Success create user", async () => {
    const response = request(baseUrl()).post("/user").send({
      id: 12345,
      username: "Ridho Suhaebi Arrowi",
      firstname: "Ridho",
      lastname: "Suhaebi Arrowi",
      email: "test@test.com",
      password: "password",
      phone: "62812121212",
      userStatus: 1,
    });
    console.log((await response).status);
    console.log((await response).body);
  });
});
