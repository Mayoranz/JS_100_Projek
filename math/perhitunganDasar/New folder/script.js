(function() {
  const biner = document.getElementById('biner');
  const Konversi = document.getElementById('Konversi');
  const hasil = document.getElementById('hasil');

  function isValidBinary(str) {
    return /^[01]+$/.test(str);
  }

  Konversi.addEventListener('click', () => {
    const binStr = biner.value.trim();

    if (binStr === '') {
      hasil.textContent = 'Mohon masukkan angka biner.';
      return;
    }

    if (!isValidBinary(binStr)) {
      hasil.textContent = 'Masukkan angka biner yang valid (hanya 0 dan 1).';
      return;
    }

    // Convert binary string to decimal number
    const decimalValue = parseInt(binStr, 2);
    hasil.textContent = `Hasil desimal: ${decimalValue}`;
  });
})();