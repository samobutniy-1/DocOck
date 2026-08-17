export function caesarEncode(message: string, shift: number): string {
  return message
    .split('')
    .map((char) => shiftChar(char, shift))
    .join('');
}

export function caesarDecode(message: string, shift: number): string {
  return caesarEncode(message, -shift);
}

function shiftChar(char: string, shift: number): string {
  const code = char.charCodeAt(0);

  /* % 26 determines which letter it is in the alphabet (keeps the index within the 0-25 range).
    + 26 handles the case when the number is negative — for example, -3 + 26 = 23, so index 23 corresponds to a letter in the alphabet.
    The second % 26 checks the remainder again, in case the number wasn't negative (so it stays within 0-25 either way).
    Then we add 65 (or 97 for lowercase) to convert that alphabet index back into the actual ASCII code, which gives us the final character*/

  //A(65) - Z(90)
  if (code >= 65 && code <= 90) {
    return String.fromCharCode(((((code - 65 + shift) % 26) + 26) % 26) + 65);
  }

  //a(97) - z(122)
  if (code >= 97 && code <= 122) {
    return String.fromCharCode(((((code - 97 + shift) % 26) + 26) % 26) + 97);
  }

  return char;
}
