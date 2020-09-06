let myLibrary = [];

function Book(title, author, isbn, description, pages, status) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this.description = description;
  this.pages = pages;
  this.status = status;
}
Book.prototype.changeReadStatus = function () {
  //Changes the book at the OBJ level in the array
  if (this.status.includes("Read")) {
    this.status = "Unread";
  } else if (this.status.includes("Unread")) {
    this.status = "Read";
  }
};

function addBookToLibrary() {
  let addedbook = new Book(
    document.getElementById("input-title").value,
    document.getElementById("input-author").value,
    document.getElementById("input-isbn").value,
    document.getElementById("input-description").value,
    document.getElementById("input-pages").value,
    "Unread"
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

    var read = document.createElement("div");
    read.className = "stat";
    read.textContent = `Status: ${array[i].status}`;

    bookactions.appendChild(read);
    let buttonRead = document.createElement("button");
    buttonRead.textContent = "Change Status";
    buttonRead.className = "status-btn";
    buttonRead.onclick = () => {
      array[i].changeReadStatus();
      let modifiedstatus = document.createElement("div");
      modifiedstatus.className = "stat";
      modifiedstatus.textContent = `Status: ${array[i].status}`;
      bookactions.replaceChild(modifiedstatus, read);
    };
    bookactions.appendChild(buttonRead);

    let buttonRemove = document.createElement("button");
    buttonRemove.textContent = "Remove";
    buttonRemove.className = "remove-book";
    buttonRemove.id = "remove";
    buttonRemove.onclick = function () {
      button.closest("div.book").remove();
    };
    bookactions.appendChild(buttonRemove);

    document.getElementById("target").appendChild(book);
  }
}
let addbookbtn = document.getElementById("add-btn");

addbookbtn.addEventListener("click", () => {
  let form = document.getElementById("form-container");
  form.style.display = "block";
  form.style.position = "absolute";
});

let p = new Book("test", "joe", 123, "some text", 123, "Read");
p.changeReadStatus();
console.log(p);
