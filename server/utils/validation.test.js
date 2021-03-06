const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var str = [];
    var res = isRealString(str);
      expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var str = '     ';
    var res = isRealString(str);
      expect(res).toBe(false);
  });

  it('should accept string with non-space characters', () => {
    var str = ' slkdf  lskdj  slkdfj  ';
    var res = isRealString(str);
      expect(res).toBe(true);
  });
});
