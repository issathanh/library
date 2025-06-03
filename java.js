const myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
    // take params, create a book then store it in the array
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
}


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function displayBooks() {
    const libraryContainer = document.getElementById('library-display')

    //clear existing content 
    libraryContainer.innerHTML = '';

    //Loop through each book and create a card
    myLibrary.forEach(book => {
        const bookCard = document.createElement('div')
        bookCard.className = 'book-card'

        bookCard.innerHTML = `
                    <div class="book-title">${book.title}</div>
                    <div class="book-author">by ${book.author}</div>
                    <div class="book-pages">${book.pages} pages</div>
                    <div class="book-status ${book.read ? 'status-read' : 'status-unread'}">
                        ${book.read ? 'Read' : 'Not Read'}
                    </div>
                `;
        libraryContainer.appendChild(bookCard); // Fixed: was "appendChildld"
    });

    //if no books, show a message
    if (myLibrary.length == 0) {
        libraryContainer.innerHTML = `<p style="text-align: center; color: #666; grid-column: 1 / -1;">No books in your library yet. Click "Add Sample Books" to get started!</p>`
    }
}

function addSampleBooks() {
    // Add some sample books to demonstrate the display
    addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
    addBookToLibrary("1984", "George Orwell", 328, true);
    addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
    addBookToLibrary("Pride and Prejudice", "Jane Austen", 432, true);
    addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 277, false);

    // Refresh the display
    displayBooks();
}

addSampleBooks()