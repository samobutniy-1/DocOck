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
  const shiftedChar = code + shift;
  return String.fromCharCode(shiftedChar);
}
