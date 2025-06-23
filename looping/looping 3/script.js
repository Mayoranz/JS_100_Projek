function loop() {
  const out = document.getElementById('hasil')
  
  let list = ['A.', 'B.', 'C.', 'D.'];
  for (let a of list) {
      out.innerHTML += a + ' Cerdas<br>';
  }

}   