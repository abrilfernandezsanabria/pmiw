//TP1 animacion en sprites
//comision 3 TT
//FERNANDEZ Sanabia Abril Eugenia
//Legajo: 122696/3



//aca guardo las imagenes que voy a usar de fondo y el spritesheet
let imgFondo;
let imgSpritesheet;

//lista vacias donde voy a guardar los fotogramas ya recortados de cada animacion
let animReposo = [];
let animSalto = [];
let animLengua = [];

//medida que tiene cada cuadradito dentro del spritesheet
let anchoFrame = 64;
let altoFrame = 64;

//variable para agrandar a la rana y que no quede tan chiquita en la pantalla
let escala = 2.8;

//posiciones X e Y de los tres nenufares donde va a ir cayendo la rana
let hojasX = [90, 330, 540];
let hojasY = [310, 230, 150];

//variables para controlar en que hoja esta parada, su posicion actual y hacia donde mira
let hojaActual = 0;
let posX = 90;
let posY = 310;
let mirandoDerecha = true;

//velocidad a la que se mueve en el aire
let velocidadSalto = 8;

//mi maquina de estados y la velocidad a la que cambia el dibujo de reposo
let estado = 'REPOSO';
let velocidadAnimacion = 10;

//Contadores simples que van sumando de a 1 para manejar los tiempos de espera
let contadorLengua = 0;
let contadorPausa = 0;

//en preload cargo los archivos antes de que arranque
function preload() {
  imgFondo = loadImage('fondo.png');
  imgSpritesheet = loadImage('ranitaa.png');
}

function setup() {
  createCanvas(800, 600);

  //aca uso mi funcion propia que tiene un for para recortar y llenar los arrays
  animReposo = recortarFila(0, 9);
  animSalto = recortarFila(1, 9);

  //arme la animacion de la lengua eligiendo a mano los cuadros de la primera fila
  animLengua = [
    animReposo[0],
    animReposo[2],
    animReposo[3],
    animReposo[4],
    animReposo[5],
    animReposo[0]
  ];
}

