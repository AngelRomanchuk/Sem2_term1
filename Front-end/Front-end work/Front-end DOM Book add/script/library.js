window.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("#form1");
  
    form.addEventListener("submit", function (e) {
      // take title, author, isbn and store it in here for future add to body/page
      let title = document.querySelector("#title").value;
      let author = document.querySelector("#author").value;
      let isbn = document.querySelector("#isbn").value;
      
       //addBookToList() will create a new row in the table and insert title author and isbn there in the row
      addBookToList(title, author, isbn);
  
      e.preventDefault();
    });
  
    function addBookToList(t, a, i) {
      if (t === "" || a === "" || i === "") {
        showAlert("No field should be empty", "error");
      } else {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${t}</td><td>${a}</td><td>${i}</td><td><button class="delet">X</button></td>`;
        
        // append the new row into table body with id book-list
        document.querySelector("#book-list").appendChild(row);
        clearFields();
        showAlert("Book successfully added!", "success");
      }
    }
  
    function clearFields() {
      document.querySelector("#title").value = "";
      document.querySelector("#author").value = "";
      document.querySelector("#isbn").value = "";
    }
  
    function showAlert(m, c) {
      let div = document.createElement("div");
      div.innerText = m;
      div.className = c;
      div.id = "box";
      document.querySelector("#notification").appendChild(div);
      // after 3 seconds remove this box...
      this.setTimeout(function () {
        document.querySelector("#box").remove();
      }, 3000);
    }

    this.document.querySelector("#data").addEventListener("click", function(e){
      deletBook(e.target);
    })

    function deletBook(elemToDelet) {
      if(elemToDelet.className === "delet"){
        elemToDelet.parentElement.parentElement.remove();
        showAlert("Book removed succesfully", "success");
      } else {
        showAlert("Wrong area clicked, please click on X to delet", "error");
      }
    }
  });