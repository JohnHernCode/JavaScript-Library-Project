let myLibrary = [{title: "Fight Club", author: "Chuck Palahniuk", pages: 245, read: "read" }, {title: "Hat Full of Sky", author: "Terry Pratchet", pages: 354, read: "read" }]

function book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function(){
    return `${title} by ${author}, ${pages}, ${read}`
  }
}

function addBookToLibrary() {
  // do stuff here


}

function showBooks() {
  // <tr>
  //         <th scope="row">1</th>
  //         <td>Mark</td>
  //         <td>Otto</td>
  //         <td>@mdo</td>
  //       </tr>
  //       <tr>
  //         <th scope="row">2</th>
  //         <td>Jacob</td>
  //         <td>Thornton</td>
  //         <td>@fat</td>
  //       </tr>
  //       <tr>
  //         <th scope="row">3</th>
  //         <td colspan="2">Larry the Bird</td>
  //         <td>@twitter</td>
  //       </tr>
}

