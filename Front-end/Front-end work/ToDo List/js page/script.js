window.addEventListener("DOMContentLoaded", function() { // Load a contant first
    let form = this.document.querySelector("#form");


    // Take the entered values when the button submit clicked //////////////////////////////////////////////////////////////////////////////
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

    // Function that addes each element into a task box //////////////////////////////////////////////////////////////////////////////////////
    function addToDoList(tn, ch, due, t) {
        if(tn==="" || ch==="" || due==="" || t==="") {
            showAlert("No filds should be empty", "error");
        } else {
            let boxTodo = document.getElementById("box_for_todo");
            let todoListDiv = document.createElement("div");
            todoListDiv.id = "todo_list";

            // Create and add task name
            let taskNameHeader = document.createElement("h2");
            taskNameHeader.id = "task_name_list";
            taskNameHeader.textContent = tn;
            todoListDiv.appendChild(taskNameHeader);

            // Create and add due date
            let lineTop = document.createElement("hr");
            todoListDiv.appendChild(lineTop);
            let dueDateElement = document.createElement("date");
            dueDateElement.id = "due_to_list";
            dueDateElement.innerHTML = `Due to:  <em>${due}</em>`;
            todoListDiv.appendChild(dueDateElement);
            let lineBottom = document.createElement("hr");
            todoListDiv.appendChild(lineBottom);

            // Create and add checklist header
            let checklistHeader = document.createElement("h3");
            checklistHeader.textContent = "Checklist:";
            todoListDiv.appendChild(checklistHeader);

            // Create and add checklist list
            let checklistDiv = document.createElement("div");
            checklistDiv.id = "checklist_list";
            todoListDiv.appendChild(checklistDiv);

            // Loop through checklist array and create checklist items
            for (let i = 0; i < ch.length; i++) {
                let checkboxInput = document.createElement("input");
                checkboxInput.type = "checkbox";
                checkboxInput.className = "checkbox";
                checkboxInput.id = "check" + (i + 1);
                checklistDiv.appendChild(checkboxInput);

                let checklistItem = document.createElement("label");
                checklistItem.id = "text_checkbox";
                checklistItem.textContent = ch[i];
                checklistDiv.appendChild(checklistItem);
                checklistDiv.appendChild(document.createElement("br")); // Add line break after each label
            }

            // Create and add tag header
            let tagHeader = document.createElement("h3");
            tagHeader.textContent = "Tag:";
            todoListDiv.appendChild(tagHeader);

            // Create and add tag
            let tagElement = document.createElement("p");
            tagElement.id = "tag_list";
            tagElement.innerHTML = `~~<em>${t}</em>~~`;
            todoListDiv.appendChild(tagElement);

            // Create and add buttons div
            let buttonsDiv = document.createElement("div");
            buttonsDiv.id = "button_list";
            todoListDiv.appendChild(buttonsDiv);

            // Create and add buttons
            let completeButton = document.createElement("button");
            completeButton.className = "complete_button";
            completeButton.textContent = "Complete";
            buttonsDiv.appendChild(completeButton);

            let skipButton = document.createElement("button");
            skipButton.className = "skip_button";
            skipButton.textContent = "Skip";
            buttonsDiv.appendChild(skipButton);

            boxTodo.appendChild(todoListDiv);

            clearForm();
            showAlert("Task added successfully", "success");
        }
        
    }

    // Function to clear the fildes after button submit was clicked ///////////////////////////////////////////////////////////////////////
    function clearForm() {
        let taskName = document.querySelector("#task_name").value="";
        let checklist = document.querySelector("#checklist").value="";
        let dueTo = document.querySelector("#due_to").value="";
        let tag = document.querySelector("#tag").value="";
    }

    // Alert function to show if the task was added or fildes were empty //////////////////////////////////////////////////////////////////
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


    // Complete and Skip buttons function to increment the counter and delete the task ////////////////////////////////////////////////////
    let completeCounter = document.getElementById('complete_counter');
    let skipCounter = document.getElementById('skip_counter');
    let boxTodo = document.getElementById('box_for_todo');
    let completed = 0;
    let skipped = 0;

    // Function to update counters
    function updateCounters() {
        completeCounter.textContent = completed;
        skipCounter.textContent = skipped;
    }

    // Function to handle completion
    function handleComplete() {
        completed++;
        updateCounters();
        this.parentNode.parentNode.remove();
    }

    // Function to handle skipping
    function handleSkip() {
        skipped++;
        updateCounters();
        this.parentNode.parentNode.remove();
    }

    // Buttons do their job through clicking
    boxTodo.addEventListener('click', function(event) {
        if (event.target.className === "complete_button") {
            handleComplete.call(event.target); // we need call so the "this" statment will work
        } else if (event.target.className === "skip_button") {
            handleSkip.call(event.target);
        }
    });
});