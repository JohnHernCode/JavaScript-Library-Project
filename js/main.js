const tableBody = document.querySelector('.table-body');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookRead = document.getElementsByName('readIt');
const form = document.querySelector('.form');

let myLibrary = JSON.parse(localStorage.getItem('library'));
myLibrary = myLibrary || [];

function saveStorage() {
  localStorage.setItem(
    'library',
    JSON.stringify(myLibrary),
  );
}

function changeReadStatus(book) {
  if (book.read === 'yes') {
    book.read = 'no';
  } else if (book.read === 'no') {
    book.read = 'yes';
  }
  saveStorage();
  window.location.reload(true);
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function radioValue() {
  for (let i = 0; i < bookRead.length; i += 1) {
    if (bookRead[i].checked) {
      return bookRead[i].value;
    }
  }
  return null;
}

function addBookToLibrary(e) {
  e.preventDefault();
  const newBook = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    radioValue(),
  );

  myLibrary.push(newBook);
  saveStorage();
  form.reset();
  window.location.reload(true);
}

form.addEventListener('submit', addBookToLibrary);

function removeBook(index) {
  myLibrary.splice(index, 1);
  saveStorage();
  window.location.reload(true);
}

function tableTemplate(book, index) {
  const row = document.createElement('tr');
  const title = document.createElement('td');
  const author = document.createElement('td');
  const pages = document.createElement('td');
  const read = document.createElement('td');
  const removeBtn = document.createElement('button');
  const changeRead = document.createElement('button');
  changeRead.classList.add('btn');
  changeRead.classList.add('btn-outline-primary');
  changeRead.textContent = 'Change read status';
  removeBtn.classList.add('btn');
  removeBtn.classList.add('btn-outline-danger');
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
  row.appendChild(changeRead);
  tableBody.appendChild(row);
  removeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    removeBook(index);
  });
  changeRead.addEventListener('click', (e) => {
    e.preventDefault();
    changeReadStatus(book);
  });
}

function showBooks(arr) {
  arr.forEach((book, index) => {
    tableTemplate(book, index);
  });
}

showBooks(myLibrary);