function draw() {
  //dibujo el fondo en cada vuelta ocupando todo el lienzo
  image(imgFondo, 0, 0, 800, 600);

  //maquina de estaado(use if y else if para separar cada accion)

  //la rana se queda respirando en el nenufar y salta sola a la siguiente hoja
  if (estado === 'REPOSO') {
    posX = hojasX[hojaActual];
    posY = hojasY[hojaActual];

    let frameActual = calcularFrame(2, velocidadAnimacion);
    dibujarPersonaje(animReposo[frameActual], posX, posY, mirandoDerecha);

    //si todavia no llego al ultimo nenufar, espera un ratito y salta sola
    if (hojaActual < 2) {
      contadorPausa = contadorPausa + 1;
      if (contadorPausa > 30) {
        estado = 'SALTO';
        contadorPausa = 0;
      }
    }

    //avanza en X, sube en la primera mitad y baja en la segunda
  } else if (estado === 'SALTO') {
    mirandoDerecha = true;
    let destinoX = hojasX[hojaActual + 1];

    posX = posX + velocidadSalto;

    let mitadCamino = (hojasX[hojaActual] + destinoX) / 2;
    if (posX < mitadCamino) {
      posY = posY - 6; // Sube
    } else {
      posY = posY + 3; // Cae
    }

    dibujarPersonaje(animSalto[3], posX, posY, mirandoDerecha);

    //cuando llega a la posicion del proximo nenufar se frena y pasa a reposo
    if (posX >= destinoX) {
      hojaActual = hojaActual + 1;
      posX = hojasX[hojaActual];
      posY = hojasY[hojaActual];

      estado = 'REPOSO';
      contadorPausa = 0;
    }

    //lengua se reproduce cuando toco la barra espaciadora en el ultimo nenufar
  } else if (estado === 'LENGUA') {
    posX = hojasX[hojaActual];
    posY = hojasY[hojaActual];

    let velocidadLengua = 7;
    let frameLengua = floor(contadorLengua / velocidadLengua);

    if (frameLengua < animLengua.length) {
      dibujarPersonaje(animLengua[frameLengua], posX, posY, mirandoDerecha);
      contadorLengua = contadorLengua + 1;
    } else {
      //cuando termina de sacar la lengua, se gira a la izquierda y vuelve sola
      mirandoDerecha = false;
      estado = 'SALTO_VUELTA';
    }

    //salta hacia atras retrocediendo en X hoja por hoja
  } else if (estado === 'SALTO_VUELTA') {
    mirandoDerecha = false;
    let destinoX = hojasX[hojaActual - 1];

    posX = posX - velocidadSalto;

    let mitadCamino = (hojasX[hojaActual] + destinoX) / 2;
    if (posX > mitadCamino) {
      posY = posY - 4;
    } else {
      posY = posY + 6;
    }

    dibujarPersonaje(animSalto[3], posX, posY, mirandoDerecha);

    //si toca la hoja anterior, se fija si es la del medio o si ya llego al principio
    if (posX <= destinoX) {
      hojaActual = hojaActual - 1;
      posX = hojasX[hojaActual];
      posY = hojasY[hojaActual];

      if (hojaActual > 0) {
        estado = 'PAUSA_VUELTA';
        contadorPausa = 0;
      } else {
        mirandoDerecha = true;
        estado = 'FIN';
      }
    }

    //un descansito corto en el nenufar del medio antes del ultimo salto
  } else if (estado === 'PAUSA_VUELTA') {
    dibujarPersonaje(animReposo[0], posX, posY, mirandoDerecha);
    contadorPausa = contadorPausa + 1;

    if (contadorPausa > 15) {
      estado = 'SALTO_VUELTA';
    }

    //cuando llega a la hoja inicial se queda quieta respirando
  } else if (estado === 'FIN') {
    posX = hojasX[0];
    posY = hojasY[0];
    let frameActual = calcularFrame(2, velocidadAnimacion);
    dibujarPersonaje(animReposo[frameActual], posX, posY, mirandoDerecha);
  }
}

//funciones propias

//funcion con parametros y retorno: uso un for para recortar los fotogramas y devolver la lista lista
function recortarFila(numeroFila, cantidadFrames) {
  let lista = [];
  for (let i = 0; i < cantidadFrames; i = i + 1) {
    let cuadro = imgSpritesheet.get(i * anchoFrame, numeroFila * altoFrame, anchoFrame, altoFrame);
    lista.push(cuadro);
  }
  return lista;
}

//funcion con parametros y retorno: calcula el cuadro con frameCount para que respire en bucle
function calcularFrame(totalFrames, velocidad) {
  let frame = floor(frameCount / velocidad) % totalFrames;
  return frame;
}

//funcion con parametros: dibuja el sprite, lo agranda y lo da vuelta si mira a la derecha
function dibujarPersonaje(imagen, x, y, miraDer) {
  push();
  if (miraDer) {
    translate(x + anchoFrame * escala, y);
    scale(-1, 1);
    image(imagen, 0, 0, anchoFrame * escala, altoFrame * escala);
  } else {
    image(imagen, x, y, anchoFrame * escala, altoFrame * escala);
  }
  pop();
}

//funcion para reiniciar todas las variables y volver al inicio
function reiniciar() {
  hojaActual = 0;
  posX = hojasX[0];
  posY = hojasY[0];
  mirandoDerecha = true;
  contadorLengua = 0;
  contadorPausa = 0;
  estado = 'REPOSO';
}

//teclado
function keyPressed() {
  //con espacio saca la lengua solo si esta quieta en el ultimo nenufar

  if (key === ' ') {
    if (estado === 'REPOSO' && hojaActual === 2) {
      estado = 'LENGUA';
      contadorLengua = 0;
    }
  }

  //con la tecla R reinicio todo el recorrido
  if (key === 'r' || key === 'R') {
    reiniciar();
  }
}
