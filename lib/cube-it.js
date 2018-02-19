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
    rows.push(row)
  })
  // Make last row
  rows.push(makeLastRow(str));

  return rows;
};

const makeFirstRow = (str) => {
  let row = [];
  // Add padding
  for (var i = 1; i < 2 * str.length - 1; i++) {
    row.push(" ");
  }
  // Add reversed word, separated by padding
  for (var i = str.length; i >= 0; i--) {
    row.push(str[i]);
    row.push(" ")
  }
  // Pop off the extra padding
  row.pop();
  row = row.join("");
  return row;
}

const makeTopRows = (str) => {
  return ['top rows'];
}

const makeMiddleRow = (str) => {
  return 'middle row';
}

const makeBottomRows = (str) => {
  return ['bottom rows'];
}

const makeLastRow = (str) => {
  return 'last row';
}

module.exports = {
  cubeIt
};
