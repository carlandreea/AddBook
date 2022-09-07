class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {

    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'Author 1',
                isbn: '9780061723'
            },
            {
                title: 'Book Two',
                author: 'Author 2',
                isbn: '9780061724'
            }

        ];

        const books = StoredBooks;
        books.forEach((book) =>  UI.addBookToList(book))
    }

 static   addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;
        list.appendChild(row); 
        /*createElement method that craetes elements in html, row.innerhtml
        adds the tags, list.appendChild(row) adds the created element to 
        the book-0list;*/
     
    }

    static clearfields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

   
}

document.addEventListener("DOMContentLoaded", UI.displayBooks);

//adding books
document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();

   
    //get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //clear fields
   // UI.clearfields();

    //validation

    if(title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
    } else {
        const book = new Book(title, author, isbn);

        //add book to ui
        /* const ui = new UI();
        UI.addBookToList(book);
         //clear fields
         UI.clearfields();*/
         UI.addBookToList(book);
         UI.clearfields();
    }
});
 




/*showAlert(message, className) {
        const div = document.createElement('div');
        //create message
        div.className = `alert ${className}`;//??
        div.appendChild(document.createTextNode(message)); //adds the message through  appendChild in the div (createTextNode)
        
        //insert message
        const container = document.getElementById('container');
        const form = document.getElementById('book-form');
        container.insertBefore(div, form); //insert the div before the form

        //timeout after 3 seconds
        setTimeout(function() {
            document.querySelector('.alert').remove()
        }, 3000);      //everything that has the class of alert gets removed, 3000 is 3 seconds, after that it gets removed
    }*/