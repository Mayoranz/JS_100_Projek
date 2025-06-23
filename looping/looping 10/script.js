function loop() {
  const jumlahInput = document.getElementById('jumlah')
  const out = document.getElementById('hasil')

  const jumlah = parseInt(jumlahInput.value)
  
  let output = "";
  
  for (let a = 1; a <= jumlah; a++) {
    for (let b = 1; b <= 3; b++) {
      let hasil = a * b;
      output += `${b} x ${a} = ${hasil}&nbsp;&nbsp;&nbsp;`;
    }
    output += "<br>";
  }
  
  out.innerHTML = `<pre>${output}</pre>`;
}   