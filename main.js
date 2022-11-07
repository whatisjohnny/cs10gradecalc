document.getElementById("buttonfunc").addEventListener("click", myFunction);

function myFunction() {
  let CSS1G = +document.getElementById("CSS1").value;

  let SP1G = +document.getElementById("SP1").value;

  let SP2G = +document.getElementById("SP2").value;

  let CSS2G = +document.getElementById("CSS2").value;

  let PAG = +document.getElementById("PA").value;

  let average = (CSS1G + SP1G + SP2G + CSS2G + PAG) / 5;

  document.getElementById("outputV").innerHTML = average;
}
