document.getElementById('btn_field').addEventListener('click', function(){
    const inputField = document.getElementById('input_field')
    let inputValue = parseInt(inputField.value)
    if( inputValue <= 10 && inputValue > 0){
        inputCheck()
    }
    else{
       errorMassege('valid_error')
       errorMassegeHide('wrong_error')
       errorMassegeHide('correct_error')
    }
    inputField.value = ''
})

function inputCheck(){
    const inputField = document.getElementById('input_field')
    let inputValue = parseInt(inputField.value)
    let inputRand = Math.floor(Math.random() * 10) + 1;
    document.getElementById('gusses_1').innerText = inputValue
    document.getElementById('gusses_2').innerText = inputRand
    if( inputValue == inputRand){
        errorMassege('correct_error')
        errorMassegeHide('wrong_error')
        errorMassegeHide('valid_error')
    }else{
        errorMassege('wrong_error')
        errorMassegeHide('correct_error')
        errorMassegeHide('valid_error')
     }  
}


function errorMassege(idName){
        document.getElementById(idName).style.display = 'inline-block'
}
function errorMassegeHide(idName){
    document.getElementById(idName).style.display = 'none'
}