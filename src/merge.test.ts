import { hello } from "./merge";

test("hello", () => {
  expect(hello("world")).toBe("Hello world");
});
