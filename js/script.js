var paragrafo = document.getElementById("paragrafo")
var background = document.querySelector(".background")
var juan = document.getElementById("juan")
var content = document.querySelector(".content")

var headerh1 = document.getElementById("headerh1")
var contenth1 = document.getElementById("contenth1")
var contentp = document.getElementById("contentp")

function DontShowJuan(){
    if (window.getComputedStyle(content).getPropertyValue('opacity') === '0'){
        paragrafo.innerHTML = "tá procurando o que aqui? tá com fome? clica pra pegar um pão de queijo."
        juan.classList.remove('juanEnter')

        if (background.classList.contains("backgroundJuan")){
            background.classList.remove("backgroundJuan")
            background.classList.add("backgroundNormal")
        }
    }
}

function ShowJuan(){
    if(background.classList.contains("background")){
        background.classList.remove("background")
        background.classList.add("backgroundJuan")

        headerh1.innerHTML = "SITE DO JUAN"
        contenth1.innerHTML = "TITULO DO JUAN"
        contentp.innerHTML = "LOREM JUAN IPSUM JUAN DOLOR JUAN LOREM JUAN IPSUM JUAN DOLOR JUAN LOREM JUAN IPSUM JUAN DOLOR JUAN LOREM JUAN IPSUM JUAN DOLOR JUAN LOREM JUAN IPSUM JUAN DOLOR JUAN"


    } else if (background.classList.contains("backgroundJuan")){
        background.classList.remove("backgroundJuan")
        background.classList.add("backgroundNormal")

        headerh1.innerHTML = "Site de alguma coisa que eu ainda vou pensar no que é"
        contenth1.innerHTML = "Titulo de algo que eu ainda não decidi"
        contentp.innerHTML = "Se eu não me estou engano eu planejo que assim que eu decidir o que fazer com esse site, quando eu clicar nesse botão abaixo vai fazer alguma coisa, eu acho que ele fica azul ou sei lá o que mas é bem doido isso eu sei"
    } else {
        background.classList.remove("backgroundNormal")
        background.classList.add("backgroundJuan")

        headerh1.innerHTML = "SITE DO JUAN"
        contenth1.innerHTML = "TITULO DO JUAN"
        contentp.innerHTML = "LOREM JUAN IPSUM JUAN DOLOR JUAN LOREM JUAN IPSUM JUAN DOLOR JUAN LOREM JUAN IPSUM JUAN DOLOR JUAN LOREM JUAN IPSUM JUAN DOLOR JUAN LOREM JUAN IPSUM JUAN DOLOR JUAN"
    }


    if (juan.classList.contains('juanLeave')){
        juan.classList.remove('juanLeave')
        juan.classList.add('juanEnter')
    } else if (juan.classList.contains('juanEnter')){
        juan.classList.remove('juanEnter')
        juan.classList.add('juanLeave')
    } else{
        juan.classList.add('juanEnter')
    }
}

function Zueira(){
    paragrafo.innerHTML = "era zueira garai, tem nada aqui não jkkkkkkkkk"
}

setInterval(DontShowJuan, 100)