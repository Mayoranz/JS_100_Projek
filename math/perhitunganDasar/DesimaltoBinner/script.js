(function(){
  const desimal = document.getElementById('desimal');
  const btnKonversi = document.getElementById('btnKonversi');
  const hasil = document.getElementById('hasil');
  function isValidNonNegativeInteger(value) {
    return Number.isInteger(value) && value >= 0;
  }
  btnKonversi.addEventListener('click', () => {
    const inputValue = Number(desimal.value);
    if (desimal.value.trim() === '') {
      hasil.textContent = 'Mohon masukkan angka desimal.';
      return;
    }
    if (!isValidNonNegativeInteger(inputValue)) {
      hasil.textContent = 'Masukkan angka bulat non-negatif yang valid.';
      return;
    }
    const binaryValue = inputValue.toString(2);
    hasil.textContent = `Hasil biner: ${binaryValue}`;
  });
})