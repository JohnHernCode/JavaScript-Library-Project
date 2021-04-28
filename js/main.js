const tableBody = document.querySelector('.table-body');

let myLibrary = [
  {
    id: 1,
    title: 'Fight Club',
    author: 'Chuck Palahniuk',
    pages: 245,
    bookStatus: 'read',
  },
  {
    id: 2,
    title: 'Hat Full of Sky',
    author: 'Terry Pratchet',
    pages: 354,
    bookStatus: 'read',
  },
];

function Book(title, author, pages, bookStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.bookStatus = bookStatus;
  this.info = function () {
    return `${title} by ${author}, ${pages}, ${bookStatus}`;
  };
}

function addBookToLibrary() {
  // do stuff here
}

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

showBooks(myLibrary);
