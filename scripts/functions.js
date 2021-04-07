import { nameElement, cityElement, mailElement, table } from './variables.js';

import { db } from '../firebase/firestore.js';

const getData = () => {
  return {
    name: nameElement.value || '-',
    city: cityElement.value || '-',
    mail: mailElement.value,
  };
};

const saveData = () => {
  const dataObj = getData();
  db.collection('users').add(dataObj);
};

const validateEmail = () => {
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return mailElement.value.match(re);
};

const showError = () => {
  alert('Email is invalid');
};

const clearInputs = (inputsArr) => {
  inputsArr.map((el) => (el.value = ''));
};

const clearTable = () => {
  [...table.querySelectorAll('tbody')].map((el) => {
    if (!el.id) {
      el.remove();
    }
  });
};

export const handleFormSubmit = (e) => {
  e.preventDefault();
  if (validateEmail()) {
    saveData();
    clearInputs([nameElement, cityElement, mailElement]);
  } else {
    showError();
  }
};

export const getDataFromFirestore = () => {
  clearTable();
  db.collection('users')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        table.innerHTML += `
          <td>${doc.data().name}</td>
          <td>${doc.data().city}</td>
          <td>${doc.data().mail}</td>
        `;
      });
    });
};

export const clearFirestore = () => {
  db.collection('users')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doc.ref.delete();
      });
    });
};
