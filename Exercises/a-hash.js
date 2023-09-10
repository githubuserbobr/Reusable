'use strict';
const handbook = [
  { name: 'Marcus', phone: '+37529668890' },
  { name: 'Jack Hanma', phone: '9999999999' },
  { name: 'Baki Hanma', phone: '0000000001' }
];

const phonebook = new Map();

handbook.forEach((item) => {
  phonebook.set(item.name, item.phone);
});

const findPhoneByName = (name) => phonebook.get(name);

module.exports = { phonebook, findPhoneByName };
