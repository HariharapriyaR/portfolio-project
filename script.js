function appendValue(val) {
  document.getElementById('display').value += val;
}
function calculate() {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch (e) {
    alert('Invalid Expression');
  }
}
function clearDisplay() {
  document.getElementById('display').value = '';
}