const reverse = require("../utils/for_testing").reverse;
const logger = require("../utils/logger");

test("reverse of bat ", () => {
  const result = reverse("bat");
  expect(result).toBe("tab");
});

test("reverse of react", () => {
  const result = reverse("react");
  console.log(result);
  expect(result).toBe("tcaer");
});

test("reverse of releveler", () => {
  const result = reverse("releveler");
  expect(result).toBe("releveler");
});
