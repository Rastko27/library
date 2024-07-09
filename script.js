const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const libraryWrapper = document.getElementById('library-wrapper');

function bookDelete(index){
    myLibrary.splice(index, 1);
    displayBooks();
}

function displayBooks() {
    libraryWrapper.innerHTML = '';
    myLibrary.forEach((book, index) => {
        let bookTitle = document.createElement('h2')
        let bookAuthor = document.createElement('p')
        let bookPages = document.createElement('p')
        let bookRead = document.createElement('p')
        let bookDiv = document.createElement('div');
        let deleteBook = document.createElement('button');
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages;
        bookRead.textContent = book.read;
        bookDiv.classList.add('book');
        deleteBook.classList.add('cta');
        deleteBook.textContent = 'Detele Book';
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.appendChild(bookRead);
        bookDiv.appendChild(deleteBook);
        libraryWrapper.appendChild(bookDiv);
        deleteBook.addEventListener("click", () => {
            bookDelete(index);
        })
    });
}

const newBook = document.getElementById('new-book');
const addBook = document.getElementById('add-book');
const dialog = document.getElementById('dialog');
const dialogClose = document.getElementById('dialog-close');

newBook.addEventListener("click", () => {
    dialog.style.display = 'flex';
    dialog.showModal();
});

dialogClose.addEventListener("click", () => {
    dialog.close();
    dialog.style.display = 'none';
});

const form = document.getElementById('book-form');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let title = document.getElementById('title-input').value;
    let author = document.getElementById('author-input').value;
    let pages = document.getElementById('pages-input').value;
    let read = document.getElementById('read-input').value;
    const book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    displayBooks();
});