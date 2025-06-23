function loop() {
  const out = document.getElementById('hasil')
  
  let b = 2;
  let output = "1";
  
  while (b < 6) {
      output += " + " + b;
      b++;
  }
  output += " = 15";
  out.innerHTML = output;

}   