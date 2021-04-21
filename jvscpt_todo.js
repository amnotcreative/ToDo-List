const listitems = [];

class todolist
{
    constructor(ele)
    {
        this.ulElement = ele;
    }

    add()
    {
        const input = document.querySelector("#userinput").value;
        if (input=="")
        {
            alert("So you got nothing to do? Woho!")
        }
        else
        {
            const list ={ 
                id : listitems.length,
                todotext : input,
                isDone : false,
            }
        
        listitems.push(list);
        this.display();
        document.querySelector("#userinput").value = ''; //deleting the value so that we can print only one element at a time
        }
    }

    done(x)
    {
        const selectedTodoIndex = 
        listitems.findIndex((ele)=> ele.id == x);
       console.log(listitems[selectedTodoIndex].isDone);
       listitems[selectedTodoIndex].isDone == false ? listitems[selectedTodoIndex].isDone = true : listitems[selectedTodoIndex].isDone = false;
       this.display();
    }

    del(z)
    {
        const selectedDelIndex = listitems.findIndex((ele) => ele.id == z);
        listitems.splice(selectedDelIndex,1);
        this.display();
    }

    display()
    {
        this.ulElement.innerHTML = "";

        listitems.forEach((object_item) => { 
        const liElement = document.createElement("li");
        const trash = document.createElement("i");
        liElement.innerText = object_item.todotext;
        liElement.setAttribute("data-id", object_item.id);
        trash.setAttribute("data-id", object_item.id);
        trash.classList.add("far", "fa-trash-alt");
        liElement.appendChild(trash);
        trash.addEventListener("click", function(e) {
            const deleteitem = e.target.getAttribute("data-id");
            currentlist.del(deleteitem);
            })
        liElement.addEventListener("click", function(e) {
            const selected = e.target.getAttribute("data-id");
            currentlist.done(selected);
            })
        if (object_item.isDone) {
            liElement.classList.add("checked");
            }
        this.ulElement.appendChild(liElement);
         })
    }
}

const mylist = document.querySelector("#inputlist");
currentlist = new todolist(mylist);
document.querySelector(".addbutton").addEventListener("click", function(){
    currentlist.add()
})

