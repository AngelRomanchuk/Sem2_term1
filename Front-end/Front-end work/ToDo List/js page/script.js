window.addEventListener("DOMContentLoaded", function() { // Load a contant first
    let form = this.document.querySelector("#form");


    // Take the entered values when the button submit clicked
    form.addEventListener("submit", function(e) {
        let taskName = document.querySelector("#task_name").value;
        let checklist = document.querySelector("#checklist").value;
        checklist = checklist.split(",");
        let dueTo = document.querySelector("#due_to").value;
        let tag = document.querySelector("#tag").value;

        console.log(taskName, checklist, dueTo, tag);

        addToDoList(taskName, checklist, dueTo, tag);
        e.preventDefault();
    });

    // Function that addes each element into a task box
    function addToDoList(tn, ch, due, t) {
        if(tn==="" || ch==="" || due==="" || t==="") {
            showAlert("No filds should be empty", "error");
        } else {
            var boxTodo = document.getElementById("box_for_todo");
            let todoListDiv = document.createElement("div");
            todoListDiv.id = "todo_list";

            // Create and add task name
            var taskNameHeader = document.createElement("h3");
            taskNameHeader.id = "task_name_list";
            taskNameHeader.textContent = tn;
            todoListDiv.appendChild(taskNameHeader);

            // Create and add due date
            var dueDateElement = document.createElement("date");
            dueDateElement.id = "due_to_list";
            dueDateElement.textContent = due;
            todoListDiv.appendChild(dueDateElement);

            // Create and add checklist header
            var checklistHeader = document.createElement("h4");
            checklistHeader.textContent = "Checklist:";
            todoListDiv.appendChild(checklistHeader);

            // Create and add checklist list
            var checklistDiv = document.createElement("div");
            checklistDiv.id = "checklist_list";
            todoListDiv.appendChild(checklistDiv);

            // Loop through checklist array and create checklist items
            for (var i = 0; i < ch.length; i++) {
                var checkboxInput = document.createElement("input");
                checkboxInput.type = "checkbox";
                checkboxInput.id = "check" + (i + 1);
                checklistDiv.appendChild(checkboxInput);

                var checklistItem = document.createElement("label");
                checklistItem.textContent = ch[i];
                checklistDiv.appendChild(checklistItem);
                checklistDiv.appendChild(document.createElement("br")); // Add line break after each label
            }

            // Create and add tag header
            var tagHeader = document.createElement("h4");
            tagHeader.textContent = "Tag:";
            todoListDiv.appendChild(tagHeader);

            // Create and add tag
            var tagElement = document.createElement("p");
            tagElement.id = "tag_list";
            tagElement.innerHTML = "<em>" + t + "</em>";
            todoListDiv.appendChild(tagElement);

            // Create and add buttons div
            var buttonsDiv = document.createElement("div");
            buttonsDiv.id = "button_list";
            todoListDiv.appendChild(buttonsDiv);

            // Create and add buttons
            var completeButton = document.createElement("button");
            completeButton.className = "button";
            completeButton.textContent = "Complete";
            buttonsDiv.appendChild(completeButton);

            var skipButton = document.createElement("button");
            skipButton.className = "button";
            skipButton.textContent = "Skip";
            buttonsDiv.appendChild(skipButton);

            boxTodo.appendChild(todoListDiv);

            clearForm();
            showAlert("Task added successfully", "success");
        }
        
    }

    // Function to clear the fildes after button submit was clicked
    function clearForm() {
        let taskName = document.querySelector("#task_name").value="";
        let checklist = document.querySelector("#checklist").value="";
        let dueTo = document.querySelector("#due_to").value="";
        let tag = document.querySelector("#tag").value="";
    }

    // Alert function to show if the task was added or fildes were empty
    function showAlert(m, c){
        let div = document.createElement("div");
        div.innerText = m;
        div.className = c;
        div.id = "alert";
        document.querySelector("#notification").appendChild(div);
        this.setTimeout(function(){
            document.querySelector("#alert").remove();
        }, 3000);
    }

});