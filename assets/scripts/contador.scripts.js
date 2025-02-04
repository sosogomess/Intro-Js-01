function adicionar() {
    let atual =  Number (document.getElementById("counter").innerHTML);
    let result = atual + 1;

    document.getElementById("counter").innerHTML = result;

}


function subtrair() {
    let atual = document.getElementById("counter").innerHTML;
    let result = atual - 1;

    document.getElementById("counter").innerHTML = result;

}

function reset() {
    let result = 0;
    document.getElementById("counter").innerHTML = result;
}