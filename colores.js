
function setup () {
    formElement = document.getElementById('text');
    writeElement = document.getElementById('write');
    formElement.addEventListener('input', handler);
}
handler = function (e) {
    writeElement.style.backgroundColor = formElement.value;
};