// circulo

function area() {
  const raio = Number(document.getElementById("raioA").value);
  const resultado = Math.PI * raio ** 2;

  document.getElementById("tipoResultado").textContent = "Área do Círculo";
  document.getElementById("valorResultado").textContent = resultado.toFixed(2);
}

function circunferencia() {
  const raio = Number(document.getElementById("raioC").value);
  const resultado = 2 * Math.PI * raio;

  document.getElementById("tipoResultado").textContent =
    "Circunferência do Círculo";
  document.getElementById("valorResultado").textContent = resultado.toFixed(2);
}

// cubo

function areaFace() {
  let valoraF = Number(document.getElementById("arestaA").value);
  let area_da_face = valoraF ** 2;

  document.getElementById("tipoResultado").textContent = "Área da Face do Cubo";
  document.getElementById("valorResultado").textContent =
    area_da_face.toFixed(2);
}

function volume() {
  let valorV = Number(document.getElementById("arestaV").value);
  let volume = valorV ** 3;

  document.getElementById("tipoResultado").textContent = "Volume do Cubo";
  document.getElementById("valorResultado").textContent = volume.toFixed(2);
}

function areaTotal() {
  let valorAT = Number(document.getElementById("arestaAT").value);
  let Area_Total = 6 * valorAT ** 2;

  document.getElementById("tipoResultado").textContent = "Área Total do Cubo";
  document.getElementById("valorResultado").textContent = Area_Total.toFixed(2);
}

// retângulo

function areaRetangulo() {
  let base = Number(document.getElementById("areaRB").value);
  let altura = Number(document.getElementById("areaRH").value);
  let area_retangulo = base * altura;

  document.getElementById("tipoResultado").textContent = "Área do Retângulo";
  document.getElementById("valorResultado").textContent =
    area_retangulo.toFixed(2);
}

function perimetro() {
  let base = Number(document.getElementById("perimetroB").value);
  let altura = Number(document.getElementById("perimetroH").value);
  let perimetro_retangulo = (base + altura) * 2;

  document.getElementById("tipoResultado").textContent =
    "Perímetro do Retângulo";
  document.getElementById("valorResultado").textContent =
    perimetro_retangulo.toFixed(2);
}

function diagonal() {
  let base = Number(document.getElementById("diagonalB").value);
  let altura = Number(document.getElementById("diagonalH").value);
  let diagonal_retangulo = Math.sqrt(base ** 2 + altura ** 2);

  document.getElementById("tipoResultado").textContent =
    "Diagonal do Retângulo";
  document.getElementById("valorResultado").textContent =
    diagonal_retangulo.toFixed(2);
}

// rombroedo

function VolumeRombroedo() {
  let diagonalMaior = Number(document.getElementById("DMaior").value);
  let diagonalMenor = Number(document.getElementById("dMenor").value);
  let h = Number(document.getElementById("alturaV").value);

  let volume_rombroedo = ((diagonalMaior * diagonalMenor) / 2) * h;

  document.getElementById("tipoResultado").textContent = "Volume do Romboedro";
  document.getElementById("valorResultado").textContent =
    volume_rombroedo.toFixed(2);
}

function areaDaBase() {
  let diagonalMaior = Number(document.getElementById("DMaiorB").value);
  let diagonalMenor = Number(document.getElementById("dMenorB").value);

  let AB_rombroedo = (diagonalMaior * diagonalMenor) / 2;

  document.getElementById("tipoResultado").textContent =
    "Área da Base do Romboedro";
  document.getElementById("valorResultado").textContent =
    AB_rombroedo.toFixed(2);
}

function areaTotalR() {
  let AreaBase = Number(document.getElementById("AB").value);
  let AreaLateral = Number(document.getElementById("Al").value);

  let AT_rombroedo = 2 * AreaBase + AreaLateral;

  document.getElementById("tipoResultado").textContent =
    "Área Total do Romboedro";
  document.getElementById("valorResultado").textContent =
    AT_rombroedo.toFixed(2);
}

// Trapézio Irregular

function areaTrapezio() {
  let bMaior = Number(document.getElementById("basemaior").value);
  let bMenor = Number(document.getElementById("basemenor").value);
  let altura = Number(document.getElementById("alturaTI").value);

  let AT_trapezioI = ((bMaior + bMenor) * altura) / 2;

  document.getElementById("tipoResultado").textContent = "Área do Trapézio";
  document.getElementById("valorResultado").textContent =
    AT_trapezioI.toFixed(2);
}

function PerimetroTrapezio() {
  let bMaior = Number(document.getElementById("basemaiorP").value);
  let bMenor = Number(document.getElementById("basemenorP").value);
  let ladoEsquerdo = Number(document.getElementById("ladoesquerdo").value);
  let LadoDireito = Number(document.getElementById("ladodireito").value);

  let P_Trapezio = bMaior + bMenor + ladoEsquerdo + LadoDireito;

  document.getElementById("tipoResultado").textContent =
    "Perímetro do Trapézio";
  document.getElementById("valorResultado").textContent = P_Trapezio.toFixed(2);
}

