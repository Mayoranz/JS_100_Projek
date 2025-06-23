const cotangenNya = {
  0: "<span class='tak-terdefinisi'>Tak Terdefinisi</span>",
  30: "√3",
  45: "1",
  60: "√3/3",
  90: "0",
  120: "-√3/3",
  135: "-1",
  150: "-√3",
  180: "<span class='tak-terdefinisi'>Tak Terdefinisi</span>",
  210: "√3",
  225: "1",
  240: "√3/3",
  270: "0",
  300: "-√3/3",
  315: "-1",
  330: "-√3",
  360: "<span class='tak-terdefinisi'>Tak Terdefinisi</span>"
};

function hitungCotangen() {
  const sudut = document.getElementById("sudut").value;
  const hasilElement = document.getElementById("hasil");
  const konfirmasiElement = document.getElementById("konfirmasi");
  
  const nilaiCotangen = cotangenNya[sudut];
  hasilElement.innerHTML = `
      <p>cot(${sudut}°) =</p>
      <div class="pecahan">${nilaiCotangen}</div>
  `;
  
  konfirmasiElement.style.display = "block";
}

function ulangiProgram() {
  document.getElementById("hasil").innerHTML = "";
  document.getElementById("konfirmasi").style.display = "none";
}