const drums = document.getElementById("drums");
const main = document.getElementById("main");
var perSer = null; //array con preguntas del personaje seleccionado

const formatQuestion = `<h1 id="Dquestion"></h1> <br> <div id="Dcanvas"> </div> <br> <button id="Dopcion1" onclick="pregStart()"></button> <button id="Dopcion2" onclick="pregStart()"></button> <button id="Dopcion3" onclick="pregStart()"></button>`;

const formatPersonSelecction = `<h1>¿Qué personaje quieres?</h1> <br> <img src="https://th.bing.com/th/id/OIP._WJfWunsZBFM8HemZ828XAAAAA?pid=ImgDet&rs=1" alt="incognit image" width="20%vW"> <br><div class="tablaP" onclick="asigPer('menor')">Menor de edad<br>${menor[0]}</div><div class="tablaP" onclick="asigPer('universitario')">Universitario<br>${universitario[0]}</div><div class="tablaP" onclick="asigPer('gobernante')">Gobernante<br>${gobernante[0]}</div><div class="tablaP" onclick="asigPer('trabajador')">Empleado<br>${trabajador[0]}</div><div class="tablaP" onclick="asigPer('empresario')">Empresario<br>${empresario[0]}</div><div class="tablaP" onclick="asigPer('educador')">Educador<br>${educador[0]}</div>`;

const formatExtraButton = `?`;

function iniJue() { //Activado con botón inicial
  drums.play();
  // drums.pause();
  //drums.load();
  main.innerHTML = formatPersonSelecction;
}
function asigPer(perSelected){ //Activado con opciones de personajes
  try{
    switch(perSelected){
      case 'menor': perSer = menor; break;
      case 'universitario': perSer = universitario; break;
      case 'gobernante': perSer = gobernante; break;
      case 'trabajador': perSer = trabajador; break;
      case 'empresario': perSer = empresario; break;
      case 'educador': perSer = educador; break;
      default: 
        alert("Hay error al seleccionar personaje");
        return;
      break;
    }
  }catch(e){
    console.log(e);
    alert("No hay datos para algunos personajes");
    return;
  }
  if(perSer.length<=1){
    //Está registrado, pero no hay preguntas
    alert("No hay preguntas para el personaje");
    return;
  }
  //Quizá al tener datos correctos en todos los campos, saquemos de ahí sólo el switch, el resto ya no será necesario
  main.innerHTML = formatQuestion;
  pregStart();
  return;
}

function pregStart(){
  //requiere main.innerHTML = formatQuestion; // to be displayed
  let pregunta = document.getElementById("Dquestion");
  let imagenSVG = document.getElementById("Dcanvas");
  let opcion1 = document.getElementById("Dopcion1");
  let opcion2 = document.getElementById("Dopcion2");
  let opcion3 = document.getElementById("Dopcion3");

  // la longitud se le resta 1, se vuelve el index máximo. 
  // al random-earlo y sacar el cielo, se obtiene rango
  // [1-index máximo]
  let ale = Math.ceil(Math.random() * (perSer.length - 1));
  
  pregunta.innerText = perSer[ale].quest;
  imagenSVG.innerHTML = perSer[ale].imgSVG;
  opcion1.innerText = perSer[ale].opt1;
  opcion2.innerText = perSer[ale].opt2;
  opcion3.innerText = perSer[ale].opt3;
}
