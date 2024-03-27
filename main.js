let editSpan = document.getElementById("edit")
let buttons = document.querySelectorAll(".btn")
buttons.forEach(btn => {
 btn.addEventListener("click" , () =>{
    let val = btn.innerText
        handleBtn(val)
 })
})



let handleBtn = (val) =>{
    switch(val) {
        case "C" : 
            reset()
        break
        case "arrow_back":
            remove()
        break
        case "=" :
            result()
        break
        default:
            btnPressed(val)
            break
    }
}

let btnPressed = (val) => {
if(val.match(/[+\-*/]/)){
        editSpan.innerText += `${val}`
    }else if(editSpan.innerText === "0"){
    editSpan.innerText = val
   }else{
    editSpan.innerText += val
   }
};
let result = () => {
    try {
        editSpan.innerText = eval(editSpan.innerText)
    } catch (error) {
        editSpan.innerText = "Error"
    }
};

let reset = () => {
    editSpan.innerText = "0" 
};

let remove = () =>{
    let arr = editSpan.innerText
    if(arr.length > 1){
        editSpan.innerText = arr.slice(0, -1)
    }else{
        editSpan.innerText = "0"
    }
}

