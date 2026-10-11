//MATEO GARCIA 46196438,ABRIL SANABRIA 122696/3
//TP FINAL,COM 3
//video  https://youtu.be/h1vJPrlgZSc

let pantalla = 0;

let desayuno = false;
let estudio = false;
let transporte = "";
let llegoTarde = false;
let examenBien = false;

let imagenes = [];
let sonidoDespertador; 
let sonidoDormitorio; 
let sonidoDesayuno; 
let sonidoCamino;
let sonidoTransporte; 
let sonidoFacultadCharla; 
let sonidoAula;
let sonidoExamen; 
let sonidoEntregando; 
let sonidoFinalRegular; 
let sonidoFinalBien; 
let sonidoFinalMal; 

function preload() {
  imagenes[0] = loadImage("assets/despertador.jpg");
  imagenes[1] = loadImage("assets/dormitorio.jpg");
  imagenes[2] = loadImage("assets/desayuno.jpg");
  imagenes[3] = loadImage("assets/camino.jpg");
  imagenes[4] = loadImage("assets/facultad.jpg");
  imagenes[5] = loadImage("assets/aula.jpg");
  imagenes[6] = loadImage("assets/examen.jpg");
  imagenes[7] = loadImage("assets/final_bien.jpg");
  imagenes[8] = loadImage("assets/final_regular.jpg");
  imagenes[9] = loadImage("assets/final_mal.jpg");
  imagenes[10] = loadImage("assets/transporte.jpg");
  imagenes[11] = loadImage("assets/charla.jpg");
  imagenes[12] = loadImage("assets/entregando.jpg");
  imagenes[13] = loadImage("assets/dormir.jpg");

  sonidoDespertador = loadSound("assets/despertador.mp3");
  sonidoDormitorio = loadSound("assets/dormitorio.mp3");
  sonidoDesayuno = loadSound("assets/desayuno.mp3");
  sonidoCamino = loadSound("assets/camino.mp3");
  sonidoTransporte = loadSound("assets/transporte.mp3"); 
  sonidoFacultadCharla = loadSound("assets/facultadcharla.mp3"); 
  sonidoAula = loadSound("assets/aula.mp3");
  sonidoExamen = loadSound("assets/examen.mp3"); 
  sonidoEntregando = loadSound("assets/entregando.mp3"); 
  sonidoFinalRegular = loadSound("assets/final_regular.mp3"); 
  sonidoFinalBien = loadSound("assets/final_bien.mp3"); 
  sonidoFinalMal = loadSound("assets/final_mal.mp3"); 
}

function setup() {
  createCanvas(800, 450);
  textFont("Arial");
  sonidoDespertador.loop();
}

function draw() {
  cursor(ARROW); 
  background(20);
  dibujarPantalla();

  if (pantalla === 16) {
    dibujarCreditos();
  }
}


// DISEÑO Y POSICIONAMIENTO 

