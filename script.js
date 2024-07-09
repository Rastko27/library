const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    var message = "Added " + book.title + " to library.";
    return message;
}

function displayBooks() {
    for(let book of myLibrary) {
        console.log(book.title + ", written by " + book.author + ", " + book.pages + "pages, " + book.read + ".");
    }
}