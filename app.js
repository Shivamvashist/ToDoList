function addTask(){
    let task = document.querySelector("input");
    
    let container1 = document.querySelector(".Container1") ;
    let taskEl = document.createElement("div");
    taskEl.innerHTML=`<input type="checkbox" class="taskbox">
                    <div class="task" id="task-1">${task.value}</div>
                    <button class="delTask">x</button>`;
    taskEl.className="taskElement"

    if (task.value!=""){
        container1.appendChild(taskEl);
        task.value = "";
    }


}