function MediaTrapezio() {
  let bMaior = Number(document.getElementById("basemaiorM").value);
  let bMenor = Number(document.getElementById("basemenorM").value);

  let M_trapezioI = (bMaior + bMenor) / 2;

  document.getElementById("tipoResultado").textContent =
    "Média das Bases do Trapézio";
  document.getElementById("valorResultado").textContent =
    M_trapezioI.toFixed(2);
}

// Polígono Regular com N Lados

function areaPoligono() {
  let perimetro = Number(document.getElementById("perimetroP").value);
  let apotema = Number(document.getElementById("apotemaP").value);

  let A_poligono = (perimetro * apotema) / 2;

  document.getElementById("tipoResultado").textContent = "Área do Polígono";
  document.getElementById("valorResultado").textContent = A_poligono.toFixed(2);
}

function PerimetroPoligono() {
  let numeroDL = Number(document.getElementById("NDLP").value);
  let comprimentoDL = Number(document.getElementById("CDLP").value);

  let P_poligono = numeroDL * comprimentoDL;

  document.getElementById("tipoResultado").textContent =
    "Perímetro do Polígono";
  document.getElementById("valorResultado").textContent = P_poligono.toFixed(2);
}

function SomadosangulosI() {
  let Soma = Number(document.getElementById("SAIN").value);

  let S_poligono = (Soma - 2) * 180;

  document.getElementById("tipoResultado").textContent =
    "Soma dos Ângulos Internos";
  document.getElementById("valorResultado").textContent = S_poligono.toFixed(2);
}

function valordecadaAI() {
  let valor = Number(document.getElementById("VAIN").value);

  let V_poligono = ((valor - 2) * 180) / valor;

  document.getElementById("tipoResultado").textContent =
    "Valor de Cada Ângulo Interno";
  document.getElementById("valorResultado").textContent = V_poligono.toFixed(2);
}

// quadrado

function areaQuadrado() {
  let lado = Number(document.getElementById("ladoArea").value);
  let resultado = lado ** 2;

  document.getElementById("tipoResultado").textContent = "Área do Quadrado";
  document.getElementById("valorResultado").textContent = resultado.toFixed(2);
}

function perimetroQuadrado() {
  let lado = Number(document.getElementById("ladoPerimetro").value);
  let resultado = 4 * lado;

  document.getElementById("tipoResultado").textContent =
    "Perímetro do Quadrado";
  document.getElementById("valorResultado").textContent = resultado.toFixed(2);
}

function diagonalQuadrado() {
  let lado = Number(document.getElementById("ladoDiagonal").value);
  let resultado = lado * Math.sqrt(2);

  document.getElementById("tipoResultado").textContent = "Diagonal do Quadrado";
  document.getElementById("valorResultado").textContent = resultado.toFixed(2);
}

function areaDiagonalQuadrado() {
  let lado = Number(document.getElementById("ladoAreaDiagonal").value);
  let resultado = 2 * lado ** 2;

  document.getElementById("tipoResultado").textContent =
    "Diagonal² do Quadrado";
  document.getElementById("valorResultado").textContent = resultado.toFixed(2);
}

// cuboíde

function volumeCuboide() {
  let comprimento = Number(document.getElementById("compV").value);
  let largura = Number(document.getElementById("largV").value);
  let altura = Number(document.getElementById("altV").value);

  let volume = comprimento * largura * altura;

  document.getElementById("tipoResultado").textContent = "Volume do Cuboide";
  document.getElementById("valorResultado").textContent = volume.toFixed(2);
}

function areaTotalCuboide() {
  let comprimento = Number(document.getElementById("compAT").value);
  let largura = Number(document.getElementById("largAT").value);
  let altura = Number(document.getElementById("altAT").value);

  let areaTotal =
    2 * (comprimento * largura + comprimento * altura + largura * altura);

  document.getElementById("tipoResultado").textContent =
    "Área Total do Cuboide";
  document.getElementById("valorResultado").textContent = areaTotal.toFixed(2);
}

function diagonalCuboide() {
  let comprimento = Number(document.getElementById("compD").value);
  let largura = Number(document.getElementById("largD").value);
  let altura = Number(document.getElementById("altD").value);

  let diagonal = Math.sqrt(comprimento ** 2 + largura ** 2 + altura ** 2);

  document.getElementById("tipoResultado").textContent =
    "Diagonal Espacial do Cuboide";
  document.getElementById("valorResultado").textContent = diagonal.toFixed(2);
}

function areaBaseCuboide() {
  let comprimento = Number(document.getElementById("compB").value);
  let largura = Number(document.getElementById("largB").value);

  let areaBase = comprimento * largura;

  document.getElementById("tipoResultado").textContent =
    "Área da Base do Cuboide";
  document.getElementById("valorResultado").textContent = areaBase.toFixed(2);
}
