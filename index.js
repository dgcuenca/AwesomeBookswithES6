import { addLibrary, quitLibrary } from './modules/script.js';
import { displayBookList, displayAddBook, displayContact } from './modules/navbar.js';
import Date from './modules/date.js';

addLibrary();
quitLibrary();
setInterval(Date, 10);