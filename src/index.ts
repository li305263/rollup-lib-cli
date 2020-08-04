const class2Type: any = {},
  typeArr = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error'];

typeArr.forEach(e => {
  class2Type[`[object ${e}]`] = e.toLowerCase();
});

/**
 * @description: 判断类型
 */

export const isType = (obj: any): String => {
  return obj == null ? String(obj) : class2Type[Object.prototype.toString.call(obj)];
};
