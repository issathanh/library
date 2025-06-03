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


addBookToLibrary("1","2","3",true)
console.log(myLibrary[0])