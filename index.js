const drums = document.getElementById("drums");
const main = document.getElementById("main");
var perSer = null; //array con preguntas del personaje seleccionado Sirve?
var enConf = false; //Si config está abierto

const formatQuestion = `<h1 id="Dquestion"></h1> <br> <div id="Countdown"></div> <br> <div id="dSVD"> </div> <br> <button id="Dopcion1" onclick="pregStart()"></button> <button id="Dopcion2" onclick="pregStart()"></button> <button id="Dopcion3" onclick="pregStart()"></button>`;

const formatPersonSelecction = `<h1>¿Qué personaje quieres?</h1> <br> <img src="https://th.bing.com/th/id/OIP._WJfWunsZBFM8HemZ828XAAAAA?pid=ImgDet&rs=1" alt="incognit image" width="20%vW"> <br><div class="tablaP" onclick="asigPer('menor')">Menor de edad<br>${menor[0]}</div><div class="tablaP" onclick="asigPer('universitario')">Universitario<br>${universitario[0]}</div><div class="tablaP" onclick="asigPer('gobernante')">Gobernante<br>${gobernante[0]}</div><div class="tablaP" onclick="asigPer('trabajador')">Empleado<br>${trabajador[0]}</div><div class="tablaP" onclick="asigPer('empresario')">Empresario<br>${empresario[0]}</div><div class="tablaP" onclick="asigPer('educador')">Educador<br>${educador[0]}</div>`;

function iniJue() { //Activado con botón inicial
  drums.play();
  // drums.pause();
  //drums.load();
  document.getElementById("optB").style.display = "initial";
  main.innerHTML = formatPersonSelecction;
}
function asigPer(perSelected){ //Activado con opciones de personajes
  try{
    if(perSer==null){ //raro, porque asumimos que hay datos de todo
      //Sólo agrega los personajes al optCp si es la primera vez, o sea que no se ha seleccionado ningún personaje antes
      document.getElementById("optCp").innerHTML = `<details> <summary><h3>Cambio de personaje:</h3></summary> <div class="tablaP" onclick="asigPer('menor')">Menor de edad <br>${menor[0]} </div> <div class="tablaP" onclick="asigPer('universitario')">Universitario <br>${universitario[0]} </div> <div class="tablaP" onclick="asigPer('gobernante')">Gobernante <br>${gobernante[0]} </div> <div class="tablaP" onclick="asigPer('trabajador')">Empleado <br>${trabajador[0]} </div> <div class="tablaP" onclick="asigPer('empresario')">Empresario <br>${empresario[0]} </div> <div class="tablaP" onclick="asigPer('educador')">Educador <br>${educador[0]} </div></details>`;
      //Esta parte agrega la lista de personajes a la parte del engranaje
      //Sólo evita que haya dos lugares donde cambiar de personaje
    }
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
  
  if(enConf){
    document.getElementById("optC").style.display = "none";
    //drums.play(); //What! the music is ended anyways.
    enConf = false;
  }

  main.innerHTML = formatQuestion;
  drums.pause(); //Preguntar si la música se queda para siempre
  pregStart();
  return;
}

function pregStart(){
  //requiere main.innerHTML = formatQuestion; // to be displayed
  let pregunta = document.getElementById("Dquestion");
  let Countdown = document.getElementById("Countdown");
  let imagenSVG = document.getElementById("dSVD");
  let opcion1 = document.getElementById("Dopcion1");
  let opcion2 = document.getElementById("Dopcion2");
  let opcion3 = document.getElementById("Dopcion3");

  // la longitud se le resta 1, se vuelve el index máximo. 
  // al random-earlo y sacar el cielo, se obtiene rango
  // [1-index máximo]
  let ale = Math.ceil(Math.random() * (perSer.length - 1));
  
  pregunta.innerText = perSer[ale].quest;
  Countdown.innerHTML = `<video id="10_s_countDown" src="./10_s_countDown.mp4" width="150" playsinline></video>`;
  let s10_countDown = document.getElementById("10_s_countDown");
  s10_countDown.play();
  s10_countDown.onended = () => {
    alert("Se acabo el tiempo :(");
    pregStart();
  };
  imagenSVG.innerHTML = perSer[ale].imgSVG;
  opcion1.innerText = perSer[ale].opt1;
  opcion2.innerText = perSer[ale].opt2;
  opcion3.innerText = perSer[ale].opt3;
}


document.getElementById("optB").addEventListener("click", ()=>{
  let s10_countDown = document.getElementById("10_s_countDown"); //Repetida de pregStart()
  if(!enConf){ //abrir
    //Agregar estilo para resaltar engranaje
    if(perSer!=null) s10_countDown.pause();
    document.getElementById("optC").style.display = "initial";
    drums.play();
    enConf = true;
  }else{//cerrar
    //Quitar estilo de engranaje que lo resaltaba
    if(perSer!=null) s10_countDown.play();
    document.getElementById("optC").style.display = "none";
    if(perSer) drums.pause();
    enConf = false;
    //Lo mismo debe pasar si se selecciona un personaje
  }
  //Muchos de estos cambios se van a aplicar también en la sección más arriba, donde se selecciona un personaje.
});
