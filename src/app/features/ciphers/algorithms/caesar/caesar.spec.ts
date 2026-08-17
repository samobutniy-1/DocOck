import { caesarEncode, caesarDecode } from './caesar.algorithm';

describe('caesar', () => {
  const message = 'Hello world!';
  it('should return encoded message', () => {
    const result = caesarEncode(message, 3);
    expect(result).toBe('Khoor zruog!');
  });

  it('should return decoded message', () => {
    const encoded = caesarEncode(message, 3);
    const result = caesarDecode(encoded, 3);
    expect(result).toBe('Hello world!');
  });
});
