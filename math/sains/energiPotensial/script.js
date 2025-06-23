function energiP() {
  const massaInput = document.getElementById('massa');
  const tinggiInput = document.getElementById('tinggi');
  const outOutput = document.getElementById('out');

  const m = parseInt(massaInput.value);
  const h = parseInt(tinggiInput.value);
  const g = 10;

  let ep = m * g * h

  outOutput.textContent = `Energi potensialnya adalah : ${ep}`
}