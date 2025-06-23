function loop() {
  const out = document.getElementById('hasil')
  
  let c = 1;
  let output = "";
  
  while (c < 6) {
      output += c + "<br>";
      c++;
  }
  output += "------+<br>";
  output += "15";
  
  out.innerHTML = output;
}   