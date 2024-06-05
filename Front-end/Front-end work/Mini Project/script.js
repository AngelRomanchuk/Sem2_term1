class MiniProject {
    static count = 0;
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(bookTitle){
        this.books.push(bookTitle);
        MiniProject.count++;
    }

    listBooks(){
        this.books.forEach(function(book){
            let p = document.createElement("p");
            p.innerText = book;
            document.querySelector("#data").appendChild(p);
            document.querySelector("#count").innerHTML = `Total Books: ${MiniProject.count}`;
        });
    }
}

let form = document.querySelector("#form1");
form.addEventListener("submit", function(e){
    let bookTitle = document.querySelector("#name").value;

    let book1 = new MiniProject("Library");
    book1.addBook(bookTitle);
    book1.listBooks();
    e.preventDefault();
});
