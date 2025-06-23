function loop() {
  const out = document.getElementById('hasil')
  
  let output = "";
  for (let a = 0; a < 6; a++) {
      output += "*".repeat(a) + "<br>";
  }
  out.innerHTML = output;
}   