let myLibrary = [];

function Book(title, author, isbn, description, pages, status) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this.description = description;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  let addedbook = new Book(
    document.getElementById("input-title").value,
    document.getElementById("input-author").value,
    document.getElementById("input-isbn").value,
    document.getElementById("input-description").value,
    document.getElementById("input-pages").value,
    "unread"
  );

  myLibrary.push(addedbook);
  console.log(myLibrary);
  document.getElementById("form-container").style.display = "none";
  displayBooks(myLibrary);
  return false;
}

function displayBooks(array) {
  for (let i = 0; i < myLibrary.length; i++) {
    let book = document.createElement("div");
    book.className = "book";

    let booktitle = document.createElement("h4");
    booktitle.textContent = `Title: ${array[i].title}`;
    book.appendChild(booktitle);

    let bookauthor = document.createElement("p");
    bookauthor.textContent = `Author: ${array[i].author}`;
    book.appendChild(bookauthor);

    let description = document.createElement("p");
    description.textContent = `Description: ${array[i].description}`;
    book.appendChild(description);

    let bookactions = document.createElement("div");
    bookactions.className = "book-detail";
    book.appendChild(bookactions);

    let read = document.createElement("div");
    read.className = "stat";
    read.textContent = `Status: ${array[i].status}`;
    bookactions.appendChild(read);

    let button = document.createElement("button");
    button.textContent = "Remove";
    button.className = "remove-book";
    button.id = "remove";
    bookactions.appendChild(button);

    document.getElementById("target").appendChild(book);
  }
}
let addbookbtn = document.getElementById("add-btn");

addbookbtn.addEventListener("click", () => {
  let form = document.getElementById("form-container");
  form.style.display = "block";
  form.style.position = "absolute";
});
function deleteBook() {
  let removebook = document.getElementsByClassName("remove-book");
  for (var i = 0; i < removebook.length; i++) {
    removebook[i].addEventListener("click", function (e) {
      e.preventDefault();
      e.target.closest("div.book").remove();
    });
  }
}
deleteBook();
displayBooks(myLibrary);
