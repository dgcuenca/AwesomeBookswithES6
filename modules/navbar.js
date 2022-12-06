const listBook = document.getElementById('bookList');
const bookAdd = document.getElementById('addBook');
const contact = document.getElementById('contact');
const mainScreen = document.querySelector('#main-screen');
const contactSection = document.querySelector('#contact-section');
const bookListScreen = document.querySelector('#booklistSection');

const displayBookList = () => {
  bookListScreen.style.display = 'flex';
  mainScreen.style.display = 'none';
  contactSection.style.display = 'none';
};

const displayAddBook = () => {
  mainScreen.style.display = 'flex';
  bookListScreen.style.display = 'none';
  contactSection.style.display = 'none';
};

const displayContact = () => {
  mainScreen.style.display = 'none';
  bookListScreen.style.display = 'none';
  contactSection.style.display = 'flex';
};

listBook.addEventListener('click', displayBookList);
bookAdd.addEventListener('click', displayAddBook);
contact.addEventListener('click', displayContact);

export { displayBookList, displayAddBook, displayContact};