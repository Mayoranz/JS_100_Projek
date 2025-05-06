const divJamDigital = document.querySelector('#jamDigital')
const divJam = document.querySelector('#jam')
const divMenit = document.querySelector('#menit')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const clear = document.querySelector('#clear')
const lap = document.querySelector('#lap')
const divDetik = document.querySelector('#detik')

let detik = 0
let menit = 0
let jam = 0
let awal = null

const changeNumber = () => {
  detik++
  if (detik === 60) {
    detik = 0
    menit++
  }
  if (menit === 60) {
    menit = 0
    jam++
  }
  if (jam === 24) {
    jam = 0
  }

  divDetik.textContent = detik < 10 ? `0${detik}` : detik
  divMenit.textContent = menit < 10 ? `0${menit}` : menit
  divJam.textContent = jam < 10 ? `0${jam}` : jam
}

start.addEventListener('click', () => {
  hasil = hasil ? hasil : Date.now();
  timerInterval = setInterval(updateDisplay, 10);
});

stop.addEventListener("click", function () {
  if (awal) {
    clearInterval(awal)
    awal = null
  }
})

clear.addEventListener("click", function () {
  if (awal) {
    clearInterval(awal)
    awal = null
  }
  detik = 0
  menit = 0
  jam = 0
  divDetik.textContent = "00"
  divMenit.textContent = "00"
  divJam.textContent = "00"
})

