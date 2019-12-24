function clickButton(){
    var variable = function(elem){
        elem.innerText = 'andrew'
    }
    document.querySelectorAll('.button').forEach(elem => variable(elem))

}