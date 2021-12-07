document.addEventListener('DOMContentLoaded', function(){
    let nome = document.querySelector('.conversation-name')
    nome.innerHTML = localStorage.getItem('username')

    let input = document.querySelector('input[type="text"]')

    let button = document.querySelector('input[type="submit"]')

    let last_message = document.querySelector('.box2').innerHTML
    localStorage.setItem('last message', last_message)

    // nome.innerHTML = localStorage.getItem('nome trabalhador')

    button.addEventListener('click', function(event){
        text = input.value

        baloon = document.createElement('li')

        lista = document.querySelector('ul')

        baloon.classList.add('box')
        baloon.classList.add('sb1')

        baloon.innerHTML = text

        if (text != ''){
            lista.appendChild(baloon)
        }

        input.value = ''

        event.preventDefault()

    })

})

//sdhs