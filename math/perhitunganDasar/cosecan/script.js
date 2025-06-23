const cosecanNya = {
  0: "<span class='tak-terdefinisi'>Tak Terdefinisi</span>",
  30: "2",
  45: "√2",
  60: "2√3/3",
  90: "1",
  120: "2√3/3",
  135: "√2",
  150: "2",
  180: "<span class='tak-terdefinisi'>Tak Terdefinisi</span>",
  210: "-2",
  225: "-√2",
  240: "-2√3/3",
  270: "-1",
  300: "-2√3/3",
  315: "-√2",
  330: "-2",
  360: "<span class='tak-terdefinisi'>Tak Terdefinisi</span>"
};

function hitungCosecan() {
  const sudut = document.getElementById("sudut").value;
  const hasilElement = document.getElementById("hasil");
  const konfirmasiElement = document.getElementById("konfirmasi");
  
  const nilaiCosecan = cosecanNya[sudut];
  hasilElement.innerHTML = `
      <p>csc(${sudut}°) =</p>
      <div class="pecahan">${nilaiCosecan}</div>
  `;
  
  konfirmasiElement.style.display = "block";
}

function ulangiProgram() {
  document.getElementById("hasil").innerHTML = "";
  document.getElementById("konfirmasi").style.display = "none";
}