function jEs() {
  const massaInput = document.getElementById('massa');
  const awalInput = document.getElementById('awal');
  const akhirInput = document.getElementById('akhir');
  const outOutput = document.getElementById('out');

  const kalor_jenis_es = 2.1
  const m = parseInt(massaInput.value);
  const suhu_awal = parseInt(awalInput.value);
  const suhu_akhir = parseInt(akhirInput.value);
  
  let t = suhu_awal - suhu_akhir
  
  let q1 = m * kalor_jenis_es * t

  outOutput.textContent = `julmah kalor yang diperlukan adalah ${q1}`
}