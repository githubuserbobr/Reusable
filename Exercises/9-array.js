'use strict';

const phonebook = [
  { name: 'Marcus', phone: '+37529668890' },
  { name: 'Jack Hanma', phone: '9999999999' },
  { name: 'Baki Hanma', phone: '000000' }
];

const findPhoneByName = (name) => {
  for (const item of phonebook) {
    if (item.name === name) item.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
