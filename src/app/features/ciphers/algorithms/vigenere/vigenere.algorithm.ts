export function vigenereEncode(message: string, key: string): string {
  const messageCharCode = message.split('').map((char) => char.charCodeAt(0));

  const newKey = '';
  const messageNoSpaces = message.replace(/ /g, '');
  const keyFill = newKey.padStart(messageNoSpaces.length, key);
  const keyCharCode = keyFill.split('').map((char) => char.charCodeAt(0));

  const messageBase = messageCharCode.map((char) => charBase(char));

  const messagePosition = charPosition(messageCharCode);
  const keyPosition = charPosition(keyCharCode);

  const encodedChars: string[] = [];
  let keyIndex = 0; /* message loop runs over ALL characters including spaces (e.g. 6 iterations),
       but the key was built from message length WITHOUT spaces (e.g. 5 iterations) —
       this counter tracks the key's own position separately to avoid desync */

  for (let i = 0; i < messagePosition.length; i++) {
    const isLetter = messageBase[i] === 65 || messageBase[i] === 97;

    if (!isLetter) {
      encodedChars.push(String.fromCharCode(messageCharCode[i]));
      continue;
    }

    const encodedPosition = ((messagePosition[i] + keyPosition[keyIndex]) % 26) + messageBase[i];
    encodedChars.push(String.fromCharCode(encodedPosition));
    keyIndex++; // advances only on letters, not on spaces
  }

  return encodedChars.join('');
}

export function vigenereDecode(message: string, key: string): string {
  const messageCharCode = message.split('').map((char) => char.charCodeAt(0));

  const newKey = '';
  const messageNoSpaces = message.replace(/ /g, '');
  const keyFill = newKey.padStart(messageNoSpaces.length, key);
  const keyCharCode = keyFill.split('').map((char) => char.charCodeAt(0));

  const messageBase = messageCharCode.map((char) => charBase(char));

  const messagePosition = charPosition(messageCharCode);
  const keyPosition = charPosition(keyCharCode);

  const decodedChars: string[] = [];
  let keyIndex = 0;

  for (let i = 0; i < messagePosition.length; i++) {
    const isLetter = messageBase[i] === 65 || messageBase[i] === 97;

    if (!isLetter) {
      decodedChars.push(String.fromCharCode(messageCharCode[i]));
      continue;
    }

    const decodedPosition =
      ((((messagePosition[i] - keyPosition[keyIndex]) % 26) + 26) % 26) + messageBase[i];
    decodedChars.push(String.fromCharCode(decodedPosition));
    keyIndex++;
  }

  return decodedChars.join('');
}

//position in the alphabet
function charPosition(message: number[]): number[] {
  const position = message.map((char) => {
    if (char >= 65 && char <= 90) {
      char -= 65;
    }
    if (char >= 97 && char <= 122) {
      char -= 97;
    }
    return char;
  });
  return position;
}

//uppercase or lowercase
function charBase(charCode: number): number {
  if (charCode >= 65 && charCode <= 90) return 65;
  if (charCode >= 97 && charCode <= 122) return 97;
  return charCode;
}
