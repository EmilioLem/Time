const drums = document.getElementById("drums");
    let main = document.getElementById("main");

    const formatQuestion = `<h1 id="Dquestion"></h1> <br> <div id="Dcanvas"></div> <br> <button id="Dopcion1"></button> <button id="Dopcion2"></button> <button id="Dopcion3"></button>`;

    function question(pregunta, opcion1, opcion2, opcion3, estilos, imagenSVG) {
      this.quest = pregunta;
      this.opt1 = opcion1;
      this.opt2 = opcion2;
      this.opt3 = opcion3;
      this.sty = estilos; //ejecutado con eval("");
      this.imgSVG = imagenSVG;
    };
    let prue1 = new question("¿Eres menor de edad?", "si", "no", "no sé", "background: blue", `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none"><g id="Frame 3" clip-path="url(#clip0_6_22)"><rect width="200" height="200" fill="white"/><ellipse id="Ellipse 6" cx="100" cy="92" rx="35" ry="41" fill="#E3CECE"/><path id="Polygon 2" d="M92.4663 26.3843C95.3437 23.4881 99.9403 23.2232 103.131 25.7697L149.06 62.4211C154.796 66.9985 151.857 76.2387 144.531 76.6609L57.1869 81.6941C49.8604 82.1163 45.8791 73.2749 51.0515 68.0688L92.4663 26.3843Z" fill="#B1A251"/><g id="Star 1" filter="url(#filter0_f_6_22)"><path d="M100 40L104.939 53.1287H120.923L107.992 61.2426L112.931 74.3713L100 66.2574L87.0687 74.3713L92.008 61.2426L79.0768 53.1287H95.0607L100 40Z" fill="#FF2F2F"/></g><path id="Ellipse 7" d="M162 205.5C162 195.979 160.396 186.552 157.281 177.755C154.165 168.959 149.598 160.967 143.841 154.235C138.083 147.503 131.249 142.162 123.726 138.519C116.204 134.875 108.142 133 100 133C91.858 133 83.7958 134.875 76.2736 138.519C68.7514 142.162 61.9166 147.503 56.1594 154.235C50.4021 160.967 45.8353 168.959 42.7195 177.755C39.6037 186.552 38 195.979 38 205.5L100 205.5H162Z" fill="#D83131"/></g><defs><filter id="filter0_f_6_22" x="75.0768" y="36" width="49.8465" height="42.3713" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_6_22"/></filter><clipPath id="clip0_6_22"><rect width="200" height="200" fill="white"/></clipPath></defs></svg>`);


    function iniJue() {
      drums.play();
      // drums.pause();
      //drums.load();
      main.innerHTML = formatQuestion; //carga formato de pregunta
      document.getElementById("Dquestion").innerText = prue1.quest;
      document.getElementById("Dcanvas").innerHTML = prue1.imgSVG;
      document.getElementById("Dopcion1").innerText = prue1.opt1;
      document.getElementById("Dopcion2").innerText = prue1.opt2;
      document.getElementById("Dopcion3").innerText = prue1.opt3;
    }