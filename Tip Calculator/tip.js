function calculateTip() {
  var billAmount = parseFloat(document.getElementById('bill-amount').value);
  var tipPercentage = parseFloat(document.getElementById('tip-percentage').value);
  var tipAmount = billAmount * (tipPercentage / 100);
  var totalAmount = billAmount + tipAmount;
  document.getElementById('total-tip').innerText = 'Total Tip: $' + tipAmount.toFixed(2) + ', Total Amount: $' + totalAmount.toFixed(2);
}