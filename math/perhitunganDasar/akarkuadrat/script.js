function ak() {
  const angkaInput = document.getElementById('angka');
  const outOutput = document.getElementById('out');

  const angka = parseFloat(angkaInput.value)

  let akar_kuadrat = angka ** 0.5
  outOutput.textContent = `Akar Kuadrat dari ${angka} adalah ${akar_kuadrat.toFixed(2)}`
}                 