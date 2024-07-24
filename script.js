const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const libraryWrapper = document.getElementById('library-wrapper');

function bookDelete(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

Book.prototype.toggleRead = function() {
    if(this.read === "Read") {
        this.read = "Not read yet";
    }
    else{
        this.read = "Read";
    }
}

function readToggle(index) {
    myLibrary[index].toggleRead();
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
        let readToggleButton = document.createElement('button');
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages;
        bookRead.textContent = book.read;
        bookDiv.classList.add('book');
        deleteBook.classList.add('cta');
        readToggleButton.classList.add('cta');
        deleteBook.textContent = 'Detele Book';
        readToggleButton.textContent = 'Read/Not read yet'
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.appendChild(bookRead);
        bookDiv.appendChild(deleteBook);
        bookDiv.appendChild(readToggleButton);
        libraryWrapper.appendChild(bookDiv);
        deleteBook.addEventListener("click", () => {
            bookDelete(index);
        });
        readToggleButton.addEventListener("click", () => {
            readToggle(index);
        });
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
    const title = document.getElementById('title-input');
    const author = document.getElementById('author-input');
    const pages = document.getElementById('pages-input');
    const read = document.getElementById('read-input');

    // Form validation

    // Reset custom validity messages
    title.setCustomValidity("");
    author.setCustomValidity("");
    pages.setCustomValidity("");
    read.setCustomValidity("");

    let formIsValid = true;

    // Check for title input
    if (title.validity.valueMissing) {
        title.setCustomValidity("Please input title");
        formIsValid = false;
    }

    if (!capitalFirstLetter(title.value)) {
        title.setCustomValidity("Needs to start with a capital letter");
        formIsValid = false;
    }

    // Check for author input
    if (author.validity.valueMissing) {
        author.setCustomValidity("Please input author");
        formIsValid = false;
    }

    if (!capitalFirstLetter(author.value)) {
        author.setCustomValidity("Needs to start with a capital letter");
        formIsValid = false;
    }

    // Check for pages input
    if (pages.validity.valueMissing) {
        pages.setCustomValidity("Please input number of pages");
        formIsValid = false;
    }

    if (pages.value <= 0) {
        pages.setCustomValidity("Must be bigger than 0");
        formIsValid = false;
    }

    // Check for read input
    if (read.validity.valueMissing) {
        read.setCustomValidity("Please indicate if read");
        formIsValid = false;
    }

    if (!(read.value === "Read" || read.value === "Not read yet")) {
        read.setCustomValidity("Input 'Read' or 'Not read yet'");
    }

    // Trigger form validation
    if (!formIsValid) {
        // Trigger the browser's validation UI
        title.reportValidity();
        author.reportValidity();
        pages.reportValidity();
        read.reportValidity();
        // Don't add book if form is not valid
        return;
    }

    const book = new Book(title.value, author.value, pages.value, read.value);
    addBookToLibrary(book);
    displayBooks();
});

function capitalFirstLetter(str) {
    if (str.length === 0) return false;
    
    let firstChar = str.charAt(0);
 
    return firstChar >= 'A' && firstChar <= 'Z';
 }