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


for (let i = 0; i < myLibrary.length; i++){
    let book = document.createElement('div');
    book.class = 'book';

    let booktitle = document.createElement('h4');
    booktitle.textContent = `${myLibrary[i].title}`;
    book.appendChild(booktitle);

    let bookauthor = document.createElement('p');
    bookauthor.textContent = `${myLibrary[i].author}`;
    book.appendChild(bookauthor);

    let description = document.createElement('p');
    description.textContent = `${myLibrary[i].desciption}`;
    book.appendChild(description);

    let bookactions = document.createElement('div');
    bookactions.className = 'book-detail';
    book.appendChild(bookactions);

    let read = document.createElement('div');
    read.className = 'stat';
    read.textContent = `${myLibrary[i].status}`;
    bookactions.appendChild(read);

    let button = document.createElement('button');
    button.textContent = 'Remove Book';
    button.className = 'remove-book';
    bookactions.appendChild(button);
}


