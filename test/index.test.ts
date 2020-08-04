import { isType } from '../src/index';

test('测试', () => {
  expect(isType(null)).toEqual('null');
  expect(isType(undefined)).toEqual('undefined');
  expect(isType(function () {})).toEqual('function');
  expect(isType(1)).toEqual('number');
  expect(isType(false)).toEqual('boolean');
  expect(isType('number')).toEqual('string');
  expect(isType({})).toEqual('object');
  expect(isType([])).toEqual('array');
  expect(isType(new RegExp(''))).toEqual('regexp');
  expect(isType(new Date())).toEqual('date');
  expect(isType(new Error())).toEqual('error');
});
