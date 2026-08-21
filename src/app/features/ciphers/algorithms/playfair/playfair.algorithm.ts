export function playfairEncode(message: string): string {
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const preparedMessage = message
    .toUpperCase()
    .replace(/[^A-Z]/g, '')
    .replace(/J/g, 'I')
    .split('');

  const slicedMessage: string[] = [];

  let i = 0;
  while (i < preparedMessage.length) {
    let double: string = '';
    //in case if the last char does not have a pair
    if (preparedMessage[i + 1] === undefined) {
      double = preparedMessage[i] + 'X';
      i = i + 1;
      //e.g.: "LL" in "HELLO" is replaced with "LX"
    } else if (preparedMessage[i] === preparedMessage[i + 1]) {
      double = preparedMessage[i] + 'X';
      i = i + 1;
    } else {
      double = preparedMessage[i] + preparedMessage[i + 1];
      i = i + 2;
    }

    slicedMessage.push(double);
  }

  const encodedDoubles: string[] = [];

  for (let i = 0; i < slicedMessage.length; i++) {
    let idx1 = alphabet.indexOf(slicedMessage[i][0]);
    let idx2 = alphabet.indexOf(slicedMessage[i][1]);

    // Each row contains 5 characters, so dividing by 5 gives the row index
    // The remainder gives the position within the row (column)
    let row1 = Math.floor(idx1 / 5);
    let column1 = idx1 % 5;
    let row2 = Math.floor(idx2 / 5);
    let column2 = idx2 % 5;

    let newIdx1: number;
    let newIdx2: number;

    // Same row: move both characters one column to the right
    // Same column: move both characters one row down
    // Rectangle: swap the columns of the two characters
    if (row1 === row2) {
      column1 = (column1 + 1) % 5; //% 5 = wrap around when reaching the edge of the grid
      column2 = (column2 + 1) % 5;
      newIdx1 = row1 * 5 + column1; // Convert row and column back to a single index
      newIdx2 = row2 * 5 + column2;
    } else if (column1 === column2) {
      row1 = (row1 + 1) % 5;
      row2 = (row2 + 1) % 5;
      newIdx1 = row1 * 5 + column1;
      newIdx2 = row2 * 5 + column2;
    } else {
      let temp = column1;
      column1 = column2;
      column2 = temp;
      newIdx1 = row1 * 5 + column1;
      newIdx2 = row2 * 5 + column2;
    }

    const encodedDouble: string[] = [];
    encodedDouble.push(alphabet[newIdx1]);
    encodedDouble.push(alphabet[newIdx2]);

    encodedDoubles.push(encodedDouble.join(''));
  }

  return encodedDoubles.join('');
}

export function playfairDecode(message: string): string {
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const preparedMessage = message
    .toUpperCase()
    .replace(/[^A-Z]/g, '')
    .replace(/J/g, 'I')
    .split('');

  const slicedMessage: string[] = [];

  for (let i = 0; i < preparedMessage.length; i += 2) {
    const double = preparedMessage.slice(i, i + 2);
    slicedMessage.push(double.join(''));
  }

  const encodedDoubles: string[] = [];

  for (let i = 0; i < slicedMessage.length; i++) {
    let idx1 = alphabet.indexOf(slicedMessage[i][0]);
    let idx2 = alphabet.indexOf(slicedMessage[i][1]);

    let row1 = Math.floor(idx1 / 5);
    let column1 = idx1 % 5;
    let row2 = Math.floor(idx2 / 5);
    let column2 = idx2 % 5;

    let newIdx1: number;
    let newIdx2: number;

    if (row1 === row2) {
      column1 = (column1 - 1 + 5) % 5;
      column2 = (column2 - 1 + 5) % 5;
      newIdx1 = row1 * 5 + column1;
      newIdx2 = row2 * 5 + column2;
    } else if (column1 === column2) {
      row1 = (row1 - 1 + 5) % 5;
      row2 = (row2 - 1 + 5) % 5;
      newIdx1 = row1 * 5 + column1;
      newIdx2 = row2 * 5 + column2;
    } else {
      let temp = column1;
      column1 = column2;
      column2 = temp;
      newIdx1 = row1 * 5 + column1;
      newIdx2 = row2 * 5 + column2;
    }

    const encodedDouble: string[] = [];
    encodedDouble.push(alphabet[newIdx1]);
    encodedDouble.push(alphabet[newIdx2]);

    encodedDoubles.push(encodedDouble.join(''));
  }

  return encodedDoubles.join('');
}
