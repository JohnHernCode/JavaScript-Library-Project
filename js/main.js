const tableBody = document.querySelector('.table-body');
console.log('hello');

let myLibrary = [
  {
    title: 'Fight Club',
    author: 'Chuck Palahniuk',
    pages: 245,
    read: 'read',
  },
  {
    title: 'Hat Full of Sky',
    author: 'Terry Pratchet',
    pages: 354,
    read: 'read',
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages}, ${read}`;
  };
}

function addBookToLibrary() {
  // do stuff here
}

function showBooks(arr) {
  for (let i = 0; i < arr.length; i++) {
    let row = document.createElement('tr');
    let col = document.createElement('td');
    col.innerHTML = `${arr[i].title}`;
    row.appendChild(col);
    tableBody.appendChild(row);
  }
}

showBooks(myLibrary);
