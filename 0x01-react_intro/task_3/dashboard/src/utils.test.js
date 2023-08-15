import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("getFullYear", () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toEqual(currentYear);
});

describe("getFooterCopy", () => {
  expect(getFooterCopy(true)).toEqual("Holberton School");
  expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
});

describe("getLatestNotification", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
