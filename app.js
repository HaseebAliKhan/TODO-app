var list = document.getElementById("list")

function add_items() {
    var todo_items = document.getElementById("todo_items");
    var li = document.createElement("li");
    var LiText = document.createTextNode(todo_items.value);
    li.appendChild(LiText);
    var delbtn = document.createElement('button');
    var delText = document.createTextNode("DELETE");
    delbtn.appendChild(delText);
    li.appendChild(delbtn);
    delbtn.setAttribute("onclick","deleteItems(this)")
    list.appendChild(li);
    var EDIT = document.createElement('button');
    var EDITText = document.createTextNode("EDIT");
    EDIT.appendChild(EDITText);
    li.appendChild(EDIT);
    EDIT.setAttribute("onclick","EDITItems(this)")
    list.appendChild(li);
    todo_items.value=""
    

}
function delete_all(){
    list.innerHTML=""
}
function deleteItems(e) {
    e.parentNode.remove();

}
function EDITItems(f){
    var val = f.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Items",val)
    f.parentNode.firstChild.nodeValue= editValue
}
