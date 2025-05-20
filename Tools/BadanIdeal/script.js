const nomber1Input = document.getElementById('nomber1');
const nomber2Input = document.getElementById('nomber2');

const btntest = document.getElementById('btntest');
const hasilDiv = document.getElementById('hasil');

function isValidNumber(value) {
  return !isNaN(value) && value !== '' && value !== null;
}

btntest.addEventListener('click', () => {
  const num1 = parseFloat(nomber1Input.value);
  const num2 = parseFloat(nomber2Input.value);
  const oprasi= (num2/100)**2;
  const beratideal = num1/oprasi;

  if (!isValidNumber(num1) || !isValidNumber(num2)) {
    hasilDiv.textContent = 'Mohon masukkan angka yang valid pada kedua bidang.';
    return;
  }
  if (beratideal>=18.5&&beratideal<=22.9){
    hasilDiv.textContent = `Berat badan anda ideal ${beratideal}`
  }
  else {
    hasilDiv.textContent = `Berat badan anda tidak ideal ${beratideal}`
  }
});
