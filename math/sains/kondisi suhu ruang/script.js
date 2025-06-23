function suhuR() {
  const suhuInput = document.getElementById('suhu');
  const outOutput = document.getElementById('out');

  const suhu = parseInt(suhuInput.value)

  if (suhu >= 50){
    outOutput.textContent = 'nyalakan tanda bahaya'
  }else if (suhu <= 20){
    outOutput.textContent = 'matikan ac'
  }else{
    outOutput.textContent = 'suhu ruangan nya berapa bang'
  }
}