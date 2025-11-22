function inserir(num) {
    document.querySelector('#display').value += num
}

function clean(){
     document.querySelector('#display').value = ''
}

function del(){
    const display = document.querySelector('#display')
    display.value = display.value.slice(0, -1)
}

function calcular(){
    const display = document.querySelector('#display')
    try{
        display.value = eval(display.value)
    }
    catch{
        display.value = 'error'
    }
}