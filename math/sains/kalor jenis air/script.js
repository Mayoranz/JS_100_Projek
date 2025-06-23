function air() {
  const massaInput = document.getElementById('massa');
  const awalInput = document.getElementById('awal');
  const akhirInput = document.getElementById('akhir');
  const outOutput = document.getElementById('out');

  const c = 4.18
  const m = parseInt(massaInput.value);
  const suhu_awal = parseInt(awalInput.value);
  const suhu_akhir = parseInt(akhirInput.value);
  
  let t = suhu_awal - suhu_akhir
  let q3 = m * c * t

  outOutput.textContent = `jumlah kalor yang diperlukan adalah = ${q3}`
}