function changeText() {
    document.getElementById('demoText').textContent = "Text has been changed!";
}
document.getElementById('saveButton').addEventListener('click', function() {
    let inputValue = document.querySelector('input[type="text"]').value;
    localStorage.setItem('savedInput', inputValue);
    alert('Data saved to localStorage');
});