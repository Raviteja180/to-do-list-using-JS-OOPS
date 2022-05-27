class Todo{
    a = "";
    isUndoClicked = false;
    undo_button = document.getElementById('undo_button');
    container = "";
    constructor(name){
        this.task_name = name;
        // this.container = container;
        if(this.task_name!="")this.adding_task();
        undoing_task();
    }
    adding_task(){
        this.a= document.createElement('li');
        this.a.style.listStyleType = 'none';
        // this.a.style.display = "inline-block";
        this.a.style.margin= "10px";
        this.a.innerHTML = this.task_name;
        // this.a.style.fontSize = "50px";

        
        let x = document.createElement('button');
        x.innerHTML = "Done";
        this.stylingButton(x,"#5f27cd");
       
        x.onclick = () => {
            this.mark_done();
        }
        this.a.appendChild(x);
        let q = document.createElement('button');
        q.innerHTML = "Delete";
        this.stylingButton(q,"#ee5253");
        q.onclick = () => {
            this.delete_task();
        }
        this.a.appendChild(q);
        document.getElementById('list-of-items').appendChild(this.a);
        this.undo_button.onclick = () => {
            this.undoing_task();
        }
        // document.getElementById('list-of-items').style.width = "100%";
    }
    mark_done(){
        this.a.style.textDecoration = "line-through";
    }
    delete_task(undo_status){
        this.a.style.display = 'none';
    }
    undoing_task(){
    
            
                this.a.style.display = 'block';
                // alert(this.a);
    }
    stylingButton(x,color_name){
        x.style.margin = '0px 10px 0px 10px';
        x.style.backgroundColor = color_name;
        x.style.border = "1px solid";
        x.style.borderRadius = "25px";
        x.style.color= "white";
        x.style.padding = "10px 30px"
    }
    
}


function get_task(){
    let v = document.getElementById('task-input').value;
    var todo = new Todo(v);
    // alert("clicked");
}

