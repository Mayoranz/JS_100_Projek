function loop() {
  const out = document.getElementById('hasil')
  
  let bintang = 1;
  let spasi_user = 11;
  let output = "";
  
  while (bintang < 11) {
      output += "&nbsp;".repeat(spasi_user) + "*".repeat(bintang) + "<br>";
      spasi_user--;
      bintang += 2;
  }
  out.innerHTML = output;
}   