/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
let bookTitle;
let bookAuthor;
const library = document.querySelector('.library');
let bookList = JSON.parse(localStorage.getItem('bookList')) || [];
const getInformation = () => {
  bookTitle = document.getElementById('bookTitle').value;
  bookAuthor = document.getElementById('bookAuthor').value;
};

class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

class BookShelf {
  constructor() {
    this.length = 0;
  }

  addBook(title, author, id) {
    const newBook = new Book(title, author, id);
    bookList.push(newBook);
    localStorage.setItem('bookList', JSON.stringify(bookList));
    this.get();
  }

  deleteBook(id) {
    const resultBooks = bookList.filter((book) => book.id !== id);
    localStorage.setItem('bookList', JSON.stringify(resultBooks));
    window.location.reload();
  }

  get() {
    let bookgenerator = '';
    bookList.forEach((book) => {
      bookgenerator += `<div class="book-container">
             <p class="book-title">"${book.title}" by ${book.author}</p>
             <button class="remove-book" id="${book.id}" onClick=giveInformation(this)>Remove</button>
           </div>`;
    });
    library.innerHTML = bookgenerator;
  }
}

const shelf = new BookShelf();
const addButton = document.querySelector('.add-button');

const addLibrary = () => {
addButton.addEventListener('click', () => {
  getInformation();
  const bookId = Math.random() * 100000;
  const id = Math.trunc(bookId);
  const idstring = id.toString();
  shelf.addBook(bookTitle, bookAuthor, idstring);
});
};


function giveInformation(id) {
  const index = id.id;
  shelf.deleteBook(index);
}
window.onload = () => {
  let bookgenerator = '';
  bookList.forEach((book) => {
    bookgenerator += `<div class="book-container">
                 <p class="book-title">"${book.title}" by ${book.author}</p>
                 <button class="remove-book" id="${book.id}" onClick=giveInformation(this)>Remove</button>
              </div>`;
  });
  library.innerHTML = bookgenerator;
};

const x = 0;
if (x === 1) {
  giveInformation();
}

export {addLibrary} ;
