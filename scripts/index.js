import { form, getBtn, clearBtn } from './variables.js';
import {
  handleFormSubmit,
  getDataFromFirestore,
  clearFirestore,
} from './functions.js';

form.addEventListener('submit', handleFormSubmit);
getBtn.addEventListener('click', getDataFromFirestore);
clearBtn.addEventListener('click', clearFirestore);
