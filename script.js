const confirm = document.querySelector("#confirmPassword")
const pass = document.querySelector("#password")
const unmatch = document.querySelector(".unmatch")

confirm.addEventListener('input', (e) => {
    if(e.target.value.length>0){
        if(e.target.value != pass.value)
            unmatch.setAttribute('id','true')
        else
            unmatch.removeAttribute('id')
    }
    else
        unmatch.removeAttribute('id')
})

pass.addEventListener('input', (e) => {
    if(confirm.value.length>0){
        if(e.target.value != confirm.value)
            unmatch.setAttribute('id','true')
        else
            unmatch.removeAttribute('id')
    }
    else
        unmatch.removeAttribute('id')
})