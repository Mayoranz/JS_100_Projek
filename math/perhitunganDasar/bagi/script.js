const nomber1Input = document.getElementById('nomber1');
const nomber2Input = document.getElementById('nomber2');
const btnBagi = document.getElementById('btnBagi');
const hasilDiv = document.getElementById('hasil');

function isValidNumber(value) {
  return !isNaN(value) && value !== '' && value !== null;
}

btnBagi.addEventListener('click', () => {
  const num1 = parseFloat(nomber1Input.value);
  const num2 = parseFloat(nomber2Input.value);

  if (!isValidNumber(num1) || !isValidNumber(num2)) {
    hasilDiv.textContent = 'Mohon masukkan angka yang valid pada kedua bidang.';
    hasilDiv.style.color = 'crimson';
    return;
  }

  const sum = num1 / num2;
  hasilDiv.textContent = `Hasil: ${sum}`;
});
