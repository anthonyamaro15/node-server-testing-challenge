const supertest = require("supertest");
const hobbiesRoute = require("../api/server");

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

  describe("GET /api", () => {
    it("should return an array of hobbies", () => {
      return supertest(hobbiesRoute)
        .get("/api")
        .then((res) => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });
  });

  describe("POST /api", () => {
    it("should return an id of new post", () => {
      return supertest(hobbiesRoute)
        .post("/api")
        .then((response) => {
          expect(typeof response.body[0]).toBe("number");
        });
    });
  });

  describe("POST /api", () => {
    it("should return http status 201.", () => {
      return supertest(hobbiesRoute)
        .post("/api")
        .then((response) => {
          expect(response.status).toBe(201);
        });
    });
  });

  describe("DELETE /api/:id", () => {
    it("should return the id of the deleted hobby", () => {
      return supertest(hobbiesRoute)
        .delete("/api/:id")
        .then((response) => {
          expect(typeof response.body).toBe("number");
        });
    });
  });

  describe("DELETE /api/:id", () => {
    it("should return 200 status code", () => {
      return supertest(hobbiesRoute)
        .delete("/api/:id")
        .then((response) => {
          expect(response.status).toBe(200);
        });
    });
  });
});
