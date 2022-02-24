const drums = document.getElementById("drums");
const main = document.getElementById("main");
//var menor = [];
var perSer = null; //array con preguntas del personaje seleccionado

const formatQuestion = `<h1 id="Dquestion"></h1> <br> <div id="Dcanvas"> </div> <br> <button id="Dopcion1" onclick="pregStart()"></button> <button id="Dopcion2" onclick="pregStart()"></button> <button id="Dopcion3" onclick="pregStart()"></button>`;
const formatPersonSelecction = `<h1>¿Qué personaje quieres?</h1> <br> <img src="https://th.bing.com/th/id/OIP._WJfWunsZBFM8HemZ828XAAAAA?pid=ImgDet&rs=1" alt="incognit image" width="20%vW"> <table> <tr> <th onclick="asigPer('menor')">Employee</th> <th onclick="asigPer('oth')">Something else</th> </tr> <tr> <td onclick="asigPer('menor')">SVG img emp</td> <td onclick="asigPer('oth')">SVG img otro</td> </tr> </table>`;
const formatExtraButton = `?`;

/*function question(pregunta, opcion1, opcion2, opcion3, estilos, imagenSVG) {
  this.quest = pregunta;
  this.opt1 = opcion1;
  this.opt2 = opcion2;
  this.opt3 = opcion3;
  this.sty = estilos; //ejecutado con eval("");
  this.imgSVG = imagenSVG;
};*/

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

/*///////////////////////Creamos todas las preguntas.
menor[1] = new question("¿Cuál es la ley suprema de la nación?", "La constitución", "El código civil", "La reforma", "background: blue", `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none"><g id="Frame 3" clip-path="url(#clip0_6_22)"><rect width="200" height="200" fill="white"/><ellipse id="Ellipse 6" cx="100" cy="92" rx="35" ry="41" fill="#E3CECE"/><path id="Polygon 2" d="M92.4663 26.3843C95.3437 23.4881 99.9403 23.2232 103.131 25.7697L149.06 62.4211C154.796 66.9985 151.857 76.2387 144.531 76.6609L57.1869 81.6941C49.8604 82.1163 45.8791 73.2749 51.0515 68.0688L92.4663 26.3843Z" fill="#B1A251"/><g id="Star 1" filter="url(#filter0_f_6_22)"><path d="M100 40L104.939 53.1287H120.923L107.992 61.2426L112.931 74.3713L100 66.2574L87.0687 74.3713L92.008 61.2426L79.0768 53.1287H95.0607L100 40Z" fill="#FF2F2F"/></g><path id="Ellipse 7" d="M162 205.5C162 195.979 160.396 186.552 157.281 177.755C154.165 168.959 149.598 160.967 143.841 154.235C138.083 147.503 131.249 142.162 123.726 138.519C116.204 134.875 108.142 133 100 133C91.858 133 83.7958 134.875 76.2736 138.519C68.7514 142.162 61.9166 147.503 56.1594 154.235C50.4021 160.967 45.8353 168.959 42.7195 177.755C39.6037 186.552 38 195.979 38 205.5L100 205.5H162Z" fill="#D83131"/></g><defs><filter id="filter0_f_6_22" x="75.0768" y="36" width="49.8465" height="42.3713" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_6_22"/></filter><clipPath id="clip0_6_22"><rect width="200" height="200" fill="white"/></clipPath></defs></svg>`);
menor[2] = new question("¿Cuáles son las 3R?", "Reducir, Reciclar y Reutilizar", "Responsabilidad, Reciclar y Reutilizar", "Remplazar, Retirar y Renovar", "", "hi");
menor[3] = new question("¿El cambio climático me afecta como individuo?", "Si", "No", "Soy inmune", "", "hi2");
menor[4] = new question("¿Yo puedo ayudar a contrarrestar los efectos del cambio climático?", "Si", "No", "No me interesa, gracias", "", "hi3");
//////////////////////////////////Terminamos de crear todas las preguntas*/
