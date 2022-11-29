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

const bgc = document.querySelector('.bgc')
const text = document.querySelector('.text')
pass.addEventListener('input', (e) => {
    if(e.target.value){
        a=0
        b=0
        c=0
        text.removeAttribute('id')
        if(e.target.value.length>5)
            a=1
        if(!e.target.value.match(/^[a-z0-9]+$/i) || (e.target.value.match(/[A-Z]/) && e.target.value.match(/[a-z]/)))   
            b=1;
        if(e.target.value.match(/[0-9]/))
            c=1
        strength=a+b+c 

        switch(strength){
            case 0:
                bgc.removeAttribute("class")
                bgc.classList.add('red')
                break;
            case 1:
                bgc.removeAttribute("class")
                bgc.classList.add('yellow')
                break;
            case 2:
                bgc.removeAttribute("class")
                bgc.classList.add('lime')
                break;
            case 3:
                bgc.removeAttribute("class")
                bgc.classList.add('green')
                break;
        }
    }
    else{
        text.setAttribute('id','show')
        bgc.classList.add('bgc')
    }
})

