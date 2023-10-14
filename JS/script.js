function changeText() {
    document.getElementById('demoText').textContent = "Text has been changed!";
}
document.getElementById('saveButton').addEventListener('click', function() {
    let inputValue = document.querySelector('input[type="text"]').value;
    localStorage.setItem('savedInput', inputValue);
    alert('Data saved to localStorage');
});
function animateDiv() {
    let div = document.getElementById('animatedDiv');
    let pos = 0;
    let id = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            div.style.left = pos + 'px';
        }
    }
}