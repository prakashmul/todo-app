//getiing all required elements
const inputBox= document.querySelector(".inputfield input");
const addBtn= document.querySelector(".inputfield button");

inputBox.onkeyup=()=>{
    let userData = inputBox.value; //getting user entered value
    if(userData.trim() !=0){  //if user values arent only spaces
       addBtn.classList.add("active"); //active the add button
    }
    else{
        addBtn.classList.remove("active"); //in-active the add button
    }
}

//if user click on add button
addBtn.onclick = ()=>{
    let userData= inputBox.value; //getting user entered value
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localstorage
    if(getLocalStorage==null){  //if localstorage is null
        listArr =[]; //creating blank array
    }
    else{
        listArr= JSON.parse(getLocalStorage);  //TRANSFORMING JSON STRING INTO A JS OBJECT
    }
    listArr.push(userData); //pushing or adding userdata
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into a json string
}


 





