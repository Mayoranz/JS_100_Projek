function loop() {
  const out = document.getElementById('hasil')
  
  let h = 5;
  let output = "";
  
  for (let e = 0; e < 6; e++) {
      output += "*".repeat(e) + "<br>";
  }
  
  output += "*".repeat(7) + "<br>";
  
  for (let f = 0; f < 5; f++) {
      output += "*".repeat(h) + "<br>";
      h -= 1;
  }
  
  out.innerHTML = output;
}   