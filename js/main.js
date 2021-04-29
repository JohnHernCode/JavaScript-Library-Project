const tableBody = document.querySelector('.table-body');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookStatus = document.querySelector('#book-status');
const form = document.querySelector('.form');

form.addEventListener('submit', addBookToLibrary);


let myLibrary = JSON.parse(localStorage.getItem('library'));

myLibrary = myLibrary ? myLibrary: [];

function Book(id, title, author, pages, bookStatus) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.bookStatus = bookStatus;
}

function addBookToLibrary(e) {
  e.preventDefault();
  let newBook = new Book(
    3,
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookStatus.value
  );

  myLibrary.push(newBook);
  localStorage.setItem(
    'library',
    JSON.stringify(myLibrary)
  );
  showBooks(myLibrary);
  form.reset();
  // console.log(myLibrary);
}

addBookToLibrary.prototype = Object.create(Book.prototype);

function showBooks(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    let row = document.createElement('tr');
    let id = document.createElement('td');
    let title = document.createElement('td');
    let author = document.createElement('td');
    let pages = document.createElement('td');
    let bookStatus = document.createElement('td');
    id.innerHTML = `${arr[i].id}`;
    title.innerHTML = `${arr[i].title}`;
    author.innerHTML = `${arr[i].author}`;
    pages.innerHTML = `${arr[i].pages}`;
    bookStatus.innerHTML = `${arr[i].bookStatus}`;
    row.appendChild(id);
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(pages);
    row.appendChild(bookStatus);
    tableBody.appendChild(row);
  }
}

// showBooks(myLibrary);
