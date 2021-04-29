const tableBody = document.querySelector('.table-body');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookRead = document.getElementsByName('readIt');
const form = document.querySelector('.form');

let myLibrary = JSON.parse(localStorage.getItem('library'));
myLibrary = myLibrary ? myLibrary : [];

form.addEventListener('submit', addBookToLibrary);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(e) {
  e.preventDefault();
  let newBook = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    radioValue()
  );

  myLibrary.push(newBook);
  saveStorage();
  form.reset();
  window.location.reload(true);
}

function radioValue() {
  for (let i = 0; i < bookRead.length; i++) {
    if (bookRead[i].checked) {
      return bookRead[i].value;
    }
  }
}

function showBooks(arr) {
  arr.forEach((book, index) => {
    tableTemplate(book, index);
  });
}

function saveStorage() {
  localStorage.setItem(
    'library',
    JSON.stringify(myLibrary)
  );
}

function tableTemplate(book, index) {
  let row = document.createElement('tr');
  let title = document.createElement('td');
  let author = document.createElement('td');
  let pages = document.createElement('td');
  let read = document.createElement('td');
  let removeBtn = document.createElement('button');
  removeBtn.classList.add('btn');
  removeBtn.textContent = 'Remove';
  title.innerHTML = `${book.title}`;
  author.innerHTML = `${book.author}`;
  pages.innerHTML = `${book.pages}`;
  read.innerHTML = `${book.read}`;
  row.appendChild(title);
  row.appendChild(author);
  row.appendChild(pages);
  row.appendChild(read);
  row.appendChild(removeBtn);
  tableBody.appendChild(row);
  removeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    removeBook(index);
  });
}

function removeBook(index) {
  console.log(index);
  myLibrary.splice(index, 1);
  saveStorage();
  window.location.reload(true);
}

showBooks(myLibrary);
