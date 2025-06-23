function kAir() {
  const kondisi = document.getElementById('input').value.toLowerCase();
  const outOutput = document.getElementById('out');

  if (kondisi == 'mendidih'){
    outOutput.textContent = 'matikan kompor'
  }else if (kondisi == 'anget'){
    outOutput.textContent = 'tunggu sebentar lagi'
  }else if (kondisi == 'dingin'){
    outOutput.textContent = 'nyalakan api kompor paling besar'
  }else{
    outOutput.textContent = 'idiot tolol'
  }
}