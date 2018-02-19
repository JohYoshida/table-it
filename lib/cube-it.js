const cubeIt = str => {
  // Break string into array of characters
  str = str.split("");

  // For collecting rows to print
  const rows = [];

  // Make first row
  rows.push(makeFirstRow(str));
  // Make top rows
  const topRows = makeTopRows(str);
  topRows.forEach(row => {
    rows.push(row);
  });
  // Make middle row
  rows.push(makeMiddleRow(str));
  // Make bottom rows
  const bottomRows = makeBottomRows(str);
  bottomRows.forEach(row => {
    rows.push(row);
  });
  // Make last row
  rows.push(makeLastRow(str));

  return rows;
};

const makeFirstRow = str => {
  const len = str.length;
  let row = [];
  // Add padding
  for (var i = 1; i < 2 * len - 2; i++) {
    row.push(" ");
  }
  // Add reversed word, separated by padding
  for (var i = len; i >= 0; i--) {
    row.push(str[i]);
    row.push(" ");
  }
  // Pop off the extra padding
  row.pop();
  row = row.join("");
  return row;
};

const makeTopRows = str => {
  const len = str.length;
  const rows = [];

  for (var i = len - 2; i > 0; i--) {
    let row = [];
    // Add padding
    for (var j = 0; j < 2 * i; j++) {
      row.push(" ");
    }
    // Add left edge
    row.push(str[i]);
    // Fill face
    for (var j = 0; j < (len - 1) * 2 - 1; j++) {
      row.push(" ");
    }
    // Add right edge
    row.push(str[len - i - 1]);
    // Add padding
    for (var j = 3; j < 2 * (len - i); j++) {
      row.push(" ");
    }
    // Add perpendicular edge
    row.push(str[len - 1 - i]);

    // Flatten array and add to rows
    row = row.join("");
    rows.push(row);
  }
  return rows;
};

const makeMiddleRow = str => {
  const len = str.length;
  let row = [];
  // Add word, separated by padding
  for (var i = 0; i < len; i++) {
    row.push(str[i]);
    row.push(" ")
  }
  // Add padding
  for (var i = 4; i < 2 * len; i++) {
    row.push(" ");
  }
  // Add opposite corner
  row.push(str[len - 1])
  row = row.join("");
  return row;
};

const makeBottomRows = str => {
  return ["bottom rows"];
};

const makeLastRow = str => {
  return "last row";
};

module.exports = {
  cubeIt
};
