'use strict';

const phonebook = [
  { name: 'Marcus', phone: '+37529668890' },
  { name: 'Jack Hanma', phone: '9999999999' },
  { name: 'Baki Hanma', phone: '00000000' }
];

const findPhoneByName = (name) => {
  for (const item of phonebook) {
    if (item.name === name) return item.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
