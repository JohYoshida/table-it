const boxIt = require("../lib/box-it");

const mad = boxIt("mad");
const red = boxIt("red");
const nude = boxIt("nude");
const and = boxIt("&");
const online = boxIt("online");

test("Should have as many rows as the string has letters", () => {
  expect(mad.length).toBe(3);
  expect(red.length).toBe(3);
  expect(nude.length).toBe(4);
  expect(and.length).toBe(1);
  expect(online.length).toBe(6);
});

test("Length of each row should be 2(length) - 1", () => {
  mad.forEach(row => {
    expect(row.length).toBe(5);
  });
  red.forEach(row => {
    expect(row.length).toBe(5);
  });
  nude.forEach(row => {
    expect(row.length).toBe(7);
  });
  and.forEach(row => {
    expect(row.length).toBe(1);
  });
  online.forEach(row => {
    expect(row.length).toBe(11);
  });
});

test("First row should be the string separated by spaces", () => {
  expect(mad[0]).toBe("m a d");
  expect(red[0]).toBe("r e d");
  expect(nude[0]).toBe("n u d e");
  expect(and[0]).toBe("&");
  expect(online[0]).toBe("o n l i n e");
});

test("Last row should be the string reversed and separated by spaces", () => {
  expect(mad[2]).toBe("d a m");
  expect(red[2]).toBe("d e r");
  expect(nude[3]).toBe("e d u n");
  expect(and[0]).toBe("&");
  expect(online[5]).toBe("e n i l n o");
});
