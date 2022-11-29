const confirm = document.querySelector("#confirmPassword")
const pass = document.querySelector("#password")
const unmatch = document.querySelector(".unmatch")
let flag= false;

confirm.addEventListener('input', (e) => {
    flag=true
    if(e.target.value != pass.value){
        unmatch.setAttribute('id','true')
    }
    else
        unmatch.removeAttribute('id')
})

pass.addEventListener('input', (e) => {
    if(flag){
    if(e.target.value != confirm.value){
        unmatch.setAttribute('id','true')
    }
    else
        unmatch.removeAttribute('id')
}
})