import { playfairEncode, playfairDecode } from './playfair.algorithm';

describe('playfair', () => {
  it('should return encoded message', () => {
    const message = 'Hello World!';
    const result = playfairEncode(message);
    expect(result).toBe('KCNVMPYMQMCY');
  });

  it('should return decoded message', () => {
    const message = 'KCNVMPYMQMCY';
    const result = playfairDecode(message);
    expect(result).toBe('HELXLOWORLDX');
  });
});
