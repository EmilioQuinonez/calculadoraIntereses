window.onload = function () {
  let interestType = document.getElementById("interestType");
  let compoundInput = document.getElementById("compound");
  interestType.addEventListener("change", function () {
    compoundInput.disabled = this.value !== "compuesto";
  });
  compoundInput.disabled = interestType.value !== "compuesto";
};

function calcularInteres() {
  let P = parseFloat(document.getElementById("principal").value);
  let r = parseFloat(document.getElementById("rate").value) / 100;
  let t = parseFloat(document.getElementById("time").value);
  let tipo = document.getElementById("interestType").value;
  let A = 0;

  if (tipo === "simple") {
    A = P * (1 + r * t);
  } else if (tipo === "compuesto") {
    let n = parseFloat(document.getElementById("compound").value) || 1;
    A = P * Math.pow(1 + r / n, n * t);
  } else if (tipo === "vacio") {
    alert("Debes seleccionar un tipo de interes.");
  } else {
  }
  document.getElementById("resultado").innerText = A.toFixed(2);
}
