let a= document.querySelectorAll(".taskElement");
let index=0;
let emp = document.querySelector(".emptMsg")

function addTask(){

    // index = a.length;
    a = document.querySelectorAll(".taskElement");
        
    
    let task = document.querySelector("input");
    
    let container1 = document.querySelector(".Container1") ;
    let taskEl = document.createElement("div");
    
    
    // let emptList = document.createElement("div");
    // emptList.className="emptyList";
    // emptList.innerHTML=`The string is Empty!`;
    if(a.length < 1){
        index = 0;
        
    };
   

    taskEl.innerHTML=`<label><input type="checkbox" class="taskbox"><span></span></label>
                    <div class="task">${task.value}</div>
                    <button class="delTask" onclick="delTask(${index})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg></button>`;
    taskEl.className="taskElement"
    taskEl.id=`task-${index}`;
    
    if (task.value!=""){
        container1.appendChild(taskEl);
        task.value = "";
        index++;
        
    }
    a = document.querySelectorAll(".taskElement");
    if(a.length >= 1){
        emp = document.querySelector(".emptMsg")
        emp.style.display="none";
    }else if(a.length<1){
        emp = document.querySelector(".emptMsg")
        emp.style.display="block";
    }
}
let task1 = document.querySelector("input");
task1.addEventListener('keydown',function(event){
    if(event.key==='Enter'){
        addTask();
    }
});


function delTask(index){
    let taskToDel = document.getElementById(`task-${index}`)
    taskToDel.remove();

    a = document.querySelectorAll(".taskElement");

    if(a.length<1){
        emp = document.querySelector(".emptMsg")
        emp.style.display="block";
    }
}
