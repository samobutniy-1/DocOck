export interface Cipher {
  id: string;
  name: string;
  level: string;
  description: string;
  defaultKey: string;
  encode: (message: string, key: string) => string;
  decode: (message: string, key: string) => string;
}
