window.addEventListener("DOMContentLoaded", function() { // Load a contant first
    let form = this.document.querySelector("#form");

    form.addEventListener("submit", function(e) {
        let taskName = document.querySelector("#task_name").value;
        let checklist = document.querySelector("#checklist").value;
        checklist = checklist.split(",");
        let dueTo = document.querySelector("#due_to").value;
        let tag = document.querySelector("#tag").value;

        console.log(taskName, checklist, dueTo, tag);

        console.log(addToDoList(taskName, checklist, dueTo, tag));
        e.preventDefault();
    });

    function addToDoList(tn, ch, due, t) {
        // task name
        document.querySelector("#task_name_list").innerText = tn;
        // due to
        document.querySelector("#due_to_list").innerText = due;
        // checklist
        // Get the div where the checklist items will be added
        var div = document.querySelector("#checklist_list");

        // Loop through the checklist array
        for (var i = 0; i < ch.length; i++) {
            // Create a new label element
            var row = document.createElement("label");
            // Set the text content of the label
            row.innerText = ch[i];

            // Create a new input element (checkbox)
            var input = document.createElement("input");
            input.type = "checkbox";
            input.id = "check" + (i + 3); // Generate unique IDs for checkboxes
            // Append the input element to the label
            row.appendChild(input);

            // Append the label (with the input inside) to the div
            div.appendChild(row);
            // Add a line break after each label (for better spacing)
            div.appendChild(document.createElement("br"));
        }
        // tags
        document.querySelector("#tag_list").innerHTML = `~~<em>${t}</em>~~`;
        // buttons
        document.querySelector("#button_list").innerHTML = `<button>Complete</button><button>Skip</button>`;

        clearForm();
    }

    function clearForm() {
        let taskName = document.querySelector("#task_name").value="";
        let checklist = document.querySelector("#checklist").value="";
        let dueTo = document.querySelector("#due_to").value="";
        let tag = document.querySelector("#tag").value="";
    }

});