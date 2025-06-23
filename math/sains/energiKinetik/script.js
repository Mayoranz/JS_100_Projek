function energiK() {
  const massaInput = document.getElementById('massa');
  const kecepatanInput = document.getElementById('kecepatan');
  const outOutput = document.getElementById('out');

  const massa = parseInt(massaInput.value);
  const v = parseInt(kecepatanInput.value);

  let ek = 1/2 * massa * v * v

  outOutput.textContent = ek
}