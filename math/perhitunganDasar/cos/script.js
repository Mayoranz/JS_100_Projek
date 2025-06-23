const kosinusNya = {
  0: "1",
  30: "√3/2",
  45: "√2/2",
  60: "1/2",
  90: "0",
  120: "-1/2",
  135: "-√2/2",
  150: "-√3/2",
  180: "-1",
  210: "-√3/2",
  225: "-√2/2",
  240: "-1/2",
  270: "0",
  300: "1/2",
  315: "√2/2",
  330: "√3/2",
  360: "1"
};

function hitungKosinus() {
  const sudut = document.getElementById("sudut").value;
  const hasilElement = document.getElementById("hasil");
  const konfirmasiElement = document.getElementById("konfirmasi");
  
  const nilaiKosinus = kosinusNya[sudut];
  hasilElement.innerHTML = `
      <p>cos(${sudut}°) =</p>
      <div class="pecahan">${nilaiKosinus}</div>
  `;
  
  konfirmasiElement.style.display = "block";
}

function ulangiProgram() {
  document.getElementById("hasil").innerHTML = "";
  document.getElementById("konfirmasi").style.display = "none";
}