function dibujarPantalla() {
  let imgIndex = -1;
  if(pantalla === 0) imgIndex = 0;
  if(pantalla === 1 || pantalla === 5) imgIndex = 1;
  if(pantalla === 2 || pantalla === 3) imgIndex = 2;
  if(pantalla === 4) imgIndex = 13;
  if(pantalla === 6) imgIndex = 3;
  if(pantalla === 7) imgIndex = 10;
  if(pantalla === 8) imgIndex = 4;
  if(pantalla === 9) imgIndex = 11;
  if(pantalla === 10) imgIndex = 5;
  if(pantalla === 11) imgIndex = 6;
  if(pantalla === 12) imgIndex = 12;
  if(pantalla === 13) imgIndex = 7;
  if(pantalla === 14) imgIndex = 8;
  if(pantalla === 15) imgIndex = 9;

  if (imgIndex !== -1 && imagenes[imgIndex]) {
    image(imagenes[imgIndex], 0, 0, width, height);
  }

  switch (pantalla) {
    case 0:
      dibujarTextoCustom("EL DÍA DEL EXAMEN", 40, 40, 32, "#f1f5f9", LEFT);
      dibujarTextoCustom("El despertador suena sin piedad.\nAnoche te quedaste estudiando hasta tarde\ny el cansancio se hace notar. ¿Qué decidís hacer?", 40, 90, 18, "#cbd5e1", LEFT, 380);
      
      dibujarBotonCustom(400, 370, 170, 42, "LEVANTARME");
      dibujarBotonCustom(590, 370, 170, 42, "5 MINUTOS MÁS");
      break;

    case 1:
      dibujarTextoCustom("UNA MAÑANA FRÍA", 40, 40, 32, "#e0f2fe", LEFT);
      dibujarTextoCustom("Te levantaste con el tiempo justo.\nLa panza te ruge, pero el reloj no perdona.\n¿Te preparás algo rápido?", 40, 90, 18, "#f0f9ff", LEFT, 380);
      
      dibujarBotonCustom(400, 370, 170, 42, "DESAYUNAR");
      dibujarBotonCustom(590, 370, 180, 42, "SALTEAR DESAYUNO");
      break;

    case 2:
      dibujarTextoCustom("DESAYUNO EXPRÉS", 40, 40, 32, "#fef3c7", LEFT);
      dibujarTextoCustom("Mientras te tomás un café rápido, mirás de reojo la mochila.\n¿Aprovechás para darle una última mirada a los apuntes?", 40, 90, 18, "#fffbeb", LEFT, 420);
      
      dibujarBotonCustom(400, 370, 170, 42, "REPASAR APUNTES");
      dibujarBotonCustom(590, 370, 170, 42, "SALIR DIRECTO");
      break;

    case 3:
      dibujarTextoCustom("EN AYUNAS", 40, 40, 32, "#fee2e2", LEFT);
      dibujarTextoCustom("Decidís que no hay tiempo para comer.\nAgarrás tus cosas, esperando que el estómago no te traicione en medio del examen.", 40, 90, 18, "#fef2f2", LEFT, 420);
      
      dibujarBotonCustom(550, 370, 200, 42, "SALIR A LA FACULTAD");
      break;

    case 4:
      dibujarTextoCustom("CINCO MINUTITOS MÁS...", 40, 40, 30, "#e9d5ff", LEFT);
      dibujarTextoCustom("Apagás la alarma convenciéndote de que cerrás los ojos solo un segundo.\nTodos sabemos cómo termina esto...", 40, 90, 18, "#f3e8ff", LEFT, 420);
      
      dibujarBotonCustom(530, 370, 220, 42, "DESPERTAR DE GOLPE");
      break;

    case 5:
      dibujarTextoCustom("¡TE QUEDASTE DORMIDO!", 40, 40, 32, "#fca5a5", LEFT);
      dibujarTextoCustom("Abrís los ojos y el pánico te invade.\nMirás la hora y te das cuenta de que estás al límite para llegar.", 40, 90, 18, "#fef2f2", LEFT, 420);
      
      dibujarBotonCustom(380, 370, 180, 42, "IR A LAS CORRIDAS");
      dibujarBotonCustom(580, 370, 180, 42, "DARSE POR VENCIDO");
      break;

    case 6:
      dibujarTextoCustom("HORA DE PARTIR", 40, 40, 32, "#e0e7ff", LEFT);
      dibujarTextoCustom("Con la mochila al hombro y los nervios a flor de piel, salís de tu casa.\nEl aire de la mañana te despabila un poco.", 40, 90, 18, "#f5f3ff", LEFT, 420);
      
      dibujarBotonCustom(540, 370, 210, 42, "TOMAR EL COLECTIVO");
      break;

    case 7:
      dibujarTextoCustom("VIAJE ETERNO", 40, 40, 32, "#dbeafe", LEFT);
      dibujarTextoCustom("El colectivo viene lleno y frena en cada esquina.\nMirás el reloj a cada rato, la ansiedad empieza a subir.", 40, 90, 18, "#eff6ff", LEFT, 420);
      
      dibujarBotonCustom(560, 370, 190, 42, "LLEGAR A LA FACU");
      break;

    case 8:
      dibujarTextoCustom("EN LA PUERTA DEL AULA", 40, 40, 30, "#fef3c7", LEFT);
      dibujarTextoCustom("Llegás a la facultad. Hay un grupo de compañeros repasando nerviosos en el pasillo antes de entrar.", 40, 85, 18, "#fffbeb", LEFT, 420);
      
      dibujarBotonCustom(380, 370, 180, 42, "HABLAR CON ALGUIEN");
      dibujarBotonCustom(580, 370, 180, 42, "ENTRAR DIRECTO");
      break;

    case 9:
      dibujarTextoCustom("CHARLA DE PASILLO", 40, 40, 32, "#e9d5ff", LEFT);
      dibujarTextoCustom("Un compañero te mira con cara de pánico y te dice:\n'No entiendo el último tema. ¿Vos pudiste estudiar?'", 40, 90, 18, "#f3e8ff", LEFT, 420);
      
      dibujarBotonCustom(360, 370, 170, 42, "SÍ, ESTUDIÉ");
      dibujarBotonCustom(550, 370, 210, 42, "ESTOY IGUAL QUE VOS");
      break;

    case 10:
      dibujarTextoCustom("EL MOMENTO DE LA VERDAD", 40, 40, 30, "#f1f5f9", LEFT);
      dibujarTextoCustom("Ya estás en tu asiento. El profesor entra con la pila de hojas.\nEl silencio en el aula es absoluto.", 40, 85, 18, "#f8fafc", LEFT, 450);
      
      dibujarBotonCustom(360, 370, 200, 42, "REPASAR MENTALMENTE");
      dibujarBotonCustom(580, 370, 190, 42, "RESPIRAR Y ESPERAR");
      break;

    case 11:
      dibujarTextoCustom("HOJA EN BLANCO", 40, 40, 32, "#fecdd3", LEFT);
      dibujarTextoCustom("Te entregan el examen. Das vuelta la hoja y la primera pregunta es sobre ese tema que leíste muy por arriba.", 40, 90, 18, "#fff1f2", LEFT, 450);
      
      dibujarBotonCustom(360, 370, 190, 42, "INTENTAR RESOLVERLA");
      dibujarBotonCustom(570, 370, 180, 42, "SALTARLA Y SEGUIR");
      break;

    case 12:
      if (llegoTarde || !estudio) {
        dibujarTextoCustom("EXAMEN ENTREGADO", 40, 40, 30, "#fef3c7", LEFT);
        dibujarTextoCustom("Te levantás y entregás la hoja al profesor.\nSabés en el fondo que dejaste varias preguntas incompletas...", 40, 90, 18, "#fffbeb", LEFT, 450);
      } else {
        dibujarTextoCustom("EXAMEN ENTREGADO", 40, 40, 30, "#dcfce7", LEFT);
        dibujarTextoCustom("Entregás la hoja con confianza.\nPudiste completar todo y sentís que los conceptos fluyeron bastante bien.", 40, 90, 18, "#f0fdf4", LEFT, 450);
      }
      dibujarBotonCustom(570, 370, 180, 42, "VER RESULTADO");
      break;

    case 13:
      fill(0, 170); rect(0, 0, width, height); 
      dibujarTextoCustom("FINAL 1 — TRIUNFO ACADÉMICO", 400, 60, 34, "#86efac", CENTER);
      dibujarTextoCustom("¡Aprobaste con una nota altísima! Todo el esfuerzo y las horas de sueño perdidas valieron la pena.", 100, 130, 20, "#f0fdf4", CENTER, 600);
      dibujarTextoCustom('"Por una vez, todo salió exactamente como esperabas."', 100, 240, 18, "#fef08a", CENTER, 600, ITALIC);
      
      dibujarBotonCustom(190, 350, 190, 45, "VOLVER AL INICIO");
      dibujarBotonCustom(420, 350, 190, 45, "VER CRÉDITOS");
      break;

    case 14:
      fill(0, 170); rect(0, 0, width, height);
      dibujarTextoCustom("FINAL 2 — SUPERVIVENCIA", 400, 60, 34, "#fde047", CENTER);
      dibujarTextoCustom("Aprobaste con lo justo. Raspando. Fue un sufrimiento y un estrés total, pero la materia ya está adentro.", 100, 130, 20, "#fefef9", CENTER, 600);
      dibujarTextoCustom('"Perdiste años de vida, pero podés respirar."', 100, 240, 18, "#fef08a", CENTER, 600, ITALIC);
      
      dibujarBotonCustom(190, 350, 190, 45, "VOLVER AL INICIO");
      dibujarBotonCustom(420, 350, 190, 45, "VER CRÉDITOS");
      break;

    case 15:
      fill(0, 170); rect(0, 0, width, height);
      dibujarTextoCustom("FINAL 3 — DERROTA", 400, 60, 34, "#fca5a5", CENTER);
      dibujarTextoCustom("O te quedaste dormido o el examen fue un desastre total. Un golpe duro, pero la vida universitaria es así.", 100, 130, 20, "#fef2f2", CENTER, 600);
      dibujarTextoCustom('"A preparar el recuperatorio. No bajes los brazos."', 100, 240, 18, "#fef08a", CENTER, 600, ITALIC);
      
      dibujarBotonCustom(190, 350, 190, 45, "VOLVER AL INICIO");
      dibujarBotonCustom(420, 350, 190, 45, "VER CRÉDITOS");
      break;
  }
}

