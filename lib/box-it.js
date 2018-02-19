module.exports = {
  boxIt: function(str) {
    // Break string into array of characters
    str = str.split("");

    // For collecting rows to print
    const rows = [];

    // Make top edge
    rows.push(str.join(" "));

    // Make middle rows of box
    const size = str.length;
    for (var i = 1; i < size - 1; i++) {
      // Add left edge
      let row = [str[i]];
      // Add padding
      for (var j = 1; j < 2 * size - 2; j++) {
        row.push(" ");
      }
      // Add right edge
      row.push(str[size - i - 1]);

      // Flatten array and add to rows
      row = row.join("");
      rows.push(row);
    }

    // Make bottom edge
    rows.push(str.reverse().join(" "));

    return rows;
  }
};