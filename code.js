function calculate(input){
    document.getElementById('result').value += input;
}

function Delete(){
    document.getElementById('result').value = "";
}

function singleDelete(){
    document.getElementById('result').value = document.getElementById('result').value.slice(0, -1);
}

function finalResult(){
    document.getElementById('result').value = eval(document.getElementById('result').value)
}