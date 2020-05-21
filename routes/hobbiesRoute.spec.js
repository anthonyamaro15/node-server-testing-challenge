const supertest = require("supertest");
const hobbiesRoute = require("./hobbiesRoute");

describe("hobbiesRoute", () => {
  describe("GET /api", () => {
    it("should return http status code 200 OK.", () => {
      return supertest(hobbiesRoute)
        .get("/api")
        .then((response) => {
          expect(response.status).toBe(200);
        });
    });
  });
});
