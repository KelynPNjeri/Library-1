let myLibrary = [];

function Book(title,author,isbn,description,pages,status) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.description = description;
    this.pages = pages
    this.status = status
}

function addBookToLibrary() {
    let item = new Book("Superstition","Person",12345,"Somenice description",345,"unread");
    let item2 = new Book("Superstition","Person",12345,"Somenice description",345,"unread");
    myLibrary.push(item)
    myLibrary.push(item2);
    
}
addBookToLibrary();
console.log(myLibrary.length);