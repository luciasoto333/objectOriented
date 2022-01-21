class Book{
    constructor(title,gender,author,read,readDate){
        this.title = title;
        this.gender = gender;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }
}

document.getElementById("send").addEventListener("click", addNewBook);

function addNewBook(){
    var dateArray = [0,0];
    var au = prompt("Autor:");
    var ti = prompt("Titulo:");
    var gen = prompt("Genero:");
    var rea = ( prompt("Estado (Leido 'true' - No Leido 'false'):"));
    console.log(rea);
    if(rea==="true"){
        dateArray[0] = parseInt(prompt("Qué día lo finalizaste:"));
        dateArray[1] = parseInt(prompt("Qué mes lo finalizaste:"))-1;
        var date = new Date(2022,dateArray[1],dateArray[0]);
    }else{
        var date = "Sin Leer";
    }
    var book = new Book(ti,gen,au,rea,date);
    // myListBook.push(book);
    console.log(book);

    var list = document.getElementById("container");

    list.innerHTML += `<ul>
        <li>Titulo: ${book.title}</li>
        <li>Genero: ${book.gender}</li>
        <li>Autor: ${book.author}</li>
        <li>Estado: ${book.read}</li>
        <li>Fecha de finalización: ${book.readDate}</li> 
    </ul>`;
}

class BookList{
    constructor(numBookRead, numBookNoReadYet, referenceNextBook,referenceCurrentBook, referenceLastBook, arrayBooks){
        this.numBookRead = numBookRead;
        this.numBookNoReadYet = numBookNoReadYet;
        this.referenceNextBook = referenceNextBook;
        this.referenceCurrentBook = referenceCurrentBook;
        this.referenceLastBook = referenceLastBook;
        this.arrayBooks = arrayBooks;
    }
    add(book){
        this.arrayBooks+=book; // Si esta bien?????
    }
    finishCurrentBook(){
           this.referenceCurrentBook.read = true;
           this.referenceCurrentBook.readDate = new Date(Date.now());
           this.numBookRead =
           this.referenceLastBook;
           this.referenceLastBook = null;
           this.numBookNoReadYet = this.referenceNextBook;
           this.referenceNextBook = null;
    }
}