function dibujarCreditos() {
  fill(0, 210);
  rect(0, 0, width, height);

  dibujarTextoCustom("CRÉDITOS", 400, 60, 36, "#ffffff", CENTER);
  dibujarTextoCustom("Mateo García, Abril Sanabria", 400, 140, 22, "#ffffff", CENTER);
  dibujarTextoCustom("Programación para Medios Interactivos", 400, 180, 18, "#93c5fd", CENTER);
  dibujarTextoCustom("Aventura gráfica interactiva", 400, 220, 16, "#cbd5e1", CENTER);

  let movimiento = sin(frameCount * 0.05) * 15;
  dibujarTextoCustom("★", 400, 270 + movimiento, 36, "#fde047", CENTER);

  dibujarBotonCustom(290, 350, 220, 45, "VOLVER AL INICIO");
}

//  sombras 
function dibujarTextoCustom(txt, x, y, tamano, colorHex, alinear, anchoMax, estilo) {
  push();
  drawingContext.shadowOffsetX = 2;
  drawingContext.shadowOffsetY = 2;
  drawingContext.shadowBlur = 5;
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0.85)';
  
  fill(colorHex);
  textSize(tamano);
  textAlign(alinear || LEFT, TOP);
  textStyle(estilo || BOLD);
  
  if (anchoMax) {
    text(txt, x, y, anchoMax);
  } else {
    text(txt, x, y);
  }
  pop();
}

