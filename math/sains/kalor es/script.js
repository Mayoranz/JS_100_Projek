function es() {
  const massaInput = document.getElementById('massa');
  const suhu1Input = document.getElementById('suhu1');
  const suhu2Input = document.getElementById('suhu2');
  const outOutput = document.getElementById('out');

  const c = 2100
  const m = parseInt(massaInput.value);
  const suhu1 = parseInt(suhu1Input.value);
  const suhu2 = parseInt(suhu2Input.value);
  
  let rumus = m * c * (suhu2 - suhu1)

  outOutput.textContent = `Jadi kalor jenis es adalah : ${rumus.toFixed(2)} J`
}