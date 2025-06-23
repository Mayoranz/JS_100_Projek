const sinusNya = {
  0: "0",
  30: "1/2",
  45: "√2/2",
  60: "√3/2",
  90: "1",
  120: "√3/2",
  135: "√2/2",
  150: "1/2",
  180: "0",
  210: "-1/2",
  225: "-√2/2",
  240: "-√3/2",
  270: "-1",
  300: "-√3/2",
  315: "-√2/2",
  330: "-1/2",
  360: "0"
};

function hitungSinus() {
  const sudut = document.getElementById("sudut").value;
  const hasilElement = document.getElementById("hasil");
  const konfirmasiElement = document.getElementById("konfirmasi");
  
  const nilaiSinus = sinusNya[sudut];
  hasilElement.innerHTML = `
      <p>sin(${sudut}°) =</p>
      <div class="pecahan">${nilaiSinus}</div>
  `;
  
  konfirmasiElement.style.display = "block";
}

function ulangiProgram() {
  document.getElementById("hasil").innerHTML = "";
  document.getElementById("konfirmasi").style.display = "none";
}