const cubeIt = require("../lib/cube-it");

const mad = cubeIt("mad");
const red = cubeIt("red");
const nude = cubeIt("nude");
const and = cubeIt("&");
const online = cubeIt("online");

test("Should have (length * 2) - 1 rows", () => {
  expect(mad.length).toBe(5);
  expect(red.length).toBe(5);
  expect(nude.length).toBe(7);
  expect(and.length).toBe(1);
  expect(online.length).toBe(11);
});

test("Length of each row should be 2(length) + 2(length - 1) - 1", () => {
  mad.forEach(row => {
    expect(row.length).toBe(9);
  });
  red.forEach(row => {
    expect(row.length).toBe(9);
  });
  nude.forEach(row => {
    expect(row.length).toBe(13);
  });
  and.forEach(row => {
    expect(row.length).toBe(1);
  });
  online.forEach(row => {
    expect(row.length).toBe(21);
  });
});

test("Length of first row should be 2(length) + 2(length - 1) - 1", () => {
  expect(mad[0].length).toBe(9);
  expect(red[0].length).toBe(9);
  expect(nude[0].length).toBe(13);
  expect(and[0].length).toBe(1);
  expect(online[0].length).toBe(21);
});

test("Length of last row should be 2(length) + 2(length - 1) - 1", () => {
  expect(mad[0].length).toBe(9);
  expect(red[0].length).toBe(9);
  expect(nude[0].length).toBe(13);
  expect(online[0].length).toBe(21);
});

// g n i r t s
// 21
