'use strict';

const fn = () => {
  const obj = { name: 'Yuri' };
  // eslint-disable-next-line prefer-const
  let obj2 = { name: 'Mark' };
  obj.name = 'Lena'; // меняется ссылка, но не объект, поэтому ошибки нет
  obj2.name = 'Gena';
  // obj = { name: 'Ken' }; error - константу нельзя переназначить
  obj2 = {};
};

module.exports = { fn };
