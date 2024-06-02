window.addEventListener("DOMContentLoaded", function() { // Load a contant first
    let form = this.document.querySelector("#form");

    form.addEventListener("submit", function(e) {
        let taskName = document.querySelector("#task_name").value;
        let checklist = document.querySelector("#checklist").value;
        let dueTo = document.querySelector("#due_to").value;
        let tag = document.querySelector("#tag").value;

        console.log(taskName, checklist, dueTo, tag);

        addToDoList(taskName, checklist, dueTo, tag)
        e.preventDefault();
    });

    function addToDoList(tn, ch, due, t) {
        // task name
        let row1 = document.createElement("tr");
        row1.innerHTML = `<th>${tn}</th>`;
        document.querySelector("#todo_list").appendChild(row1);
        // due to
        let row2 = document.createElement("tr");
        row2.innerHTML = `<td>${due}</td>`;
        document.querySelector("#todo_list").appendChild(row2);
        // checklist
        let row3 = document.createElement("tr");
        row3.innerHTML = `<td>${ch}</td>`;
        document.querySelector("#todo_list").appendChild(row3);
        // tags
        let row4 = document.createElement("tr");
        row4.innerHTML = `<td>${t}</td>`;
        document.querySelector("#todo_list").appendChild(row4);
        // buttons
        let row5 = document.createElement("tr");
        row5.innerHTML = `<td><button>Complete</button></td>`;
        document.querySelector("#todo_list").appendChild(row5);

        clearForm();
    }

    function clearForm() {
        let taskName = document.querySelector("#task_name").value="";
        let checklist = document.querySelector("#checklist").value="";
        let dueTo = document.querySelector("#due_to").value="";
        let tag = document.querySelector("#tag").value="";
    }
});