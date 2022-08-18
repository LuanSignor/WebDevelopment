function insert(num){
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
}
function clean(){
    document.getElementById('result').innerHTML = "";
}
function back(){
    var resultClear = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultClear.substring(0,resultClear.length -1);
}
function calculate(){
    var resultClear = document.getElementById('result').innerHTML;
    if(resultClear){
        document.getElementById('result').innerHTML = eval(resultClear);
    }
    else{
        document.getElementById('result').innerHTML = "";
    }
}