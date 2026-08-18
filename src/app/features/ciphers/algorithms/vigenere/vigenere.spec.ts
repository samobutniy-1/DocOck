import { vigenereEncode, vigenereDecode } from './vigenere.algorithm';
describe('vigenere', () => {
  const message = 'Hello World!';
  const key = 'Lemon';

  it('should return encoded message', () => {
    const result = vigenereEncode(message, key);
    expect(result).toBe('Sixzb Hsdzq!');
  });

  it('should return decoded message', () => {
    const encodedMessage = vigenereEncode(message, key);
    const result = vigenereDecode(encodedMessage, key);
    expect(result).toBe(message);
  });
});
