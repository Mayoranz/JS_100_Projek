function loop() {
  const out = document.getElementById('hasil')
  
  let a = 1;
  let output = "";
  
  while (a < 6) {
      output += a + " ";
      a++;
  }
  output += "= 15";
  out.innerHTML = output;

}   