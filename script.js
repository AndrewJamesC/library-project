const myLibrary = [
    {title: "The Hobbit", author: "JRR Tolkein", pages: 200, read: "Not read"} , {title: "The Book", author: "Andrew", pages: 20, read: "Read"} 
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
}

function addBookToLibrary(newBookObject) {
    myLibrary.push(newBookObject);
}

function displayBooks(book) { 
    let i = 0;
    let x = 0;
    let tableBody = document.getElementById("table-body");
    while(tableBody.firstChild) {
        tableBody.removeChild(tableBody.lastChild);
    };
    myLibrary.forEach(book => {
        let newRow = tableBody.insertRow(-1);
        let newCell1 = newRow.insertCell(0); 
        newCell1.textContent = book.title;
        let newCell2 = newRow.insertCell(1);
        newCell2.textContent = book.author;
        let newCell3 = newRow.insertCell(2);
        newCell3.textContent = book.pages; 
        let newCell4 = newRow.insertCell(3);
        let readToggle = document.createElement("button");
        readToggle.setAttribute("id", x);
        readToggle.setAttribute("type", "toggle")
        readToggle.setAttribute("class", book.read);
        readToggle.innerText = book.read;
        newCell4.appendChild(readToggle);
        let newCell5 = newRow.insertCell(4);
        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("id", i)
        deleteButton.innerText = "Delete book";
        newCell5.appendChild(deleteButton);
        i++;
        x++;
    });
}
function showForm() {
    let form = document.getElementById("new-book-form");
    form.classList.toggle("hide");
}


let submitNewBook = document.getElementById("new-book-submit-button");
submitNewBook.addEventListener("click", (event) => {
    event.preventDefault()
    showForm()
    let newBookTitle = document.getElementById("new-book-title").value;
    let newBookAuthor = document.getElementById("new-book-author").value;
    let newBookPages = document.getElementById("new-book-pages").value;
    let newBookReadCheck = document.getElementsByName("read");
    if(newBookTitle === "" || newBookAuthor === "" || newBookPages === "" || (!newBookReadCheck[0].checked) && (!newBookReadCheck[1].checked) ){
        alert("Please enter all the required information");
    }else {
        if(newBookReadCheck[0].checked) {
            newBookRead=document.getElementById("new-book-read").value
        } else if (newBookReadCheck[1].checked) {
            newBookRead=document.getElementById("new-book-not-read").value
        }
    let newBookObject = new Book(newBookTitle, newBookAuthor, newBookPages, newBookRead);
    addBookToLibrary(newBookObject);
    displayBooks();
}})

//Delete books 
let tableBody = document.getElementById("table-body");
tableBody.addEventListener( 'click', function ( event ) {
    if(event.target.innerText == "Delete book") {
        myLibrary.splice((event.target.id), 1);
        displayBooks();
    } 
  } );

  //toggle Read status() {
     tableBody.addEventListener( 'click', function ( event ) {
    if(event.target.innerText == "Not read") {
        myLibrary[event.target.id].read = "Read";
        displayBooks();
    } else if (event.target.innerText == "Read") {
        myLibrary[event.target.id].read = "Not read"
        displayBooks();
    }
  } );

  
 
 displayBooks();