//  botones 
function dibujarBotonCustom(x, y, ancho, alto, textoBoton) {
  push();
  drawingContext.shadowOffsetX = 2;
  drawingContext.shadowOffsetY = 3;
  drawingContext.shadowBlur = 6;
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0.6)';

  if (mouseDentro(x, y, ancho, alto)) {
    fill(224, 242, 254);
    cursor(HAND);
  } else {
    fill(255);
  }
  noStroke();
  rect(x, y, ancho, alto, 10); 
  
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;

  fill(15, 23, 42);
  textAlign(CENTER, CENTER);
  textSize(14);
  textStyle(BOLD);
  text(textoBoton, x + ancho / 2, y + alto / 2);
  pop();
}


//  CLICKS

function mousePressed() {
  userStartAudio();

  if (pantalla === 0) {
    if (mouseDentro(400, 370, 170, 42)) { // LEVANTARME
      sonidoDespertador.stop(); 
      sonidoDormitorio.loop(); 
      pantalla = 1;
    } else if (mouseDentro(590, 370, 170, 42)) { // 5 MINUTOS MÁS
      sonidoDespertador.stop(); 
      sonidoDespertador.play(); 
      pantalla = 4;
    }
  }
  else if (pantalla === 1) {
    if (mouseDentro(400, 370, 170, 42)) { // DESAYUNAR
      desayuno = true;
      sonidoDormitorio.stop(); 
      sonidoDesayuno.play(); 
      pantalla = 2;
    } else if (mouseDentro(590, 370, 180, 42)) { // SALTEAR DESAYUNO
      desayuno = false;
      sonidoDormitorio.stop(); 
      sonidoDesayuno.play(); 
      pantalla = 3;
    }
  }
  else if (pantalla === 2) {
    if (mouseDentro(400, 370, 170, 42)) { // REPASAR APUNTES
      estudio = true;
      sonidoDesayuno.stop(); 
      sonidoCamino.loop(); 
      pantalla = 6;
    } else if (mouseDentro(590, 370, 170, 42)) { // SALIR DIRECTO
      estudio = false;
      sonidoDesayuno.stop(); 
      sonidoCamino.loop(); 
      pantalla = 6;
    }
  }
  else if (pantalla === 3) {
    if (mouseDentro(550, 370, 200, 42)) { // SALIR A LA FACULTAD
      sonidoDesayuno.stop(); 
      sonidoCamino.loop(); 
      pantalla = 6;
    }
  }
  else if (pantalla === 4) {
    if (mouseDentro(530, 370, 220, 42)) { // DESPERTAR DE GOLPE
      sonidoDespertador.stop(); 
      sonidoDormitorio.loop();  
      pantalla = 5;
      llegoTarde = true;
    }
  }
  else if (pantalla === 5) {
    if (mouseDentro(380, 370, 180, 42)) { // IR IGUAL
      sonidoDormitorio.stop(); 
      sonidoCamino.loop(); 
      pantalla = 6;
    } else if (mouseDentro(580, 370, 180, 42)) { // DARSE POR VENCIDO
      sonidoDormitorio.stop(); 
      sonidoFinalMal.play(); 
      pantalla = 15;
    }
  }
  else if (pantalla === 6) {
    if (mouseDentro(540, 370, 210, 42)) { // TOMAR EL MICRO
      transporte = "colectivo";
      sonidoCamino.stop(); 
      sonidoTransporte.loop(); 
      pantalla = 7;
    }
  }
  else if (pantalla === 7) {
    if (mouseDentro(560, 370, 190, 42)) { // LLEGAR A LA FACU
      sonidoTransporte.stop(); 
      sonidoFacultadCharla.loop(); 
      pantalla = 8;
    }
  }
  else if (pantalla === 8) {
    if (mouseDentro(380, 370, 180, 42)) { // HABLAR CON ALGUIEN
      pantalla = 9; 
    } else if (mouseDentro(580, 370, 180, 42)) { // ENTRAR DIRECTO
      sonidoFacultadCharla.stop(); 
      sonidoAula.play(); 
      pantalla = 10;
    }
  }
  else if (pantalla === 9) {
    if (mouseDentro(360, 370, 170, 42) || mouseDentro(550, 370, 210, 42)) {
      sonidoFacultadCharla.stop(); 
      sonidoAula.play(); 
      pantalla = 10;
    }
  }
  else if (pantalla === 10) {
    if (mouseDentro(360, 370, 200, 42) || mouseDentro(580, 370, 190, 42)) {
      sonidoAula.stop(); 
      sonidoExamen.loop(); 
      pantalla = 11;
    }
  }
  else if (pantalla === 11) {
    if (mouseDentro(360, 370, 190, 42)) { // INTENTAR RESOLVERLA
      examenBien = true;
    } else if (mouseDentro(570, 370, 180, 42)) { // SALTARLA Y SEGUIR
      examenBien = false;
    }
    sonidoExamen.stop(); 
    sonidoEntregando.loop();
    pantalla = 12;
  }
  else if (pantalla === 12) {
    if (mouseDentro(570, 370, 180, 42)) { // VER RESULTADO
      sonidoEntregando.stop(); 

      if (estudio && !llegoTarde && examenBien) {
        sonidoFinalBien.play(); 
        pantalla = 13;
      } else {
        sonidoFinalRegular.play(); 
        pantalla = 14; 
      }
    }
  }
  else if (pantalla === 13 || pantalla === 14 || pantalla === 15) {
    if (mouseDentro(190, 350, 190, 45)) { // VOLVER AL INICIO
      sonidoFinalRegular.stop(); 
      sonidoFinalBien.stop(); 
      sonidoFinalMal.stop(); 
      reiniciarJuego(); 
    } else if (mouseDentro(420, 350, 190, 45)) { // VER CRÉDITOS
      sonidoFinalRegular.stop(); 
      sonidoFinalBien.stop(); 
      sonidoFinalMal.stop(); 
      pantalla = 16;
    }
  }
  else if (pantalla === 16) {
    if (mouseDentro(290, 350, 220, 45)) {
      reiniciarJuego();
    }
  }
}

function mouseDentro(x, y, ancho, alto) {
  return (
    mouseX > x &&
    mouseX < x + ancho &&
    mouseY > y &&
    mouseY < y + alto
  );
}

function reiniciarJuego() {
  pantalla = 0;
  desayuno = false;
  estudio = false;
  transporte = "";
  llegoTarde = false;
  examenBien = false;

  sonidoDormitorio.stop();
  sonidoDesayuno.stop();
  sonidoCamino.stop();
  sonidoTransporte.stop(); 
  sonidoFacultadCharla.stop(); 
  sonidoAula.stop();
  sonidoExamen.stop(); 
  sonidoEntregando.stop(); 
  sonidoFinalRegular.stop(); 
  sonidoFinalBien.stop(); 
  sonidoFinalMal.stop(); 

  sonidoDespertador.loop();
}
