import { Cipher } from '../../shared/models/ciphers.model';
import { caesarDecode, caesarEncode } from './algorithms/caesar/caesar.algorithm';
import { playfairDecode, playfairEncode } from './algorithms/playfair/playfair.algorithm';
import { vigenereDecode, vigenereEncode } from './algorithms/vigenere/vigenere.algorithm';

export const CIPHERS: Cipher[] = [
  {
    id: 'caesar',
    name: 'Caesar Cipher',
    level: 'easy',
    description: 'Shifts each letter by a fixed number of positions.',
    defaultKey: '3',
    encode: (message: string, key: string) => caesarEncode(message, Number(key)),
    decode: (message: string, key: string) => caesarDecode(message, Number(key)),
  },
  {
    id: 'vigenere',
    name: 'Vigenere Cipher',
    level: 'medium',
    description:
      'Shifts each letter using a repeating keyword, where each letter of the key defines its own shift.',
    defaultKey: 'Lemon',
    encode: (message: string, key: string) => vigenereEncode(message, key),
    decode: (message: string, key: string) => vigenereDecode(message, key),
  },
  {
    id: 'playfair',
    name: 'Playfair Cipher',
    level: 'easy',
    description: 'Encrypts pairs of letters using a 5x5 grid.',
    defaultKey: '',
    encode: (message: string, key: string) => playfairEncode(message),
    decode: (message: string, key: string) => playfairDecode(message),
  },
];
