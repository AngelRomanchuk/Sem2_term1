window.addEventListener("DOMContentLoaded", function(){
    let form = document.querySelector("#form1");

    form.addEventListener("submit", function(e){
        let title = document.querySelector("title").value;
        let author = document.querySelector("author").value;
        let isbn = document.querySelector("isbn").value;

        addBooktoList(title, author, isbn);
        e.preventDefault();
    }) 

    function addBooktoList(t, a, i) {
        if(t===""||a===""||i===""){
            alert("No field should be empty")
        } else {
            let row = document.createElement("tr");
            row.innerHTML = `<td>${t}</td><td>${a}</td><td>${i}</td>`;

            document.querySelector("#book_list").appendChild(row);
        }
        
    }
})
