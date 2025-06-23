function energiL() {
  const muatanInput = document.getElementById('muatan');
  const potensialInput = document.getElementById('poten');
  const outOutput = document.getElementById('out');

  const q = parseInt(muatanInput.value);
  const v = parseInt(potensialInput.value);

  let epl = q * v

  outOutput.textContent = `Energi Potensial Listrik: ${epl}`
}