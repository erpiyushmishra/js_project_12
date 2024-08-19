let input = document.getElementById("input");
const submit = document.getElementById("submit");
const main = document.querySelector(".main");
let array = []


const createList = (input_text)=>{
    const list = document.createElement("div");
    list.classList.add("list");
    
    const content = document.createElement("p");
    content.innerText = input_text;
    array.push(input_text)
    setDataToLocalStorage(array);

    
    
    const list_icon = document.createElement("div");
    list_icon.classList.add("list-icon");
    const check_box = document.createElement("input");
    check_box.setAttribute("type","checkbox");
    
    const del = document.createElement("span");
    del.classList.add("material-symbols-outlined");
    del.classList.add("delt");
    del.innerText = "delete";
    del.addEventListener("click",()=>{
        list.style.display="none";
    })
    list_icon.appendChild(check_box);
    list_icon.appendChild(del);
    list.appendChild(content);
    list.appendChild(list_icon);
    
    main.appendChild(list);
    input.value="";

}

submit.addEventListener("click",()=>createList(input.value));


function setDataToLocalStorage(data){
    localStorage.setItem("data", JSON.stringify(array));
}

function getDataToLocalStorage(){
    return JSON.parse(localStorage.getItem("data"));
}

const show_old_data = ()=>{
    const old_data = getDataToLocalStorage();
    if (old_data){
        old_data.forEach((data)=>createList(data))
    }
}

show_old_data();