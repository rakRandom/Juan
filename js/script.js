var paragrafo = document.getElementById("paragrafo")

function DontShowJuan(){
    var juan = document.getElementById("juan")
    var content = document.querySelector(".content")

    if (window.getComputedStyle(content).getPropertyValue('opacity') === '0'){
        paragrafo.innerHTML = "tá procurando o que aqui? tá com fome? clica pra pegar um pão de queijo."
        juan.classList.remove('juanEnter')
    }
}

function ShowJuan(){
    var juan = document.getElementById("juan")

    if (juan.classList.contains('juanLeave')){
        juan.classList.remove('juanLeave')
        juan.classList.add('juanEnter')
    }
    else if (juan.classList.contains('juanEnter')){
        juan.classList.remove('juanEnter')
        juan.classList.add('juanLeave')
    }
    else{
        juan.classList.add('juanEnter')
    }
}

function Zueira(){
    paragrafo.innerHTML = "era zueira garai, tem nada aqui não jkkkkkkkkk"
}

setInterval(DontShowJuan, 100)