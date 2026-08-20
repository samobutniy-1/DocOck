import { playfairEncode } from './playfair.algorithm';

describe('playfair', () => {
  it('should return encoded message', () => {
    const message = 'Hello World!';
    const result = playfairEncode(message);
    expect(result).toBe('KCNVMPYMQMCY');
  });
});
