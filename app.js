let a= document.querySelectorAll(".taskElement");
let index=0;

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

    taskEl.innerHTML=`<input type="checkbox" class="taskbox">
                    <div class="task">${task.value}</div>
                    <button class="delTask" onclick="delTask(${index})">x</button>`;
    taskEl.className="taskElement"
    taskEl.id=`task-${index}`;
    
    if (task.value!=""){
        container1.appendChild(taskEl);
        task.value = "";
        index++;
        
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
}