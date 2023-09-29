////Manejo del Dom
/// Es la manipulacion y edicion de elementos del html

const titulo = document.querySelector(".miTitulo");


function prenderRojo (interruptor, res) {
  resetColors();
  const bombillo = document.querySelector(".rojo");
  res();
  if(interruptor) {
    bombillo.style.backgroundColor = "red";
  } else {
    bombillo.style.backgroundColor = "gray";
  }
}

function prenderAmarillo (interruptor, res) {
  resetColors();
  const bombillo = document.querySelector(".amarillo");
  res();
  if(interruptor) {
    bombillo.style.backgroundColor = "yellow";
  } else {
    bombillo.style.backgroundColor = "gray";
  }
}

function prenderVerde (interruptor, res) {
  resetColors();
  const bombillo = document.querySelector(".verde");
  res();
  if(interruptor) {
    bombillo.style.backgroundColor = "green";
  } else {
    bombillo.style.backgroundColor = "gray";
  }
}

function resetColors() {
  const bombillo = document.querySelector(".rojo");
  const bombillo1 = document.querySelector(".amarillo");
  const bombillo2 = document.querySelector(".verde");
  bombillo.style.backgroundColor = "gray";
  bombillo1.style.backgroundColor = "gray";
  bombillo2.style.backgroundColor = "gray";
}


function iniciar() {

  new Promise ((res) => setTimeout(()=>{
    prenderRojo(true,res)
  },4000))
  
    .then(()=> {
      return new Promise ((res) => setTimeout(()=>{
        prenderAmarillo(true,res)
      },4000))
    })
    .then(()=> {
      return new Promise ((res) => setTimeout(()=>{
        prenderVerde(true,res)
        iniciar();
      },4000))
    })
}