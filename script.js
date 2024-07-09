const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    let message = "Added " + book.title + " to library.";
    return message;
}

const libraryWrapper = document.getElementById('library-wrapper');

function displayBooks() {
    for(let book of myLibrary) {
        let bookTitle = document.createElement('h2')
        let bookAuthor = document.createElement('p')
        let bookPages = document.createElement('p')
        let bookRead = document.createElement('p')
        let bookDiv = document.createElement('div');
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages;
        bookRead.textContent = book.read;
        bookDiv.classList.add('book');
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.appendChild(bookRead);
        libraryWrapper.appendChild(bookDiv);
    }
}